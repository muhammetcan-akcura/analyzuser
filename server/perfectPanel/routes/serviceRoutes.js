// backend/routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/servicesController');

// Get all services
router.get('/', serviceController.getAllServices);

// Add a new service
router.post('/', serviceController.addService);

module.exports = router;
