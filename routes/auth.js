const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/login", controllers.auth_ctrl.loginShow);
router.get("/signup", controllers.auth_ctrl.signupShow);
router.post("/login", controllers.auth_ctrl.loginPost);
router.post("/signup", controllers.auth_ctrl.signupPost);
router.get("/logout", controllers.auth_ctrl.logoutRoute);
router.get("/interestSetup", controllers.auth_ctrl.interestSetup);

module.exports = router;