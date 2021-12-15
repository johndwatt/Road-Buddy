const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/profile/:id", controllers.profile_ctrl.profileRoute);
router.get("/profile/:id/edit", controllers.profile_ctrl.profileEdit);
router.get("/profile/:id/interests", controllers.profile_ctrl.profileInterestRoute);
router.put("/profile/:id", controllers.profile_ctrl.profileUpdate)

module.exports = router;