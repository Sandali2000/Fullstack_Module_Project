const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookReceivedSchema = new Schema({
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
        collection: 'booksReceived'
    }
);

module.exports = mongoose.model('BookReceivedSchema', bookReceivedSchema)