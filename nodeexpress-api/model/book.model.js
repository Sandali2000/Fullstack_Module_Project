const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
        name:{
            type:  String
        },
        price:{
            type : Number
        },
        authorName:{
            type:String
        },
        description:{
            type:  String
        },
        imageUrl:{
            type:String
        },
        contents:{
            type:   String
        },
        tags:{
            type: String
        },
        date:{
            type:String
        },
        page:{
            type:Number
        },
        language:{
            type:      String
        },
        count:{
            type:Number
        }

    },
    {
        collection: 'books'
    }
);

module.exports = mongoose.model('BookSchema', bookSchema)