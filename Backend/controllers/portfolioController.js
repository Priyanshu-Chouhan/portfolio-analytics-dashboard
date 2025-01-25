const Portfolio = require('../models/Portfolio'); // Ensure correct import of the model
const dummyData = require('../data/dummyData'); // Ensure dummyData is imported correctly (or declared here)

// Seed portfolio data
const seedPortfolioData = async (req, res) => {
  try {
    // Clear existing data
    await Portfolio.deleteMany();
    
    // Insert new dummy data
    await Portfolio.insertMany(dummyData);

    res.status(200).json({ message: 'Dummy data seeded!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get portfolio data
const getPortfolioData = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio data' });
  }
};

module.exports = {
  getPortfolioData,
  seedPortfolioData,
};
