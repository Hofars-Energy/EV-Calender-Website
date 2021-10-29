const eventsModel = require("../models/events");
exports.addEvent = (req,res,next) => {

    newEvent = new eventsModel({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    });
    newEvent.save();
    return res.status(200).json({
        msg: "Successfully added an event"
    });
}