// crud-helper.js

// Used to perform CRUD external to the application

// To use (don't type the $'s):
//   1. Open a Node REPL in Terminal:
//         $ node

//   2. Load this crud-helper.js module
//         $ .load crud-helper.js

//   3. When done CRUDing, exit the REPL with:
//         $ .exit (or ctrl-D, or ctrl-C twice)

// If any changes are made to the models, 
// exit the REPL and reload this module


// If the db connection string is in a .env file, we need 
// to read in those env variables just like in server.js
require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models
const Movie = require('./models/campsite');
const Performer = require('./models/user');

// Movie.updateMany({}, {cast: []})
// .then(updateStatus => console.log(updateStatus));

// Check all movie documents
// Movie.find({}).then(movies => console.log(movies));

// Check all performer documents
User.find({}).then(users => console.log(users));