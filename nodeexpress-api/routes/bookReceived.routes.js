const express = require('express');
const app = express();
const bookReceivedExpressRoute = express.Router();
let BookReceivedSchema = require('../model/bookReceived.model');

bookReceivedExpressRoute.route('/').get((req,res)=>{
    BookReceivedSchema.find((error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookReceivedExpressRoute.route('/books/:id').get((req,res)=>{
    BookReceivedSchema.findById(req.params.id,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookReceivedExpressRoute.route('/add-resbook').post((req,res,next)=>{
    BookReceivedSchema.create(req.body,(error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookReceivedExpressRoute.route('/count-resbook').get((req,res,next)=>{
    BookReceivedSchema.count(req.body,(error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookReceivedExpressRoute.route('/del-resbook/:id').delete((req,res)=>{
    BookReceivedSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


bookReceivedExpressRoute.route('/update-resbook/:id').put((req,res)=>{
    BookReceivedSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data);
            console.log('Deleted Successfully!')
        }
    })
})





module.exports = bookReceivedExpressRoute;