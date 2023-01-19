const express = require('express');
const app = express();
const bookReturnExpressRoute = express.Router();
let BookReturnSchema = require('../model/bookReturnd.model');

bookReturnExpressRoute.route('/').get((req,res)=>{
    BookReturnSchema.find((error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookReturnExpressRoute.route('/books/:id').get((req,res)=>{
    BookReturnSchema.findById(req.params.id,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookReturnExpressRoute.route('/add-retbook').post((req,res,next)=>{
    BookReturnSchema.create(req.body,(error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookReturnExpressRoute.route('/count-resbook').get((req,res,next)=>{
    BookReturnSchema.count(req.body,(error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookReturnExpressRoute.route('/del-resbook/:id').delete((req,res)=>{
    BookReturnSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


bookReturnExpressRoute.route('/update-resbook/:id').put((req,res)=>{
    BookReturnSchema.findByIdAndUpdate(req.params.id,{
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





module.exports = bookReturnExpressRoute;