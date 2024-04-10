const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
	
// shortcut to mongoose.connection object
const db = mongoose.connection;

// event listener for successful connection
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
// Event listener for connection errors
db.on('error', function(err) {
  console.error('MongoDB connection error:', err);
});

// Event listener for disconnection
db.on('disconnected', function() {
  console.log('MongoDB disconnected');
});

// Close the Mongoose connection when Node process ends
process.on('SIGINT', function() {
  db.close(function() {
    console.log('Mongoose connection closed due to app termination');
    process.exit(0);
  });
});