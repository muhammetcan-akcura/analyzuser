// backend/controllers/serviceController.js
const Service = require('../schema/serviceModel');

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching services' });
    }
};

// Add a new service
exports.addService = async (req, res) => {
    const { id, minSpeed, maxSpeed, controlTime } = req.body;

    // Validate input
    if (!id || !minSpeed || !maxSpeed || !controlTime) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newService = new Service({ id, minSpeed, maxSpeed, controlTime });
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add service' });
    }
};
