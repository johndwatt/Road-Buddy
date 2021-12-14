const { User } = require("../models")

//index
const indexRoute = async function (req, res, next) {
    try {
        context = {}
        
        const randomInterest = req.session.currentUser.interests[Math.floor(Math.random() * req.session.currentUser.interests.length)]
        // const foundUsers = await User.find({ interests: randomInterest }).populate("user");
        const foundUsers = await User.find({$and: [{ interests: randomInterest},  {_id: {$ne: req.session.currentUser.id  }} ]})
        const randomUser = foundUsers[Math.floor(Math.random() * foundUsers.length)];
        if(foundUsers.length === 0){
            return res.send(`no one else has interest  in ${randomInterest}`)
        }
        const context = {
            randomUser: randomUser
        }
        return res.render()

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