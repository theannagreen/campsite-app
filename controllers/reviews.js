const Campsite = require('../models/campsite');
const Review = require('../models/review')
// remove Review if not needed ** 

module.exports = {
  index,
  create,
  new: newReview,
  update, 
  delete: deleteReview
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

//     // // Find the campsite by ID
//     // const campsite = await Campsite.findById(req.params.id);
  
//     // // check if campsite exitst: 
//     // if (!campsite) {
//     //   return res.status(404).json({ error: 'Campsite not found' });
//     // }

//     // Create the review
//     console.log("Trying to push")
//     campsite.reviews.push({ description, rating, user, });
//     await campsite.save();
//     console.log("after the push")

//     res.status(201).json({ message: 'Review created successfully' });
//   } catch (error) {
//     console.error('Error creating review:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

async function update(req, res) {
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

async function deleteReview (req, res) {
  try {

  } catch(error) {
  }
  await Review.deleteOne({_id: req.params.id});
  res.redirect('/reviews');
}

