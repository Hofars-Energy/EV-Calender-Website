const authController = require("../controller/auth");

const router = require("express").Router();

router.post("/signup",authController.signup);

router.post("/login",authController.login);

router.post("/access",authController.access);

module.exports = router;