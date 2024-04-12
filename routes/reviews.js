const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//get reviews
router.get('/', ensureLoggedIn, reviewsCtrl.index);
//post create review 
router.post('/:id/reviews', ensureLoggedIn, reviewsCtrl.createReview);

module.exports = router;