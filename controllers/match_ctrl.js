const { User } = require("../models")

//index
const indexRoute = async function (req, res, next) {
    try {
        const userInterests = req.session.currentUser.interests.slice()
        while(userInterests.length > 0){
            const randomIndex = Math.floor(Math.random() * userInterests.length)
            const randomInterest = userInterests.splice(randomIndex, 1)
            const foundUsers = await User.find({$and: [{ interests: randomInterest[0]},  {_id: {$ne: req.session.currentUser.id  }} ]})
            const randomUser = foundUsers[Math.floor(Math.random() * foundUsers.length)];
            if(foundUsers.length > 0){
                const context = {
                    thisUser: randomUser,
                    commonInterest: randomInterest,
                };
                return res.render("match/matches", context)
            };
        }

        return res.render("match/nomatches")
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}


module.exports = {
    indexRoute,
}