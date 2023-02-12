const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 10,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 10,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profileImage: {
      type: String,
      default: null,
    },
    coverImage: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'undefined'],
      default: 'male'
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
  },
  { timestamps: true },
  { versionKey: false },
)

module.exports = mongoose.model('User', userSchema)
