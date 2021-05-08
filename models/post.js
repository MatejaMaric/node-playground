const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "You need to provide a title."],
    maxLength: [100, "You can't have a title more than 100 characters long."]
  },
  text: {
    type: String,
    required: [true, "You need to provide some text."]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
