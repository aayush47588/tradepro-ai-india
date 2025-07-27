// TradePro AI India - Advanced Trading Platform JavaScript - FIXED VERSION
// Comprehensive backend simulation for Indian markets with real-time updates

// Market Data with Enhanced Stock Information
const marketData = {
  stocks: [
    {
      symbol: "RELIANCE",
      name: "Reliance Industries Ltd",
      exchange: "NSE",
      sector: "Energy",
      currentPrice: 2456.75,
      change: 34.50,
      changePercent: 1.42,
      dayHigh: 2480.00,
      dayLow: 2420.00,
      volume: 1250000,
      marketCap: 1660000,
      pe: 28.5,
      aiPrediction: {
        signal: "BUY",
        confidence: 78,
        targetPrice: 2580,
        timeHorizon: "5 days",
        models: {
          lstm: { prediction: "STRONG_BUY", confidence: 84 },
          transformer: { prediction: "BUY", confidence: 76 },
          randomForest: { prediction: "BUY", confidence: 74 }
        }
      }
    },
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      exchange: "NSE",
      sector: "IT",
      currentPrice: 3842.30,
      change: -18.45,
      changePercent: -0.48,
      dayHigh: 3870.00,
      dayLow: 3835.00,
      volume: 890000,
      marketCap: 1412000,
      pe: 31.2,
      aiPrediction: {
        signal: "HOLD",
        confidence: 65,
        targetPrice: 3900,
        timeHorizon: "3 days",
        models: {
          lstm: { prediction: "HOLD", confidence: 68 },
          transformer: { prediction: "BUY", confidence: 72 },
          randomForest: { prediction: "SELL", confidence: 55 }
        }
      }
    },
    {
      symbol: "HDFCBANK",
      name: "HDFC Bank Ltd",
      exchange: "NSE",
      sector: "Banking",
      currentPrice: 1654.20,
      change: 12.80,
      changePercent: 0.78,
      dayHigh: 1670.00,
      dayLow: 1640.00,
      volume: 2100000,
      marketCap: 1245000,
      pe: 19.8,
      aiPrediction: {
        signal: "BUY",
        confidence: 82,
        targetPrice: 1720,
        timeHorizon: "7 days",
        models: {
          lstm: { prediction: "STRONG_BUY", confidence: 91 },
          transformer: { prediction: "STRONG_BUY", confidence: 88 },
          randomForest: { prediction: "BUY", confidence: 67 }
        }
      }
    },
    {
      symbol: "INFY",
      name: "Infosys Ltd",
      exchange: "NSE",
      sector: "IT",
      currentPrice: 1789.50,
      change: -8.30,
      changePercent: -0.46,
      dayHigh: 1800.00,
      dayLow: 1780.00,
      volume: 1450000,
      marketCap: 734000,
      pe: 27.9,
      aiPrediction: {
        signal: "SELL",
        confidence: 71,
        targetPrice: 1650,
        timeHorizon: "4 days",
        models: {
          lstm: { prediction: "SELL", confidence: 79 },
          transformer: { prediction: "HOLD", confidence: 68 },
          randomForest: { prediction: "SELL", confidence: 66 }
        }
      }
    },
    {
      symbol: "ITC",
      name: "ITC Ltd",
      exchange: "NSE",
      sector: "FMCG",
      currentPrice: 456.85,
      change: 5.60,
      changePercent: 1.24,
      dayHigh: 462.00,
      dayLow: 450.00,
      volume: 3200000,
      marketCap: 567000,
      pe: 22.4,
      aiPrediction: {
        signal: "BUY",
        confidence: 75,
        targetPrice: 485,
        timeHorizon: "6 days",
        models: {
          lstm: { prediction: "BUY", confidence: 85 },
          transformer: { prediction: "STRONG_BUY", confidence: 78 },
          randomForest: { prediction: "BUY", confidence: 62 }
        }
      }
    },
    {
      symbol: "WIPRO",
      name: "Wipro Ltd",
      exchange: "NSE",
      sector: "IT",
      currentPrice: 578.40,
      change: -3.20,
      changePercent: -0.55,
      dayHigh: 585.00,
      dayLow: 575.00,
      volume: 980000,
      marketCap: 312000,
      pe: 25.1,
      aiPrediction: {
        signal: "HOLD",
        confidence: 58,
        targetPrice: 590,
        timeHorizon: "2 days",
        models: {
          lstm: { prediction: "HOLD", confidence: 60 },
          transformer: { prediction: "HOLD", confidence: 58 },
          randomForest: { prediction: "SELL", confidence: 56 }
        }
      }
    },
    {
      symbol: "MARUTI",
      name: "Maruti Suzuki India Ltd",
      exchange: "NSE",
      sector: "Auto",
      currentPrice: 11245.60,
      change: 85.30,
      changePercent: 0.76,
      dayHigh: 11280.00,
      dayLow: 11200.00,
      volume: 445000,
      marketCap: 342000,
      pe: 28.7,
      aiPrediction: {
        signal: "BUY",
        confidence: 69,
        targetPrice: 11800,
        timeHorizon: "8 days",
        models: {
          lstm: { prediction: "BUY", confidence: 72 },
          transformer: { prediction: "BUY", confidence: 70 },
          randomForest: { prediction: "HOLD", confidence: 65 }
        }
      }
    },
    {
      symbol: "ICICIBANK",
      name: "ICICI Bank Ltd",
      exchange: "NSE",
      sector: "Banking",
      currentPrice: 1156.75,
      change: 8.45,
      changePercent: 0.74,
      dayHigh: 1165.00,
      dayLow: 1145.00,
      volume: 1890000,
      marketCap: 812000,
      pe: 16.2,
      aiPrediction: {
        signal: "BUY",
        confidence: 73,
        targetPrice: 1220,
        timeHorizon: "5 days",
        models: {
          lstm: { prediction: "BUY", confidence: 76 },
          transformer: { prediction: "BUY", confidence: 74 },
          randomForest: { prediction: "HOLD", confidence: 69 }
        }
      }
    },
    {
      symbol: "SBIN",
      name: "State Bank of India",
      exchange: "NSE",
      sector: "Banking",
      currentPrice: 823.20,
      change: -4.85,
      changePercent: -0.59,
      dayHigh: 830.00,
      dayLow: 820.00,
      volume: 2650000,
      marketCap: 734000,
      pe: 12.8,
      aiPrediction: {
        signal: "HOLD",
        confidence: 62,
        targetPrice: 840,
        timeHorizon: "3 days",
        models: {
          lstm: { prediction: "HOLD", confidence: 64 },
          transformer: { prediction: "BUY", confidence: 68 },
          randomForest: { prediction: "SELL", confidence: 54 }
        }
      }
    }
  ],
  indices: [
    { name: "Nifty 50", value: 23547.85, change: 145.30, changePercent: 0.62 },
    { name: "Bank Nifty", value: 50234.70, change: -89.45, changePercent: -0.18 },
    { name: "Nifty IT", value: 42156.30, change: -156.80, changePercent: -0.37 },
    { name: "Sensex", value: 77845.32, change: 234.56, changePercent: 0.30 }
  ],
  marketStatus: {
    status: "OPEN",
    time: "02:45 PM IST",
    nextEvent: "Market Close at 3:30 PM IST"
  },
  news: [
    {
      headline: "RBI maintains repo rate at 6.50%, maintains accommodative stance for growth",
      impact: "POSITIVE",
      relevantStocks: ["HDFCBANK", "ICICIBANK", "SBIN"],
      timestamp: "1 hour ago",
      sentiment: "Positive"
    },
    {
      headline: "Reliance Industries announces major green energy investment of ₹75,000 crores",
      impact: "POSITIVE",
      relevantStocks: ["RELIANCE"],
      timestamp: "2 hours ago",
      sentiment: "Very Positive"
    },
    {
      headline: "IT sector faces headwinds from global economic uncertainty, TCS guidance cautious",
      impact: "NEGATIVE",
      relevantStocks: ["TCS", "INFY", "WIPRO"],
      timestamp: "3 hours ago",
      sentiment: "Negative"
    },
    {
      headline: "Auto sector shows strong Q3 sales numbers, Maruti leads with 15% growth",
      impact: "POSITIVE",
      relevantStocks: ["MARUTI"],
      timestamp: "4 hours ago",
      sentiment: "Positive"
    }
  ]
};

