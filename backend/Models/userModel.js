const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  email: {type: String, required : true, unique: true},
  gender: {type: String, required: true, enum: ["Male", "Female"]},
  password: {type: String, required: true, minlength: 4},
  curr_weight:{type: Number, required: true},
  target_weight:{type: Number, required: true},
  height:{type: Number, required: true},
  food_preference:{type: String, required: true, enum: ["weight_loss", "weight_gain"]}
},{
  versionKey: false
});

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };

/*
{
    "name": "Ankit",
    "email": "ankit@gmail.com",
    "gender": "Male",
    "password": "ankit",
    "curr_weight":40,
    "target_weight":60,
    "height":5,
    "food_preference": "weight_gain"
}
*/