const eventAdder = require("../controller/addEvent");

require("../passport");

const express = require("express");

const passport = require("passport");

const router = express.Router();

router.post("/addEvent",passport.authenticate("jwt",{
    session:false
}),eventAdder.addEvent);

module.exports = router;