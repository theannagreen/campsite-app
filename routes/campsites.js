const express = require('express');
const router = express.Router();
const campsitesCtrl = require('../controllers/campsites');

// Campsites routes
router.get('/', campsitesCtrl.index);
router.get('/new', campsitesCtrl.new);

module.exports = router;
