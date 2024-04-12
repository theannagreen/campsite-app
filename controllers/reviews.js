const Campsite = require('../models/campsite');

module.exports = {
  index,
  createReview
};

async function index(req, res) {
  try {
    const reviews = await Review.find({}).populate('user');
    res.render('reviews/index', {title: 'My Reviews', reviews });
  } catch (error) {
    console.error('Error grabbing reviews:', error);
    res.status(500).send('Error fetch reviews');
  }
}

async function createReview(req, res) {
  try {
    const campsite = await Campsite.findById(req.params.id);

      const newReview = {
        rating: req.body.rating, 
        content: req.body.content
      };
  campsite.reviews.push(newReview);
  await campsite.save();
  res.redirect(`/campsites/${campsite._id}`);
} catch (error) {
  console.error('Error adding review:', error);
  res.status(500).send('Error adding review');
  }
}

