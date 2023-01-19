const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const config = require('../db/database');

let adminSchema = new Schema({

        username:{
            type:String
        },
        password:{
            type:  String
        },
        position:{
            type:String
        },
        email:{
            type:   String
        },
        phoneNumber:{
            type:Number
        },
        image:{
            type:String
        }


    },
    {
        collection: 'admins'
    }
);
const Admin = module.exports = mongoose.model('Admin', adminSchema);


module.exports.getUserById = function(id, callback){
    Admin.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    Admin.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}