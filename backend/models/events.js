const mongoose = require("mongoose");

const schema = mongoose.Schema;

const eventsSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String
    }
})

module.exports = mongoose.model("Event",eventsSchema);