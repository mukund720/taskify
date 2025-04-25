const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swagger');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
// CORS setup
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
app.use(bodyParser.json());

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use('/api/tasks', require('./routes/task.routes.js'));

app.get('/', (req, res) => {
  res.send('Taskify Backend is running...');
});

// Export app to use in tests
if (require.main === module) {
  // Start server only if running directly
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
}

module.exports = app;  // Ensure app is exported for testing
