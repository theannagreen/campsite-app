const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// POST request to create a new review
router.post('/', reviewsCtrl.create);

module.exports = router;