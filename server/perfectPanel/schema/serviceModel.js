// backend/models/service.js
const mongoose = require('mongoose');

// Service Schema definition
const serviceSchema = new mongoose.Schema({
    id: { type: String, required: true },
    minSpeed: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
    controlTime: { type: String, required: true }, // e.g., '1 hour', '6 hours', '1 day'
}, { timestamps: true });

// Create the Service model using the schema
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
