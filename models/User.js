const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please provide a username to signup."],
            unique: [true, "There is already an account associated with this username. Please choose a different username or login instead."],
        },
        email: {
            type: String,
            required: [true, "Please provide an email to signup."],
            unique: [true, "There is already an account associated with this email. Please login instead."],
        },
        password: {
            type: String,
            required: [true, "Please provide a password to signup."],
        },
        avatar: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",  
        },
        interests: [{
            type: String,
        }],
        phoneNumber: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;