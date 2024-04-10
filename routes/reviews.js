const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/:campsiteId/reviews', (req, res, next) => {
    console.log('campsiteId:', ensureLoggedIn, req.params.campsiteId);
    next();
}, reviewsCtrl.create);

// POST request to create a new review
router.post('/campsites/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

module.exports = router;