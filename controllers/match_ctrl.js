const { User } = require("../models")

//index
const indexRoute = async function (req, res, next) {
    try {
        return res.send("index route showing ALL MATCHES works");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//new
const newRoute = async function (req, res, next) {
    try {
        
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//create
const createRoute = async function (req, res, next) {
    try {

    } catch (error){
        console.log(error);
        req.error = error;
        const context = {
            error,
        }
        //return res.render ("journal/new", context);
    }
}

//show
const showRoute = async function (req, res, next) {
    try {

    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}


//edit
const editRoute = async function (req, res, next) {
    try {

    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//update
const updateRoute = async function (req, res, next) {
    try {

    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//delete-confirmation
const deleteShow = async function (req, res, next) {
    try {

    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}


//destroy
const destroyRoute = async function (req, res, next) {
    try {

    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    indexRoute,
    showRoute,
    newRoute,
    createRoute,
    editRoute,
    updateRoute,
    deleteShow,
    destroyRoute,
}