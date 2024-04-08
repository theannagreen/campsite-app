const express = require('express');
const router = express.Router();
const campsitesCtrl = require('../controllers/campsites');

//GET /campsites
router.get('/', campsitesCtrl.index);
// GET /campsites/new 
router.get('/new', campsitesCtrl.new);

module.exports = router;