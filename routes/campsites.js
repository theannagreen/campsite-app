const express = require('express');
const router = express.Router();
const campsitesCtrl = require('../controllers/campsites');


// Campsites routes
router.get('/', campsitesCtrl.index); // display all campsites 
router.get('/new', campsitesCtrl.newCampsite); // disply form for creting a new campsite 
router.get('/:id', campsitesCtrl.show); // display for details of the specfici campsite 
router.get('/edit/:id', campsitesCtrl.edit); // new page for campsite update
router.post('/', campsitesCtrl.create); // route to handle creation of new campsite
router.put('/update/:id', campsitesCtrl.update); // route to update campsite 
router.delete('/campsties/:id', campsitesCtrl.deleteCampsite); // route to delete campsite 


module.exports = router;