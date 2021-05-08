const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "You need to provide your first name."],
    maxLength: [32, "You can't have a first name longer than 32 characters."],
    validate: {
      validator: validator.isAlpha,
      message: props => "Your first name can only contain characters."
    }
  },
  lastname: {
    type: String,
    required: [true, "You need to provide your last name."],
    maxLength: [32, "You can't have a last name longer than 32 characters."],
    validate: {
      validator: validator.isAlpha,
      message: props => "Your last name can only contain characters."
    }
  },
  email: {
    type: String,
    required: [true, "You need to provide an email."],
    maxLength: [100, "You can't have a email longer than 100 characters."],
    validate: {
      validator: validator.isEmail,
      message: props => "Email is not valid."
    }
  },
  password: {
    type: String,
    required: [true, "You need to provide a password."],
    maxLength: [100, "You can't have a password longer than 100 characters."]
  },
});

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;
