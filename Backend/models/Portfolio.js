const mongoose = require('mongoose');

const portfolioSchema = mongoose.Schema({
  strategy: { type: String, required: true },
  totalValue: { type: String, required: true },
  dailyPL: { type: String, required: true },
  winRate: { type: String, required: true },
  ROI: { type: String, required: true },
  CAGR: { type: String, required: true },
  drawdown: { type: String, required: true },
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
