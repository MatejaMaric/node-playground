const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  date: {type: Date, default: Date.now}
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
