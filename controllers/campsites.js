// campsite/new page for creating new campsites 
// import campsites model 
const Campsite = require('../models/campsite');


module.exports = {
    index,
    show,
    newCampsite,
    create,
    update
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
    console.log('create function called');
    try {
    req.body.campsite
        //Extract campsite data from the request body
        const { campsite, location, longitude, latitude, season, description, mpaaRating } = req.body;
        // Create a new campsite document
        const newCampsite = new Campsite({
            campsite,
            location,
            longitude,
            latitude,
            season,
            description,
            mpaaRating,
            reviews
        });
        // Save the new campsite to the database
        await newCampsite.save();
        // Redirect to the index page or any other appropriate page
        res.redirect('/campsites');
    } catch (err) {
        // Handle error if creation fails
        console.error('Error creating campsite:', error);
        res.status(500).send('Error creating campsite');
    }
}

async function update(req, res) {
    const campsite = await Campsite.findOne({ 'sessions._id': req.params.id });
    const review = campsite.reviews.id(req.params.id);
    if (!reviews.user.equals(req.user._id)) return res.redirect('/campsites/${campsite._id');
    reviews.rating = req.body.rating;
    reviews.description = req.body.description;
    reviews.longitude = req.body.longitude;
    reviews.latitude = req.body.latitude;
    reviews.season = req.body.season;
    try {
        await campsite.save();
    } catch (err) {
        console.log(err.message);
    }
    res.direct('/session/${session._id}');
}