const express = require('express');
const router = express.Router();
const { getPayments } = require('../controllers/paymentsController');

// GET payments
router.get('/', getPayments);

module.exports = router;
