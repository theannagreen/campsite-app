const express = require('express');
const router = express.Router();
const campsitesCtrl = require('../controllers/campsites');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// Campsites routes
router.get('/', campsitesCtrl.index); // display all campsites 
router.get('/new', campsitesCtrl.newCampsite); // disply form for creting a new campsite 
router.get('/:id', campsitesCtrl.show); // display for details of the specfici campsite 
router.post('/', campsitesCtrl.create); // route to handle creation of new campsite
router.put('/campsites/:id', campsitesCtrl.update); // route to update campsite 
router.put('/:id', ensureLoggedIn, campsitesCtrl.update) // route to edit campsite 
// router.delete('/campsties/:id', campsitesCtrl.delete); // route to delete campsite 


module.exports = router;