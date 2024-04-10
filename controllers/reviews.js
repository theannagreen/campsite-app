const Campsite = require('../models/campsite');

async function create(req, res) {
  try {
    const { content, rating, user, userName, userAvatar } = req.body;

    // Find the campsite by ID
    const campsite = await Campsite.findById(req.params.campsiteId);

    // Create the review
    campsite.reviews.push({ content, rating, user, userName, userAvatar });
    await campsite.save();

    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  create
};
