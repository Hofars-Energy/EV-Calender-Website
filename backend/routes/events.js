const eventController = require("../controller/events.js");

require("../passport");

const express = require("express");

const passport = require("passport");

const router = express.Router();

router.get("/events",passport.authenticate("jwt",{
    session:false
}),eventController.fetchEvents);

module.exports = router;