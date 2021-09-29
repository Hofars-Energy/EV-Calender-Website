const authController = require("../controller/auth");

const router = require("express").Router();

router.post("/signup",authController.signup);

router.post("/login",authController.login);

module.exports = router;