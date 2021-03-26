const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Userid : {
        type:String,
        required:true
    },
    Password : {
        type:String,
        required:true
    },
    ConfirmPassword : {
        type:String,
        required:true
    },
    Email : {
        type:String,
        required:true,
        unique:true
    }
})

// now we need to create a collection

const Register = new mongoose.model("Register", UserSchema);

module.exports = Register;
