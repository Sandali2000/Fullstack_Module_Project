const express = require('express');
const app = express();
const paymentExpressRoute = express.Router();

let paymentSchema = require('../model/payment.model');




paymentExpressRoute.route('/').get((req,res)=>{
    paymentSchema.find((error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

paymentExpressRoute.route('/payment/:id').get((req,res)=>{
    paymentSchema.findById(req.params.id,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

paymentExpressRoute.route('/add-payment').post((req,res,next)=>{
    paymentSchema.create(req.body,(error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = paymentExpressRoute;