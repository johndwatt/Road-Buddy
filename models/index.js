require("../config/db.connection");

module.exports = {
    User: require("./User"),
    Message: require("./Message"),
    Conversation: require("./Conversation"),
}