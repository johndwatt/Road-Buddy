const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/", controllers.conversation_ctrl.allConversationsShow);
router.get("/message/new/:id", controllers.conversation_ctrl.newMessageShow);
router.post("/message/new/:id", controllers.conversation_ctrl.newMessagePost);
router.get("/:id", controllers.conversation_ctrl.singleConversationShow);

module.exports = router;