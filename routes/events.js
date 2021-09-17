const eventController = require("../controller/events.js");

const express = require("express");

const router = express.Router();

router.get("/events",eventController.fetchEvents);

module.exports = router;