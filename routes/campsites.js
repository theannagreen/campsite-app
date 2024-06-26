const express = require('express');
const router = express.Router();
const campsitesCtrl = require('../controllers/campsites');
const ensureLoggedIn = require("../config/ensureLoggedIn");


// Campsites routes
router.delete('/:id', ensureLoggedIn, campsitesCtrl.deleteCampsite); // route to delete campsite 
router.get('/', ensureLoggedIn, campsitesCtrl.index); // display all campsites 
router.get('/new', ensureLoggedIn, campsitesCtrl.newCampsite); // disply form for creting a new campsite 
router.get('/:id', ensureLoggedIn, campsitesCtrl.show); // display for details of the specfici campsite 
router.get('/edit/:id', ensureLoggedIn, campsitesCtrl.edit); // new page for campsite update
router.post('/', ensureLoggedIn, campsitesCtrl.create); // route to handle creation of new campsite
router.put('/edit/:id', ensureLoggedIn, campsitesCtrl.update); // route to update campsite 
router.post('/:id/reviews', ensureLoggedIn, campsitesCtrl.addReview); // route to add review 



module.exports = router;