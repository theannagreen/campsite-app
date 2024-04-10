const Campsite = require('../models/campsite');

module.exports = {
  create,
  update, 
  deletereviews
}

async function create(req, res) {
  try {
    console.log("This is the user -->",res.locals.user)
  //   req.body.user = req.user._id;
  // req.body.userName = req.user.name;
  // req.body.userAvatar = req.user.avatar;
    const { description, rating, user } = req.body;


    // Find the campsite by ID
    const campsite = await Campsite.findById(req.params.id);
  
    // check if campsite exitst: 
    if (!campsite) {
      return res.status(404).json({ error: 'Campsite not found' });
    }

    // Create the review
    console.log("Trying to push")
    campsite.reviews.push({ description, rating, user, });
    await campsite.save();
    console.log("after the push")

    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deletereviews(req, res) {
  const campsite = await Campsite.findOne({ 'session._id': req.params.id });
  if (!campsite) return res.redirect('/campsites/${campsite._id}');
  campsite.reviews.remove(req.params.id);
  await campsite.save();
  res.redirect('/campsites/${campsite._id}/campsites');
}

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
