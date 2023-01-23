const express = require('express');
const app = express();
const bookExpressRoute = express.Router();
let BookSchema = require('../model/book.model');

bookExpressRoute.route('/').get((req,res)=>{
    BookSchema.find((error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookExpressRoute.route('/book/:id').get((req,res)=>{
    BookSchema.findById(req.params.id,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookExpressRoute.route('/add-book').post((req,res,next)=>{
    BookSchema.create(req.body,(error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookExpressRoute.route('/count-book').get((req,res,next)=>{
    BookSchema.count(req.body,(error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

bookExpressRoute.route('/del-book/:id').delete((req,res)=>{
   BookSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


bookExpressRoute.route('/update-book/:id').put((req,res)=>{
    BookSchema.findByIdAndUpdate(req.params.id,{
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



bookExpressRoute.route('/getBook').post(async (req, res, next) => {
    let payload = req.body.payload;
    let search = await Book.find({
        name: {
            $regex: new RegExp('^' + payload + '.*',
                'i')
        }
    }).exec();

    //Limit search results to 10
    search = search.slice(0, 10);

    res.send({payload: search})
})

module.exports = bookExpressRoute;