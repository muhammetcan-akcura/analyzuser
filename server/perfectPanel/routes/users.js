const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/usersController');

// GET users
router.get('/', getUsers);

module.exports = router;
