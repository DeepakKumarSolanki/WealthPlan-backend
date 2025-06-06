const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  query: { type: String},
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', RegistrationSchema);
