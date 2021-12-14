const bcrypt = require("bcryptjs");
const { User } = require("../models");

// login show
const loginShow = async function (req, res, next) {
    try {
        // return res.send("login show works");
        return res.render("auth/login");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

// signup show
const signupShow = async function (req, res, next) {
    try {
        // return res.send("signup show works");
        return res.render("auth/signup");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

// login post
const loginPost = async function (req, res, next) {
    try {
        return res.send("login post works");
        // const foundUser = await User.findOne({ username: req.body.username });
        // if (!foundUser) { throw "noUser" };
        // const match = await bcrypt.compare(req.body.password, foundUser.password);
        // if (!match) { throw "noMatch" };
        // req.session.currentUser = {
        //     id: foundUser._id,
        //     username: foundUser.username,
        // };
        // return res.redirect(`/profile/${foundUser._id}`);
    } catch (error){
        // if (error === "noUser") {
        //     const error = {
        //         message: "An account with this username or email does not exist. Please create an account."
        //     }
        //     return res.render("auth/signup", {error});
        // } else if (error === "noMatch"){
        //     const error = {
        //         message: "Incorrect email or password. Please try again."
        //     }
        //     return res.render("auth/login", {error});
        // }
        console.log(error);
        req.error = error;
        return next();
    }
}

// signup post
const signupPost = async function (req, res, next) {
    try {
        return res.send("signup post works");
        // const foundUser = await User.exists({ 
        //     $or: [{ email: req.body.email }, { username: req.body.username }], 
        // });
        // if (foundUser) { throw "userExists" };
        // const salt = await bcrypt.genSalt(10);
        // const hash = await bcrypt.hash(req.body.password, salt);
        // req.body.password = hash;
        // const createdUser = await User.create(req.body);
        // const newUser = await User.findById({ 
        //     _id: createdUser._id
        // });
        // req.session.currentUser = {
        //     id: newUser._id,
        //     username: newUser.username,
        // };
        // return res.redirect(`/profile/${newUser._id}`);
    } catch (error){
        // if (error === "userExists") {
        //     const error = {
        //         message: "An account with this username or email already exists. Please log in instead."
        //     }
        //     return res.render("auth/login", {error});
        // }
        console.log(error);
        req.error = error;
        return next();
    }
}

// logout
const logoutRoute = async function (req, res, next) {
    try {
        return res.send("logout works");
        // await req.session.destroy();
        // return res.redirect("/login");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    loginShow,
    signupShow,
    loginPost,
    signupPost,
    logoutRoute,
}