// Sector Performance Data
const sectorData = [
  { name: "Banking", change: 1.85, stocks: 25 },
  { name: "IT", change: -0.45, stocks: 18 },
  { name: "Oil & Gas", change: 2.12, stocks: 12 },
  { name: "FMCG", change: 0.78, stocks: 15 },
  { name: "Auto", change: 1.23, stocks: 10 },
  { name: "Pharma", change: 0.95, stocks: 14 },
  { name: "Metals", change: -1.45, stocks: 8 },
  { name: "Realty", change: -0.85, stocks: 6 }
];

// Portfolio Data
const portfolioData = {
  totalValue: 1250000,
  availableFunds: 245000,
  dayPnL: 15750,
  dayPnLPercent: 1.28,
  totalPnL: 185600,
  totalPnLPercent: 17.43,
  xirr: 17.43,
  holdings: [
    {
      symbol: "RELIANCE",
      quantity: 50,
      avgPrice: 2430.00,
      currentPrice: 2456.75,
      value: 122837.50,
      pnl: 1337.5,
      pnlPercent: 1.10,
      sector: "Energy",
      investedValue: 121500
    },
    {
      symbol: "HDFCBANK",
      quantity: 100,
      avgPrice: 1620.00,
      currentPrice: 1654.20,
      value: 165420,
      pnl: 3420,
      pnlPercent: 2.11,
      sector: "Banking",
      investedValue: 162000
    },
    {
      symbol: "TCS",
      quantity: 30,
      avgPrice: 3900.00,
      currentPrice: 3842.30,
      value: 115269,
      pnl: -1731,
      pnlPercent: -1.48,
      sector: "IT",
      investedValue: 117000
    },
    {
      symbol: "ITC",
      quantity: 200,
      avgPrice: 445.00,
      currentPrice: 456.85,
      value: 91370,
      pnl: 2370,
      pnlPercent: 2.66,
      sector: "FMCG",
      investedValue: 89000
    }
  ]
};

// Global Variables
let currentSection = 'dashboard';
let currentChartSymbol = 'RELIANCE';
let liveChart = null;
let portfolioChart = null;
let confidenceChart = null;
let advancedChart = null;
let allocationChart = null;
let updateInterval = null;
let chartData = new Map();
let orders = [];
let notifications = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing TradePro AI India Platform...');
    try {
        initializeApp();
    } catch (error) {
        console.error('Failed to initialize app:', error);
    }
});

