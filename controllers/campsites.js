// import campsites model 
const Campsite = require('../models/campsite');

module.exports = {
    index,
    show,
    newCampsite,
    create
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

async function newCampsite(req, res) {
    res.render('campsites/new', { title: 'New Campsite', errorMsg: '' });
}


async function create(req, res) {
    try {
        // Extract campsite data from the request body
        const { campsite, location, longitude, latitude, season, description, mpaaRating } = req.body;
        // Create a new campsite document
        const newCampsite = new Campsite({
            campsite,
            location,
            longitude,
            latitude,
            season,
            description,
            mpaaRating
        });
        // Save the new campsite to the database
        await newCampsite.save();
        // Redirect to the index page or any other appropriate page
        res.redirect('/campsites');
    } catch (error) {
        // Handle error if creation fails
        console.error('Error creating campsite:', error);
        res.status(500).send('Error creating campsite');
    }
} 