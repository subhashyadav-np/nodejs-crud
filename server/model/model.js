const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    }
})

const userDB = mongoose.model('userdb', schema);

module.exports = userDB;