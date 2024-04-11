//middleware for routes that require a logged in user 
module.exports = function(req, res, next) {
    // pass the req/res to the next middleware / route handler 
    if (req.isAuthenticated() ) return next();
    res.redirect("/auth/google");
}