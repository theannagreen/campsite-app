const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//get reviews
router.get('/', ensureLoggedIn, reviewsCtrl.index);
//new page to create review 
router.get('/new', ensureLoggedIn, reviewsCtrl.new);
//post create
router.post('/', ensureLoggedIn, reviewsCtrl.create);
//put edit review 
router.put('/:id', ensureLoggedIn, reviewsCtrl.update);
//delete review 
// router.delete('/:id', ensureLoggedIn, reviewsCtrl.delete)
module.exports = router;