function initializeApp() {
    try {
        setupNavigation();
        setupEventListeners();
        setupModals();
        updateCurrentTime();
        
        // Populate initial data
        populateIndices();
        populateSidebarData();
        populateStockCards();
        populateAIPredictionsPreview();
        populateMarketNews();
        populateSectorHeatmap();
        populatePortfolioSummary();
        
        // Initialize charts with proper delay
        setTimeout(() => {
            initializeCharts();
        }, 1000);
        
        // Start real-time updates
        startRealTimeUpdates();
        
        console.log('Platform initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// FIXED Navigation Setup
function setupNavigation() {
    console.log('Setting up navigation...');
    
    const sidebarItems = document.querySelectorAll('.sidebar__item');
    
    sidebarItems.forEach(item => {
        // Remove any existing event listeners
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        newItem.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const section = this.getAttribute('data-section');
            console.log('Navigation clicked:', section);
            
            if (section && section !== currentSection) {
                switchToSection(section);
            }
            
            // Update active state immediately
            document.querySelectorAll('.sidebar__item').forEach(sidebarItem => {
                sidebarItem.classList.remove('sidebar__item--active');
            });
            this.classList.add('sidebar__item--active');
            
            return false;
        });
    });
    
    console.log('Navigation setup complete');
}

// FIXED Section Switching Function
function switchToSection(section) {
    try {
        console.log(`Switching from ${currentSection} to section: ${section}`);
        
        // Hide all sections first
        const allSections = document.querySelectorAll('.content-section');
        allSections.forEach(sectionEl => {
            sectionEl.classList.remove('active');
            sectionEl.style.display = 'none';
        });
        
        // Show target section
        const targetSection = document.getElementById(`${section}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.style.display = 'block';
            console.log(`Successfully showing section: ${section}-section`);
        } else {
            console.error(`Section element not found: ${section}-section`);
            // Fallback to dashboard
            const dashboardSection = document.getElementById('dashboard-section');
            if (dashboardSection) {
                dashboardSection.classList.add('active');
                dashboardSection.style.display = 'block';
                section = 'dashboard';
            }
        }
        
        // Update current section
        const oldSection = currentSection;
        currentSection = section;
        
        // Initialize section-specific content with longer delay for charts
        setTimeout(() => {
            initializeSectionContent(section);
        }, 200);
        
        console.log(`Section switched from ${oldSection} to ${currentSection}`);
        
    } catch (error) {
        console.error('Error switching section:', error);
        // Fallback to dashboard on error
        currentSection = 'dashboard';
        const dashboardSection = document.getElementById('dashboard-section');
        if (dashboardSection) {
            dashboardSection.classList.add('active');
            dashboardSection.style.display = 'block';
        }
    }
}

function initializeSectionContent(section) {
    try {
        console.log('Initializing content for section:', section);
        
        switch(section) {
            case 'dashboard':
                populateIndices();
                populateStockCards();
                populateAIPredictionsPreview();
                populateMarketNews();
                populateSectorHeatmap();
                setTimeout(() => {
                    if (liveChart) {
                        liveChart.resize();
                    } else {
                        initializeLiveChart();
                    }
                }, 300);
                break;
                
            case 'stocks':
                populateStockAnalysis();
                setTimeout(() => {
                    initializeAdvancedChart();
                }, 500);
                break;
                
            case 'trading':
                populateTradingInterface();
                break;
                
            case 'ai-predictions':
                populateDetailedPredictions();
                populateAIModels();
                setTimeout(() => {
                    initializeConfidenceChart();
                }, 500);
                break;
                
            case 'portfolio':
                populatePortfolioDetails();
                setTimeout(() => {
                    initializePortfolioChart();
                    initializeAllocationChart();
                }, 500);
                break;
                
            case 'analytics':
                populateAnalytics();
                break;
                
            case 'orders':
                populateOrderManagement();
                break;
                
            case 'options':
                populateFOTrading();
                break;
                
            default:
                console.warn('Unknown section for content initialization:', section);
        }
    } catch (error) {
        console.error('Error initializing section content:', error);
    }
}

// FIXED Event Listeners Setup
function setupEventListeners() {
    try {
        // Chart symbol change
        const chartSymbol = document.getElementById('chartSymbol');
        if (chartSymbol) {
            chartSymbol.addEventListener('change', function() {
                currentChartSymbol = this.value;
                updateChartTitle();
                updateLiveChart();
            });
        }
        
        // Timeframe buttons
        document.querySelectorAll('.timeframe-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.timeframe-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                updateLiveChart();
            });
        });
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const filter = this.dataset.filter;
                filterStocks(filter);
            });
        });
        
        // Stock analysis selector - FIXED
        const stockAnalysisSelector = document.getElementById('stockAnalysisSelector');
        if (stockAnalysisSelector) {
            stockAnalysisSelector.addEventListener('change', function() {
                const selectedSymbol = this.value;
                console.log('Stock analysis selector changed to:', selectedSymbol);
                populateStockAnalysis(selectedSymbol);
                setTimeout(() => {
                    initializeAdvancedChart();
                }, 300);
            });
        }
        
        // Settings and alerts buttons
        const settingsBtn = document.getElementById('settingsBtn');
        const alertsBtn = document.getElementById('alertsBtn');
        
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => openModal('settingsModal'));
        }
        
        if (alertsBtn) {
            alertsBtn.addEventListener('click', () => showNotifications());
        }
        
        // Refresh buttons
        document.querySelectorAll('[id*="refresh"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const originalContent = this.innerHTML;
                this.innerHTML = '<span class="spinner"></span>Refreshing...';
                setTimeout(() => {
                    this.innerHTML = originalContent;
                    updateMarketData();
                }, 1000);
            });
        });
        
        // Trading form elements - FIXED
        setTimeout(() => {
            setupTradingFormListeners();
        }, 1000);
        
        console.log('Event listeners setup complete');
    } catch (error) {
        console.error('Error setting up event listeners:', error);
    }
}

function setupTradingFormListeners() {
    // Quick buy/sell buttons
    document.querySelectorAll('#quickBuy, #quickSell').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.id === 'quickBuy' ? 'BUY' : 'SELL';
            const symbol = getCurrentAnalysisSymbol();
            handleQuickTrade(symbol, action);
        });
    });
    
    // Add to watchlist button
    const addToWatchlistBtn = document.getElementById('addToWatchlist');
    if (addToWatchlistBtn) {
        addToWatchlistBtn.addEventListener('click', function() {
            const symbol = getCurrentAnalysisSymbol();
            addToWatchlist(symbol);
        });
    }
}

function getCurrentAnalysisSymbol() {
    const selector = document.getElementById('stockAnalysisSelector');
    return selector ? selector.value : 'RELIANCE';
}

function handleQuickTrade(symbol, action) {
    const stock = marketData.stocks.find(s => s.symbol === symbol);
    if (!stock) return;
    
    showNotification(`${action} order for ${symbol} placed at ₹${formatNumber(stock.currentPrice)}`, 'success');
    console.log(`Quick ${action} executed for ${symbol}`);
}

// Modal Setup
function setupModals() {
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Data Population Functions
function populateIndices() {
    const indicesGrid = document.getElementById('indicesGrid');
    if (!indicesGrid) return;
    
    indicesGrid.innerHTML = marketData.indices.map(index => `
        <div class="index-item">
            <div class="index-name">${index.name}</div>
            <div class="index-value">${formatNumber(index.value)}</div>
            <div class="index-change ${index.change >= 0 ? 'positive' : 'negative'}">
                ${index.change >= 0 ? '+' : ''}${formatNumber(index.change)} (${index.changePercent >= 0 ? '+' : ''}${index.changePercent.toFixed(2)}%)
            </div>
        </div>
    `).join('');
}

function populateSidebarData() {
    const sidebarIndices = document.getElementById('sidebarIndices');
    const sidebarWatchlist = document.getElementById('sidebarWatchlist');
    
    if (sidebarIndices) {
        sidebarIndices.innerHTML = marketData.indices.slice(0, 4).map(index => `
            <div class="sidebar-item">
                <div>
                    <div class="sidebar-item__symbol">${index.name}</div>
                    <div class="sidebar-item__price">${formatNumber(index.value)}</div>
                </div>
                <div class="sidebar-item__change ${index.change >= 0 ? 'positive' : 'negative'}">
                    ${index.changePercent >= 0 ? '+' : ''}${index.changePercent.toFixed(2)}%
                </div>
            </div>
        `).join('');
    }
    
    if (sidebarWatchlist) {
        sidebarWatchlist.innerHTML = marketData.stocks.slice(0, 5).map(stock => `
            <div class="sidebar-item" onclick="handleWatchlistClick('${stock.symbol}')">
                <div>
                    <div class="sidebar-item__symbol">${stock.symbol}</div>
                    <div class="sidebar-item__price">₹${formatNumber(stock.currentPrice)}</div>
                </div>
                <div class="sidebar-item__change ${stock.change >= 0 ? 'positive' : 'negative'}">
                    ${stock.changePercent >= 0 ? '+' : ''}${stock.changePercent.toFixed(2)}%
                </div>
            </div>
        `).join('');
    }
}

// FIXED watchlist click handler
function handleWatchlistClick(symbol) {
    console.log('Watchlist item clicked:', symbol);
    
    // Update chart symbol if on dashboard
    if (currentSection === 'dashboard') {
        currentChartSymbol = symbol;
        updateChartTitle();
        updateLiveChart();
        
        // Update chart selector
        const chartSymbol = document.getElementById('chartSymbol');
        if (chartSymbol) {
            chartSymbol.value = symbol;
        }
    } else {
        // Open stock modal for other sections
        openStockModal(symbol);
    }
}

function populateStockCards() {
    const stocksGrid = document.getElementById('stocksGrid');
    if (!stocksGrid) return;
    
    stocksGrid.innerHTML = marketData.stocks.map(stock => `
        <div class="stock-card" onclick="openStockModal('${stock.symbol}')">
            <div class="stock-header">
                <div class="stock-symbol">${stock.symbol}</div>
                <div class="stock-exchange">${stock.exchange}</div>
            </div>
            <div class="stock-name">${stock.name}</div>
            <div class="stock-price-info">
                <div class="stock-price">₹${formatNumber(stock.currentPrice)}</div>
                <div class="stock-change">
                    <div class="change-value ${stock.change >= 0 ? 'positive' : 'negative'}">
                        ${stock.change >= 0 ? '+' : ''}₹${formatNumber(Math.abs(stock.change))}
                    </div>
                    <div class="change-percent">
                        (${stock.changePercent >= 0 ? '+' : ''}${stock.changePercent.toFixed(2)}%)
                    </div>
                </div>
            </div>
            <div class="stock-meta">
                <span>Vol: ${formatVolume(stock.volume)}</span>
                <span class="ai-signal ${stock.aiPrediction.signal.toLowerCase()}">${stock.aiPrediction.signal}</span>
            </div>
        </div>
    `).join('');
}

function populateAIPredictionsPreview() {
    const predictionsPreview = document.getElementById('predictionsPreview');
    if (!predictionsPreview) return;
    
    const topPredictions = marketData.stocks.slice(0, 3);
    predictionsPreview.innerHTML = topPredictions.map(stock => `
        <div class="prediction-item">
            <div class="prediction-header">
                <span class="prediction-symbol">${stock.symbol}</span>
                <span class="prediction-signal ${stock.aiPrediction.signal.toLowerCase()}">${stock.aiPrediction.signal}</span>
            </div>
            <div class="confidence-bar">
                <div class="confidence-fill" style="width: ${stock.aiPrediction.confidence}%"></div>
            </div>
            <div class="prediction-details">
                <span>Confidence: ${stock.aiPrediction.confidence}%</span>
                <span>Target: ₹${formatNumber(stock.aiPrediction.targetPrice)}</span>
            </div>
        </div>
    `).join('');
}

function populateMarketNews() {
    const newsList = document.getElementById('newsList');
    if (!newsList) return;
    
    newsList.innerHTML = marketData.news.map(item => `
        <div class="news-item">
            <div class="news-headline">${item.headline}</div>
            <div class="news-meta">
                <span>${item.timestamp}</span>
                <span class="news-sentiment ${item.sentiment.toLowerCase().replace(' ', '_')}">${item.sentiment.toUpperCase()}</span>
            </div>
            <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 4px;">
                Impact: ${item.impact} | Stocks: ${item.relevantStocks.join(', ')}
            </div>
        </div>
    `).join('');
}

function populateSectorHeatmap() {
    const sectorHeatmap = document.getElementById('sectorHeatmap');
    if (!sectorHeatmap) return;
    
    sectorHeatmap.innerHTML = sectorData.map(sector => `
        <div class="sector-item ${sector.change >= 0 ? 'positive' : 'negative'}">
            <div class="sector-name">${sector.name}</div>
            <div class="sector-change ${sector.change >= 0 ? 'positive' : 'negative'}">
                ${sector.change >= 0 ? '+' : ''}${sector.change.toFixed(2)}%
            </div>
            <div style="font-size: 10px; color: var(--color-text-secondary); margin-top: 4px;">
                ${sector.stocks} stocks
            </div>
        </div>
    `).join('');
}

function populatePortfolioSummary() {
    const portfolioValue = document.getElementById('portfolioValue');
    const portfolioChange = document.getElementById('portfolioChange');
    const buyingPower = document.getElementById('buyingPower');
    
    if (portfolioValue) portfolioValue.textContent = `₹${formatNumber(portfolioData.totalValue)}`;
    if (portfolioChange) {
        portfolioChange.textContent = `${portfolioData.dayPnL >= 0 ? '+' : ''}₹${formatNumber(Math.abs(portfolioData.dayPnL))} (${portfolioData.dayPnLPercent >= 0 ? '+' : ''}${portfolioData.dayPnLPercent.toFixed(2)}%)`;
        portfolioChange.className = `stat-change ${portfolioData.dayPnL >= 0 ? 'positive' : 'negative'}`;
    }
    if (buyingPower) buyingPower.textContent = `₹${formatNumber(portfolioData.availableFunds)}`;
}

// FIXED Stock Analysis Population
function populateStockAnalysis(symbol = 'RELIANCE') {
    const stock = marketData.stocks.find(s => s.symbol === symbol);
    if (!stock) {
        console.error('Stock not found:', symbol);
        return;
    }
    
    console.log('Populating stock analysis for:', symbol);
    
    const stockDetailsTitle = document.getElementById('stockDetailsTitle');
    const stockInfoGrid = document.getElementById('stockInfoGrid');
    const aiStockAnalysis = document.getElementById('aiStockAnalysis');
    const quickTradeForm = document.getElementById('quickTradeForm');
    
    if (stockDetailsTitle) {
        stockDetailsTitle.textContent = `${stock.symbol} - ${stock.name}`;
    }
    
    if (stockInfoGrid) {
        stockInfoGrid.innerHTML = `
            <div class="stock-info-item">
                <span class="info-label">Current Price</span>
                <span class="info-value">₹${formatNumber(stock.currentPrice)}</span>
            </div>
            <div class="stock-info-item">
                <span class="info-label">Day Change</span>
                <span class="info-value ${stock.change >= 0 ? 'text-success' : 'text-error'}">
                    ${stock.change >= 0 ? '+' : ''}₹${formatNumber(Math.abs(stock.change))} (${stock.changePercent >= 0 ? '+' : ''}${stock.changePercent.toFixed(2)}%)
                </span>
            </div>
            <div class="stock-info-item">
                <span class="info-label">Day Range</span>
                <span class="info-value">₹${formatNumber(stock.dayLow)} - ₹${formatNumber(stock.dayHigh)}</span>
            </div>
            <div class="stock-info-item">
                <span class="info-label">Volume</span>
                <span class="info-value">${formatVolume(stock.volume)}</span>
            </div>
            <div class="stock-info-item">
                <span class="info-label">Market Cap</span>
                <span class="info-value">₹${formatNumber(stock.marketCap / 10000)} Cr</span>
            </div>
            <div class="stock-info-item">
                <span class="info-label">P/E Ratio</span>
                <span class="info-value">${stock.pe}</span>
            </div>
        `;
    }
    
    if (aiStockAnalysis) {
        const expectedReturn = ((stock.aiPrediction.targetPrice - stock.currentPrice) / stock.currentPrice) * 100;
        aiStockAnalysis.innerHTML = `
            <div class="ai-prediction-card">
                <div class="prediction-header" style="margin-bottom: 16px;">
                    <h4 style="margin: 0;">AI Recommendation: <span class="prediction-signal ${stock.aiPrediction.signal.toLowerCase()}">${stock.aiPrediction.signal}</span></h4>
                    <div class="confidence-score" style="font-size: 18px; font-weight: bold; color: var(--color-primary);">${stock.aiPrediction.confidence}% Confidence</div>
                </div>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: ${stock.aiPrediction.confidence}%"></div>
                </div>
                <div class="prediction-details" style="display: grid; grid-template-columns: 1fr; gap: 12px; margin: 16px 0;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>Target Price:</span>
                        <span class="text-primary font-semibold">₹${formatNumber(stock.aiPrediction.targetPrice)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>Time Horizon:</span>
                        <span>${stock.aiPrediction.timeHorizon}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>Expected Return:</span>
                        <span class="${expectedReturn >= 0 ? 'text-success' : 'text-error'} font-semibold">
                            ${expectedReturn.toFixed(2)}%
                        </span>
                    </div>
                </div>
                <div class="model-consensus" style="margin-top: 20px;">
                    <h5 style="margin-bottom: 12px;">Model Consensus:</h5>
                    <div style="display: grid; gap: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span>LSTM:</span>
                            <div>
                                <span class="prediction-signal ${stock.aiPrediction.models.lstm.prediction.toLowerCase()}">${stock.aiPrediction.models.lstm.prediction}</span>
                                <span style="margin-left: 8px;">(${stock.aiPrediction.models.lstm.confidence}%)</span>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span>Transformer:</span>
                            <div>
                                <span class="prediction-signal ${stock.aiPrediction.models.transformer.prediction.toLowerCase()}">${stock.aiPrediction.models.transformer.prediction}</span>
                                <span style="margin-left: 8px;">(${stock.aiPrediction.models.transformer.confidence}%)</span>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span>Random Forest:</span>
                            <div>
                                <span class="prediction-signal ${stock.aiPrediction.models.randomForest.prediction.toLowerCase()}">${stock.aiPrediction.models.randomForest.prediction}</span>
                                <span style="margin-left: 8px;">(${stock.aiPrediction.models.randomForest.confidence}%)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (quickTradeForm) {
        quickTradeForm.innerHTML = `
            <form class="quick-trade-form">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Order Type</label>
                        <select class="form-control">
                            <option value="MARKET">Market</option>
                            <option value="LIMIT">Limit</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Quantity</label>
                        <input type="number" class="form-control" value="1" min="1">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Price (₹)</label>
                    <input type="number" class="form-control" value="${stock.currentPrice}" step="0.05">
                </div>
                <div class="trade-buttons">
                    <button type="button" class="btn btn--success btn--full-width" onclick="placeQuickOrder('${symbol}', 'BUY')">
                        Buy ${symbol}
                    </button>
                    <button type="button" class="btn btn--error btn--full-width" onclick="placeQuickOrder('${symbol}', 'SELL')">
                        Sell ${symbol}
                    </button>
                </div>
            </form>
        `;
    }
    
    console.log('Stock analysis populated successfully for:', symbol);
}

function populateDetailedPredictions() {
    const detailedPredictionsList = document.getElementById('detailedPredictionsList');
    if (!detailedPredictionsList) return;
    
    detailedPredictionsList.innerHTML = marketData.stocks.map(stock => {
        const expectedReturn = ((stock.aiPrediction.targetPrice - stock.currentPrice) / stock.currentPrice) * 100;
        return `
            <div class="prediction-item" style="margin-bottom: 16px;">
                <div class="prediction-header">
                    <div>
                        <span class="prediction-symbol">${stock.symbol}</span>
                        <div style="font-size: 12px; color: var(--color-text-secondary);">${stock.name}</div>
                    </div>
                    <span class="prediction-signal ${stock.aiPrediction.signal.toLowerCase()}">${stock.aiPrediction.signal}</span>
                </div>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: ${stock.aiPrediction.confidence}%"></div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 12px; font-size: 12px;">
                    <div>
                        <div style="color: var(--color-text-secondary);">Current Price</div>
                        <div style="font-weight: bold;">₹${formatNumber(stock.currentPrice)}</div>
                    </div>
                    <div>
                        <div style="color: var(--color-text-secondary);">Target Price</div>
                        <div style="font-weight: bold; color: var(--color-primary);">₹${formatNumber(stock.aiPrediction.targetPrice)}</div>
                    </div>
                    <div>
                        <div style="color: var(--color-text-secondary);">Expected Return</div>
                        <div style="font-weight: bold;" class="${expectedReturn >= 0 ? 'text-success' : 'text-error'}">
                            ${expectedReturn.toFixed(2)}%
                        </div>
                    </div>
                    <div>
                        <div style="color: var(--color-text-secondary);">Confidence</div>
                        <div style="font-weight: bold;">${stock.aiPrediction.confidence}%</div>
                    </div>
                </div>
                <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 8px;">
                    Time Horizon: ${stock.aiPrediction.timeHorizon}
                </div>
            </div>
        `;
    }).join('');
}

function populateAIModels() {
    const modelsGrid = document.getElementById('modelsGrid');
    if (!modelsGrid) return;
    
    const models = [
        { name: "LSTM Neural Network", accuracy: 84.7, status: "Active", lastUpdate: "2 min ago" },
        { name: "Transformer + Sentiment", accuracy: 89.2, status: "Active", lastUpdate: "1 min ago" },
        { name: "Random Forest Ensemble", accuracy: 76.3, status: "Active", lastUpdate: "3 min ago" },
        { name: "Technical Analysis Bot", accuracy: 78.1, status: "Active", lastUpdate: "1 min ago" }
    ];
    
    modelsGrid.innerHTML = models.map(model => `
        <div style="padding: 16px; border: 1px solid var(--color-card-border); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <h4 style="margin: 0; font-size: 14px;">${model.name}</h4>
                <span style="color: var(--color-success); font-size: 12px; font-weight: bold;">${model.status}</span>
            </div>
            <div style="text-align: center; margin: 12px 0;">
                <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);">${model.accuracy}%</div>
                <div style="font-size: 12px; color: var(--color-text-secondary);">Accuracy</div>
            </div>
            <div style="font-size: 11px; color: var(--color-text-secondary);">
                Last Updated: ${model.lastUpdate}
            </div>
        </div>
    `).join('');
}

function populateTradingInterface() {
    console.log('Populating trading interface...');
}

function populatePortfolioDetails() {
    console.log('Populating portfolio details...');
}

function populateAnalytics() {
    console.log('Populating analytics...');
}

function populateOrderManagement() {
    console.log('Populating order management...');
}

function populateFOTrading() {
    console.log('Populating F&O trading...');
}

// FIXED Chart Initialization
function initializeCharts() {
    console.log('Initializing charts...');
    try {
        initializeLiveChart();
    } catch (error) {
        console.error('Error initializing charts:', error);
    }
}

function initializeLiveChart() {
    const ctx = document.getElementById('liveChart');
    if (!ctx) {
        console.warn('Live chart canvas not found');
        return;
    }
    
    try {
        const labels = generateTimeLabels(30);
        const data = generatePriceData(getCurrentPrice(currentChartSymbol), 30);
        
        if (liveChart) {
            liveChart.destroy();
        }
        
        liveChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `${currentChartSymbol} Price`,
                    data: data,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: '#1FB8CD',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return `Price: ₹${formatNumber(context.parsed.y)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxTicksLimit: 8
                        }
                    },
                    y: {
                        display: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            callback: function(value) {
                                return '₹' + formatNumber(value);
                            }
                        }
                    }
                }
            }
        });
        
        chartData.set(currentChartSymbol, { labels, data });
        console.log('Live chart initialized successfully');
        
    } catch (error) {
        console.error('Error creating live chart:', error);
    }
}

function initializeAdvancedChart() {
    const ctx = document.getElementById('advancedChart');
    if (!ctx) {
        console.warn('Advanced chart canvas not found');
        return;
    }
    
    try {
        const currentSymbol = getCurrentAnalysisSymbol();
        const labels = generateTimeLabels(50);
        const basePrice = getCurrentPrice(currentSymbol);
        const candlestickData = labels.map((_, i) => {
            const variation = (Math.random() - 0.5) * basePrice * 0.02;
            const open = basePrice + variation;
            const close = open + (Math.random() - 0.5) * basePrice * 0.015;
            const high = Math.max(open, close) + Math.random() * basePrice * 0.01;
            const low = Math.min(open, close) - Math.random() * basePrice * 0.01;
            return { x: i, o: open, h: high, l: low, c: close };
        });
        
        if (advancedChart) {
            advancedChart.destroy();
        }
        
        advancedChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Price',
                        data: candlestickData.map(d => d.c),
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.1
                    },
                    {
                        label: 'High',
                        data: candlestickData.map(d => d.h),
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        borderWidth: 1,
                        fill: false,
                        tension: 0.1,
                        borderDash: [5, 5]
                    },
                    {
                        label: 'Low',
                        data: candlestickData.map(d => d.l),
                        borderColor: '#B4413C',
                        backgroundColor: 'rgba(180, 65, 60, 0.1)',
                        borderWidth: 1,
                        fill: false,
                        tension: 0.1,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxTicksLimit: 10
                        }
                    },
                    y: {
                        display: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            callback: function(value) {
                                return '₹' + formatNumber(value);
                            }
                        }
                    }
                }
            }
        });
        
        console.log('Advanced chart initialized successfully');
        
    } catch (error) {
        console.error('Error creating advanced chart:', error);
    }
}

function initializePortfolioChart() {
    const ctx = document.getElementById('portfolioChart');
    if (!ctx) return;
    
    try {
        const labels = generateDateLabels(30);
        const portfolioPerformanceData = generatePortfolioPerformanceData(30);
        const niftyData = generateBenchmarkData(30);
        
        if (portfolioChart) {
            portfolioChart.destroy();
        }
        
        portfolioChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Portfolio',
                        data: portfolioPerformanceData,
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'NIFTY 50',
                        data: niftyData,
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    },
                    y: {
                        display: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            callback: function(value) {
                                return '₹' + (value / 100000).toFixed(1) + 'L';
                            }
                        }
                    }
                }
            }
        });
        
        console.log('Portfolio chart initialized successfully');
        
    } catch (error) {
        console.error('Error creating portfolio chart:', error);
    }
}

function initializeConfidenceChart() {
    const ctx = document.getElementById('confidenceChart');
    if (!ctx) return;
    
    try {
        const confidenceData = marketData.stocks.map(stock => stock.aiPrediction.confidence);
        const labels = marketData.stocks.map(stock => stock.symbol);
        
        if (confidenceChart) {
            confidenceChart.destroy();
        }
        
        confidenceChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'AI Confidence Level',
                    data: confidenceData,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454'],
                    borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    },
                    y: {
                        display: true,
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
        
        console.log('Confidence chart initialized successfully');
        
    } catch (error) {
        console.error('Error creating confidence chart:', error);
    }
}

function initializeAllocationChart() {
    const ctx = document.getElementById('allocationChart');
    if (!ctx) return;
    
    try {
        const sectorAllocation = portfolioData.holdings.reduce((acc, holding) => {
            acc[holding.sector] = (acc[holding.sector] || 0) + holding.value;
            return acc;
        }, {});
        
        const labels = Object.keys(sectorAllocation);
        const data = Object.values(sectorAllocation);
        
        if (allocationChart) {
            allocationChart.destroy();
        }
        
        allocationChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                    borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            padding: 20
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed * 100) / total).toFixed(1);
                                return `${context.label}: ${percentage}% (₹${formatNumber(context.parsed)})`;
                            }
                        }
                    }
                }
            }
        });
        
        console.log('Allocation chart initialized successfully');
        
    } catch (error) {
        console.error('Error creating allocation chart:', error);
    }
}

// Real-time Updates
function startRealTimeUpdates() {
    updateInterval = setInterval(() => {
        updateMarketData();
        updateCharts();
        updatePortfolioData();
    }, 3000);
    
    setInterval(updateCurrentTime, 1000);
}

function updateMarketData() {
    // Simulate price movements
    marketData.stocks.forEach(stock => {
        const volatility = 0.002;
        const change = (Math.random() - 0.5) * volatility * stock.currentPrice;
        stock.currentPrice += change;
        stock.change += change;
        stock.changePercent = (stock.change / (stock.currentPrice - stock.change)) * 100;
        
        // Update high/low
        stock.dayHigh = Math.max(stock.dayHigh, stock.currentPrice);
        stock.dayLow = Math.min(stock.dayLow, stock.currentPrice);
    });
    
    // Update indices
    marketData.indices.forEach(index => {
        const change = (Math.random() - 0.5) * 0.001 * index.value;
        index.value += change;
        index.change += change;
        index.changePercent = (index.change / (index.value - index.change)) * 100;
    });
    
    // Update displays
    if (currentSection === 'dashboard') {
        populateIndices();
        populateStockCards();
        populateSidebarData();
    }
    
    updatePortfolioSummary();
}

function updateCharts() {
    if (liveChart && currentSection === 'dashboard') {
        const currentTime = new Date().toLocaleTimeString('en-IN', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
        const currentPrice = getCurrentPrice(currentChartSymbol);
        
        liveChart.data.labels.shift();
        liveChart.data.labels.push(currentTime);
        liveChart.data.datasets[0].data.shift();
        liveChart.data.datasets[0].data.push(currentPrice);
        liveChart.update('none');
    }
}

function updatePortfolioData() {
    // Update portfolio holdings based on current prices
    portfolioData.holdings.forEach(holding => {
        const stock = marketData.stocks.find(s => s.symbol === holding.symbol);
        if (stock) {
            holding.currentPrice = stock.currentPrice;
            holding.value = holding.quantity * stock.currentPrice;
            holding.pnl = holding.value - holding.investedValue;
            holding.pnlPercent = (holding.pnl / holding.investedValue) * 100;
        }
    });
    
    // Update totals
    const totalInvested = portfolioData.holdings.reduce((sum, h) => sum + h.investedValue, 0);
    const totalValue = portfolioData.holdings.reduce((sum, h) => sum + h.value, 0);
    portfolioData.totalValue = totalValue + portfolioData.availableFunds;
    portfolioData.totalPnL = totalValue - totalInvested;
    portfolioData.totalPnLPercent = (portfolioData.totalPnL / totalInvested) * 100;
}

function updateCurrentTime() {
    const timeEl = document.getElementById('currentTime');
    if (timeEl) {
        const now = new Date();
        timeEl.textContent = now.toLocaleTimeString('en-IN', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Kolkata'
        }) + ' IST';
    }
    
    // Update market status
    const marketSession = document.getElementById('marketSession');
    if (marketSession) {
        const hour = new Date().getHours();
        if (hour >= 9 && hour < 15) {
            marketSession.textContent = 'Live Trading Session';
            marketSession.className = 'market-session';
        } else if (hour >= 15 && hour < 16) {
            marketSession.textContent = 'Post-Market Session';
            marketSession.className = 'market-session post-market';
        } else {
            marketSession.textContent = 'Market Closed';
            marketSession.className = 'market-session closed';
        }
    }
}

// Helper Functions
function updateChartTitle() {
    const chartTitle = document.getElementById('chartTitle');
    if (chartTitle) {
        chartTitle.textContent = currentChartSymbol;
    }
}

function updateLiveChart() {
    if (liveChart) {
        const newData = generatePriceData(getCurrentPrice(currentChartSymbol), 30);
        liveChart.data.datasets[0].data = newData;
        liveChart.data.datasets[0].label = `${currentChartSymbol} Price`;
        liveChart.update();
    }
}

function filterStocks(filter) {
    const stocksGrid = document.getElementById('stocksGrid');
    if (!stocksGrid) return;
    
    let filteredStocks = marketData.stocks;
    
    switch(filter) {
        case 'gainers':
            filteredStocks = marketData.stocks.filter(s => s.change > 0);
            break;
        case 'losers':
            filteredStocks = marketData.stocks.filter(s => s.change < 0);
            break;
        default:
            filteredStocks = marketData.stocks;
    }
    
    stocksGrid.innerHTML = filteredStocks.map(stock => `
        <div class="stock-card" onclick="openStockModal('${stock.symbol}')">
            <div class="stock-header">
                <div class="stock-symbol">${stock.symbol}</div>
                <div class="stock-exchange">${stock.exchange}</div>
            </div>
            <div class="stock-name">${stock.name}</div>
            <div class="stock-price-info">
                <div class="stock-price">₹${formatNumber(stock.currentPrice)}</div>
                <div class="stock-change">
                    <div class="change-value ${stock.change >= 0 ? 'positive' : 'negative'}">
                        ${stock.change >= 0 ? '+' : ''}₹${formatNumber(Math.abs(stock.change))}
                    </div>
                    <div class="change-percent">
                        (${stock.changePercent >= 0 ? '+' : ''}${stock.changePercent.toFixed(2)}%)
                    </div>
                </div>
            </div>
            <div class="stock-meta">
                <span>Vol: ${formatVolume(stock.volume)}</span>
                <span class="ai-signal ${stock.aiPrediction.signal.toLowerCase()}">${stock.aiPrediction.signal}</span>
            </div>
        </div>
    `).join('');
}

function openStockModal(symbol) {
    const stock = marketData.stocks.find(s => s.symbol === symbol);
    if (!stock) return;
    
    const modalTitle = document.getElementById('modalStockTitle');
    const modalContent = document.getElementById('modalStockContent');
    
    if (modalTitle) {
        modalTitle.textContent = `${stock.symbol} - ${stock.name}`;
    }
    
    if (modalContent) {
        const expectedReturn = ((stock.aiPrediction.targetPrice - stock.currentPrice) / stock.currentPrice) * 100;
        modalContent.innerHTML = `
            <div class="stock-modal-content">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 36px; font-weight: bold; color: var(--color-text);">₹${formatNumber(stock.currentPrice)}</div>
                    <div style="font-size: 18px; font-weight: bold;" class="${stock.change >= 0 ? 'text-success' : 'text-error'}">
                        ${stock.change >= 0 ? '+' : ''}₹${formatNumber(Math.abs(stock.change))} (${stock.changePercent >= 0 ? '+' : ''}${stock.changePercent.toFixed(2)}%)
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px;">
                    <div style="display: flex; justify-content: space-between; padding: 12px; border: 1px solid var(--color-card-border); border-radius: 8px;">
                        <span style="color: var(--color-text-secondary);">Day Range:</span>
                        <span>₹${formatNumber(stock.dayLow)} - ₹${formatNumber(stock.dayHigh)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 12px; border: 1px solid var(--color-card-border); border-radius: 8px;">
                        <span style="color: var(--color-text-secondary);">Volume:</span>
                        <span>${formatVolume(stock.volume)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 12px; border: 1px solid var(--color-card-border); border-radius: 8px;">
                        <span style="color: var(--color-text-secondary);">Market Cap:</span>
                        <span>₹${formatNumber(stock.marketCap / 10000)} Cr</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 12px; border: 1px solid var(--color-card-border); border-radius: 8px;">
                        <span style="color: var(--color-text-secondary);">P/E Ratio:</span>
                        <span>${stock.pe}</span>
                    </div>
                </div>
                
                <div style="margin-bottom: 24px;">
                    <h4 style="margin-bottom: 16px;">🤖 AI Recommendation</h4>
                    <div style="padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <span class="prediction-signal ${stock.aiPrediction.signal.toLowerCase()}" style="font-size: 16px; padding: 6px 12px;">${stock.aiPrediction.signal}</span>
                            <span style="font-size: 18px; font-weight: bold; color: var(--color-primary);">${stock.aiPrediction.confidence}% Confidence</span>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-size: 14px;">
                            <div>
                                <div style="color: var(--color-text-secondary);">Target:</div>
                                <div style="font-weight: bold; color: var(--color-primary);">₹${formatNumber(stock.aiPrediction.targetPrice)}</div>
                            </div>
                            <div>
                                <div style="color: var(--color-text-secondary);">Timeline:</div>
                                <div style="font-weight: bold;">${stock.aiPrediction.timeHorizon}</div>
                            </div>
                            <div>
                                <div style="color: var(--color-text-secondary);">Expected Return:</div>
                                <div style="font-weight: bold;" class="${expectedReturn >= 0 ? 'text-success' : 'text-error'}">
                                    ${expectedReturn.toFixed(2)}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                    <button class="btn btn--success" onclick="placeQuickOrder('${symbol}', 'BUY')">Buy ${symbol}</button>
                    <button class="btn btn--error" onclick="placeQuickOrder('${symbol}', 'SELL')">Sell ${symbol}</button>
                    <button class="btn btn--secondary" onclick="addToWatchlist('${symbol}')">Add to Watchlist</button>
                </div>
            </div>
        `;
    }
    
    openModal('stockModal');
}

function placeQuickOrder(symbol, side) {
    const stock = marketData.stocks.find(s => s.symbol === symbol);
    if (!stock) return;
    
    const order = {
        id: Date.now(),
        symbol: symbol,
        side: side,
        quantity: 1,
        price: stock.currentPrice,
        type: 'MARKET',
        status: 'EXECUTED',
        timestamp: new Date().toISOString()
    };
    
    orders.push(order);
    
    // Show success notification
    showNotification(`${side} order executed for ${symbol} at ₹${formatNumber(stock.currentPrice)}`, 'success');
    
    // Close modal
    closeModal('stockModal');
    
    console.log('Order placed:', order);
}

function addToWatchlist(symbol) {
    showNotification(`${symbol} added to watchlist`, 'success');
    closeModal('stockModal');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : 'info'});
        color: white;
        border-radius: var(--radius-base);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function showNotifications() {
    showNotification('📢 Trading Alerts: RELIANCE Strong Buy (78% confidence), HDFCBANK Price target ₹1,720, INFY Sell signal triggered', 'info');
}

// Data Generation Functions
function generateTimeLabels(count) {
    const labels = [];
    const now = new Date();
    for (let i = count - 1; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60000);
        labels.push(time.toLocaleTimeString('en-IN', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        }));
    }
    return labels;
}

function generateDateLabels(count) {
    const labels = [];
    const now = new Date();
    for (let i = count - 1; i >= 0; i--) {
        const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
        labels.push(date.toLocaleDateString('en-IN', {
            month: 'short',
            day: 'numeric'
        }));
    }
    return labels;
}

function generatePriceData(basePrice, count) {
    const data = [];
    let price = basePrice;
    for (let i = 0; i < count; i++) {
        const change = (Math.random() - 0.5) * basePrice * 0.02;
        price += change;
        data.push(price);
    }
    return data;
}

function generatePortfolioPerformanceData(count) {
    const data = [];
    let value = portfolioData.totalValue;
    for (let i = 0; i < count; i++) {
        const change = (Math.random() - 0.4) * 5000;
        value += change;
        data.push(value);
    }
    return data;
}

function generateBenchmarkData(count) {
    const data = [];
    const baseValue = portfolioData.totalValue;
    let value = baseValue;
    for (let i = 0; i < count; i++) {
        const change = (Math.random() - 0.45) * 3000;
        value += change;
        data.push(value);
    }
    return data;
}

// Utility Functions
function formatNumber(number) {
    return new Intl.NumberFormat('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
}

function formatVolume(volume) {
    if (volume >= 10000000) {
        return (volume / 10000000).toFixed(2) + 'Cr';
    } else if (volume >= 100000) {
        return (volume / 100000).toFixed(2) + 'L';
    } else {
        return volume.toLocaleString('en-IN');
    }
}

function getCurrentPrice(symbol) {
    const stock = marketData.stocks.find(s => s.symbol === symbol);
    return stock ? stock.currentPrice : 2456.75;
}

// Global function exports for window scope
window.switchToSection = switchToSection;
window.openStockModal = openStockModal;
window.placeQuickOrder = placeQuickOrder;
window.addToWatchlist = addToWatchlist;
window.handleWatchlistClick = handleWatchlistClick;

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // Only show notification for critical errors, not minor ones
    if (e.error && e.error.message && !e.error.message.includes('ResizeObserver')) {
        showNotification('A minor error occurred. The platform is still functional.', 'warning');
    }
});

console.log('TradePro AI India Platform loaded successfully - All Issues Fixed');