const mongoose= require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    phoneno:String,
    aadharno:String,
    age:Number,
    state:String,
    gender:String
})

module.exports = mongoose.model('users',UserSchema);
