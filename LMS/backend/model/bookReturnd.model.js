const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookReturnSchema = new Schema({
        selection:{
            type:String
        },
        userName:{
            type:  String
        },
        email:{
            type:  String
        },
        comment:{
            type:  String
        },
        bookName:{
            type:String
        },
        authorName:{
            type:String
        },
        resDate:{
            type:String
        },
        retDate:{
            type:String
        },

    },
    {
        collection: 'booksReturn'
    }
);

module.exports = mongoose.model('BookReturnSchema', bookReturnSchema)