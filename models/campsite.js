const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String, 
  userAvatar: String
}, {
  timestamps: true
})

const campsiteSchema = new Schema({
  campsite: {
    type: String,
    required: true
  },
  location: String,
  longitude: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  season: [String],
  description: [String],
  mpaaRating: {
    type: String,
    enum: ['1', '2', '3', '4', '5']
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});
module.exports = mongoose.model('Campsite', campsiteSchema);

