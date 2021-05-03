const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  date: {type: Date, default: Date.now}
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
