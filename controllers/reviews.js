const Campsite = require('../models/campsite');
const Review = require('../models/review')
// remove Review if not needed ** 

module.exports = {
  index,
  create,
  new: newReview,
  update: updateReview, 
}

async function index(req, res) {
  try {
    const reviews = await Review.find({}).populate('user')
    res.render('reviews/index', { title: 'My Reviews', reviews });
} catch (error) {
    console.log('error', error);
    res.redirect('/reviews');
  }
}


function create(req, res) {
  try {
    Review.create(req.body);
    res.redirect('/reviews')
  } catch(error) {
    console.log('error', error)
  }
}

function newReview(req, req) {
  res.render('/reviews/new', {title: 'Add New Review'})
}

async function updateReview(req, res) {
    try {
      const updatedCampsite = await Campsite.findOneAndUpdate (
        {_id: req.params.id, userRecommending: req.user._id},
        // update object with updated properties
        req.body,
        // options object {new: true} returns updated doc
        {new: true}
      );
      return res.redirect(`/campsites/${updatedCampsite._id}`);
    } catch (c) {
      console.log(c.message);
      return res.redirect('/campsites');
    }
  }

