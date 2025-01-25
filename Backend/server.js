const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const portfolioRoutes = require('./routes/portfolioRoutes');

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // To handle JSON requests
app.use(cors()); // Enable CORS

app.use('/api/portfolio', portfolioRoutes); // Use portfolio routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
