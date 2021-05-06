const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const strategyCallback = (email, password, done) => {
  // Try to find user
  User.findOne({email}, (err, user) => {
    // Database error
    if (err)
      return done(err);

    // No user found
    if (!user)
      return done(null, false);

    // Wrong password
    if (!bcrypt.compareSync(password, user.password))
      return done(null, false);

    // Successful login
    return done(null, user);
  })
};

passport.use(new LocalStrategy({usernameField: 'email'}, strategyCallback));

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});
