const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  // create eventId to generate mongoose ObjectId
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    default: mongoose.Types.ObjectId,
  },
  title: { type: String, required: true },
  description: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  eventStart: { type: String },
  eventEnd: { type: String },
  location: {
    name: { type: String },
    description: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
  },
  eventImage: { type: String },
  eventPhotos: [{ type: String }],
  category: { type: String },
  dateCreated: { type: Date, default: Date.now },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  comment_count: { type: Number },
});

module.exports = Event = mongoose.model("Event", EventSchema);
