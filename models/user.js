const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  deletedAt: Date,
});

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    schoolName: { type: String, required: true },
    subject : {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
    deletedAt: Date,
  });

module.exports = {
  User: mongoose.model("User", userSchema),

  TeacherSchema: mongoose.model("Teacher", teacherSchema),
};
