
const mongoose = require('mongoose');
const {next} = require("lodash/seq");
const Schema = mongoose.Schema;

let studentSchema = new Schema({
        name:{
            type:String,
            unique:true,
            required:true
        },
        email:{
            type:String
        },
        password:{
            type:String,
            unique:true,
            required:true
        },
        contactNo:{
            type:Number
        },
        fullName:{
            type:String
        },
        address:{
            type:String
        },
        nicNo:{
            type:String
        },
        job:{
            type:String
        },
        gender:{
            type:String
        },
        image:{
            type:String
        },


    },
    {
        collection: 'students'
    }
);


    module.exports = mongoose.model('StudentSchema', studentSchema);

