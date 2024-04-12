const Campsite = require('../models/campsite');

module.exports = {
    index,
    show,
    newCampsite,
    create,
    update,
    edit,
    deleteCampsite,
    addReview
};

async function index(req, res) {
    try {
        // grab campsites from the database
        const campsites = await Campsite.find();
        // render index page and pass the campsites data to the template
        res.render('campsites/index', { title: 'All Campsites', campsites: campsites });
    } catch (error) {
        // error if fetching campsites fails
        res.status(500).send('Error fetching campsites');
    }
}

async function show(req, res) {
    const campsite = await Campsite.findById(req.params.id);
    res.render('campsites/show', { title: 'Description', campsite });
}

async function newCampsite(req, res) {
    res.render('campsites/new', { title: 'New Campsite', errorMsg: '' });
}

async function edit(req, res) {
    const campsite = await Campsite.findById(req.params.id);
    console.log('Editing console', campsite);
    res.render('campsites/edit', { title: 'Edit', campsite, errorMsg: '' });
}

async function create(req, res) {
    console.log('create function called');
    try {
        req.body.campsite
        //pull campsite data from the request body
        const { campsite, location, longitude, latitude, season, description, mpaaRating } = req.body;
        const newCampsite = new Campsite({
            campsite,
            location,
            longitude,
            latitude,
            season,
            description,
            mpaaRating,
            reviews: []
        });
        // Save the new campsite to the database
        await newCampsite.save();
        // Redirect to the index page or any other appropriate page
        res.redirect('/campsites');
    } catch (err) {
        // Handle error if creation fails
        console.error('Error creating new campsite:', error);
        res.status(500).send('Error creating campsite');
    }
}

async function update(req, res) {
    try {
        const campsite = await Campsite.findById(req.params.id);
        if (!campsite) {
            return res.status(404).send("Campsite not found");
        }

        // Update the campsite properties *on edit page*
        campsite.campsite = req.body.campsite;
        campsite.location = req.body.location;
        campsite.longitude = req.body.longitude;
        campsite.latitude = req.body.latitude;
        campsite.season = req.body.season;
        campsite.description = req.body.description;

        // Save the updated campsite
        await campsite.save();

        // Redirect to the campsite show page *all campsites page*
        res.render('campsites/show', { title: 'Description', campsite });
    } catch (error) {
        console.error('Error updating campsite:', error);
        res.status(500).send('Error updating campsite: ' + error.message);
    }
}

async function deleteCampsite(req, res) {
    try {
        // Delete the campsite from the database
        const campsiteId = req.params.id;
        // delete the campsite from the database 
        await Campsite.findByIdAndDelete(campsiteId);
        res.redirect('/campsites');
    } catch (error) {
        console.error('Error deleting campsite:', error);
        res.status(500).send('Error deleting campsite');
    }
}

async function addReview(req, res) {
    try {
        // Find the campsite by ID
        const campsite = await Campsite.findById(req.params.id);

        // Add the review to the campsite's reviews array
        campsite.reviews.push({
            userName: req.body.userName,
            rating: req.body.rating,
            content: req.body.content
        });

        // Save the updated campsite
        await campsite.save();

        // Redirect back to the campsite page
        res.redirect(`/campsites/${campsite._id}`);
    } catch (error) {
        console.error('Error adding new review:', error);
        res.status(500).send('Error adding review');
    }
}
