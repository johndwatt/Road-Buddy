// External Modules
const express = require("express");
const methodOverride = require("method-override");
const routes = require("./routes");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");

// Instanced Modules
const app = express();
dotenv.config();

// Config
const PORT = 4000;
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(require("./utils/logger"));

// Routes
app.use("/", routes.auth);
app.use("/", routes.profile);

// Bind Server to PORT
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});