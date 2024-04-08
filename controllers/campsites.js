// import campsites model 
const Campsite = require('../models/campsite');

module.exports = {
    index,
    show,
    new: newCampsite
}

async function newCampsite(req, res) {
    res.render('campsites/new', { title: 'New Campsite'});
}

 async function index(req, res) {
    try {
        // Fetch campsites from the database
        const campsites = await Campsite.find();
        // Render the index page and pass the campsites data to the template
        res.render('campsites/index', { title: 'All Campsites', campsites: campsites });
    } catch (error) {
        // Handle error if fetching campsites fails
        console.error('Error fetching campsites:', error);
        res.status(500).send('Error fetching campsites');
    }
}

async function show(req, res) {
    const campsite = await Campsite.findById(req.params.id);
    res.render('campsites/show', { title: 'Description', campsite});
}

