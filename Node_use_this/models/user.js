const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    phone : {type : String, required: true, unique: true, dropDups: true},
    password : {type : String, required : true},
    email : {type : String},
    fname : {type : String},
    lname : {type : String},
    age : {type : Number},
    updated : {type: Date}
})
module.exports = mongoose.model('Users', userschema)