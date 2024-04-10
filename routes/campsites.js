const express = require('express');
const router = express.Router();
const campsitesCtrl = require('../controllers/campsites');

// Campsites routes
router.get('/', (req, res) => {
    console.log('GET request received for /campsites');
    campsitesCtrl.index(req, res);
});

router.get('/new', (req, res) => {
    console.log('GET request received for /campsites/new');
    campsitesCtrl.newCampsite(req, res);
});

router.get('/:id', (req, res) => {
    console.log(`GET request received for /campsites/${req.params.id}`);
    campsitesCtrl.show(req, res);
});

router.post('/', (req, res) => {
    console.log('POST request received for /campsites');
    campsitesCtrl.create(req, res);
});

module.exports = router;

// // Campsites routes
// router.get('/', campsitesCtrl.index); // display all campsites 
// router.get('/new', campsitesCtrl.newCampsite); // disply form for creting a new campsite 
// router.get('/:id', campsitesCtrl.show); // display for details of the specfici campsite 
// router.post('/', campsitesCtrl.create); // route to handle creation of new campsite

// // Log the request method and URL path for each route
// router.use((req, res, next) => {
//     console.log('Request method:', req.method);
//     console.log('Request URL path:', req.originalUrl);
//     next();
// });

