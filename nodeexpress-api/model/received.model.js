const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookReceivedSchema = new Schema({

    },
    {
        collection: 'receivedBooks'
    }
);

module.exports = mongoose.model('BookReceivedSchema', bookReceivedSchema)