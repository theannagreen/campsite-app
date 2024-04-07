var express = require('express');
var router = express.Router();
const passport = require('passport');

// google oAuth login route 
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
  }
));

//google oAuth callback route 
router.get('/auth/google/callback', passport.authenticate(
  'google',
  {
    successRedirect: '/', // redirect to hompage on successful authentication
    failureRedirect: '/login' //redirect to login page on authentication 
  }
));

// logout route 
router.get('/logout', function(req, res) {
  req.logout(); //passport.js adds a logout() function to req object 
  res.redirect('/'); // redirect to homepage after logout 
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
