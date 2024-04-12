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
        const campsites = await Campsite.find();
        res.render('campsites/index', { title: 'All Campsites', campsites: campsites });
    } catch (error) {
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
        await newCampsite.save();
        res.redirect('/campsites');
    } catch (err) {
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
        const campsiteId = req.params.id;
        await Campsite.findByIdAndDelete(campsiteId);
        res.redirect('/campsites');
    } catch (error) {
        console.error('Error deleting campsite:', error);
        res.status(500).send('Error deleting campsite');
    }
}

async function addReview(req, res) {
    try {
        const campsite = await Campsite.findById(req.params.id);
        campsite.reviews.push({
            userName: req.body.userName,
            rating: req.body.rating,
            content: req.body.content
        });
        await campsite.save();
        res.redirect(`/campsites/${campsite._id}`);
    } catch (error) {
        console.error('Error adding new review:', error);
        res.status(500).send('Error adding review');
    }
}
