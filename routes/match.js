const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/", controllers.match_ctrl.indexRoute);


module.exports = router;