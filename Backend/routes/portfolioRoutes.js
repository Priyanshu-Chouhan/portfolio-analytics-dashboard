const express = require('express');
const router = express.Router();
const {
  getPortfolioData,
  seedPortfolioData,
} = require('../controllers/portfolioController');

// Route to get portfolio data
router.get('/data', getPortfolioData);

// Route to seed dummy data
router.post('/seed', seedPortfolioData);

module.exports = router;
