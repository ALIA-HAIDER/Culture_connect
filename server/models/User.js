const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  location: String,
//   location: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'Location'
// }

  culturaltags: [String],
  preference: {
    preferredCommunities: [String],
    preferredTags: [String],
    ageRange: { min: Number, max: Number },
  },
},{ timestamps: true });

module.exports = mongoose.model("User", userSchema);
