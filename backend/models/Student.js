const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  rollNo: { type: String, required: true },
  mobile: { type: String, required: true },
  degree: { type: String, required: true },
  year: { type: Number, required: true },
  course: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
