const { User } = require("../models");

const profileRoute = async function (req, res, next){
    try {
        if (req.query.search) {
            query = {
                $or: [
                {
                    title: {
                        $regex: new RegExp(req.query.search),
                        $options: "i",
                    },
                },
                {
                    content: {
                        $regex: new RegExp(req.query.search),
                        $options: "i",
                    },
                }],
            };
            const foundUser = await User.findById({ _id: req.params.id });
            //const userJournals = await Journal.find({ userId: foundUser.id }).find(query).sort('-createdAt');
            const context = {
                thisUser: foundUser,
                //userJournals: userJournals,
            };
            return res.render("user/profile", context);
        } else {
            const foundUser = await User.findById({ _id: req.params.id });
            //const userJournals = await Journal.find({ userId: foundUser.id }).sort('-createdAt');
            const context = {
                thisUser: foundUser,
                //userJournals: userJournals,
            };
            return res.render("user/profile", context);
        }
        
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}


//edit
const profileEdit = async function (req, res, next) {
    try {
        if (req.session.currentUser.id !== req.params.id) {
            return res.redirect("/profile/you-are-not-authorized-to-edit-that-but-nice-try");
        }
        const foundUser = await User.findById({ _id: req.params.id });
        const context = {
            userToEdit: foundUser,
        };
        return res.render("user/edit", context);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//update
const profileUpdate = async function (req, res, next) {
    try {
        const foundUser = await User.findById({ _id: req.params.id });
        const checkUsername = await User.exists({ username: req.body.username });
        const checkEmail = await User.exists({ email: req.body.email });
        req.body.interests = req.body.interests.split(',');
        if (checkUsername === true && foundUser.username !== req.body.username) {
            const context = {
                userToEdit: foundUser,
                error: {
                    message: "This username is already in use. You cannot update your profile to have the same username as another account." }
            }
            return res.render("user/edit", context);
        };
        if (checkEmail === true && foundUser.email !== req.body.email) {
            const context = {
                userToEdit: foundUser,
                error: {
                    message: "This email is already in use. You cannot update your profile to have the same email as another account." }
            }
            return res.render("user/edit", context);
        };
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body}, 
            {new: true},
        );
        req.session.currentUser = {
            id: updatedUser._id,
            username: updatedUser.username,
            avatar: updatedUser.avatar,
            interests: updatedUser.interests,
            email: updatedUser.email,
        };
        return res.redirect(`/profile/${updatedUser.id}`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}



module.exports = {
    profileRoute,
    profileEdit,
    profileUpdate,
}