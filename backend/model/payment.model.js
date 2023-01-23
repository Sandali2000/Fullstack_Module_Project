const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let paymentSchema = new Schema({

        name:{
            type:String
        },
        password:{
            type:  String
        },
        purpose:{
            type:String
        },
        email:{
            type:   String
        },
        price:{
            type:Number
        }


    },
    {
        collection: 'payments'
    }
);

module.exports = mongoose.model('PaymentSchema', paymentSchema)