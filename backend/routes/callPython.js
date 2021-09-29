const express = require("express");

const router = express.Router();

const callPy = require("../utils/runPython");

router.get("/callPython",(req,res,next) => {
    callPy(res);
})

module.exports = router;