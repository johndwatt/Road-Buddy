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
app.use(
    session({
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI || "mongodb://localhost:27017/road-buddy" }),
        secret: process.env.SECRET || "tacos",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
        },
    })
);
app.use((req, res, next) => {
    res.locals.user = req.session.currentUser;
    return next();
}); 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(require("./utils/logger"));

// Routes
app.use("/", routes.auth);
app.use("/", routes.profile);
app.use("/matches", routes.match);
app.use("/", routes.conversation);

// Bind Server to PORT
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});