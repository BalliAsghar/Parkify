const Event = require("../config/databaseConfig/event.schema.js");

exports.fetchEvents = async () => {
  try {
    const events = await Event.find({}).populate("creatorId").exec();
    return events;
  } catch (err) {
    console.log(err);
  }
};

exports.insertEvent = async (body) => {
  try {
    const newEvent = new Event(body);
    const postedEvent = await newEvent.save();
    return postedEvent;
  } catch {
    console.log("error in model");
  }
};

exports.fetchEvent = async (id) => {
  try {
    const event = await Event.findById(id).populate("creatorId").exec();
    return event;
  } catch (err) {
    console.log(err);
  }
};
