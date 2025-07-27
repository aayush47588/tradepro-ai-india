// TradePro AI India - Main Server File
// Complete Node.js/Express backend for Indian trading platform

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const compression = require('compression');
const morgan = require('morgan');

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/auth');
const stockRoutes = require('./routes/stocks');
const orderRoutes = require('./routes/orders');
const portfolioRoutes = require('./routes/portfolio');
const aiRoutes = require('./routes/ai');
const marketDataRoutes = require('./routes/marketData');
const notificationRoutes = require('./routes/notifications');

// Import services
const MarketDataService = require('./services/MarketDataService');
const AIService = require('./services/AIService');
const OrderService = require('./services/OrderService');
const RiskManagementService = require('./services/RiskManagementService');

// Import middlewares
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const validateRequest = require('./middleware/validation');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('combined'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tradepro-ai-india', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('✓ Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/orders', authMiddleware, orderRoutes);
app.use('/api/portfolio', authMiddleware, portfolioRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/market-data', marketDataRoutes);
app.use('/api/notifications', authMiddleware, notificationRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Subscribe to market data
  socket.on('subscribe-market-data', (symbols) => {
    console.log('Subscribing to market data for symbols:', symbols);
    MarketDataService.subscribeToSymbols(socket, symbols);
  });

  // Subscribe to AI predictions
  socket.on('subscribe-ai-predictions', (symbols) => {
    console.log('Subscribing to AI predictions for symbols:', symbols);
    AIService.subscribeToAIPredictions(socket, symbols);
  });

  // Handle order placement
  socket.on('place-order', async (orderData) => {
    try {
      const result = await OrderService.placeOrder(orderData);
      socket.emit('order-response', result);

      // Broadcast to risk management
      RiskManagementService.assessRisk(orderData);
    } catch (error) {
      socket.emit('order-error', { error: error.message });
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    MarketDataService.unsubscribeClient(socket);
    AIService.unsubscribeClient(socket);
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 TradePro AI India server running on port ${PORT}`);

  // Initialize services
  MarketDataService.initialize();
  AIService.initialize();
  OrderService.initialize();
  RiskManagementService.initialize();
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    mongoose.connection.close();
    process.exit(0);
  });
});

module.exports = app;
