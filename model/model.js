const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    contact_no:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('rest2',Schema)