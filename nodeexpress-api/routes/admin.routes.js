const express = require('express');
const app = express();
const adminExpressRoute = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../db/database');

let adminSchema = require('../model/admin.model');



adminExpressRoute.route('/').get((req,res)=>{
    adminSchema.find((error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

adminExpressRoute.route('/add-admin').post((req,res,next)=>{
    adminSchema.create(req.body,(error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

adminExpressRoute.route('/count-admin').get((req,res,next)=>{
    adminSchema.count(req.body,(error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

adminExpressRoute.route('/del-admin/:id').delete((req,res)=>{
    adminSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

adminExpressRoute.route('/update-admin/:id').put((req,res)=>{
    adminSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data);
            console.log('Update Successfully!')
        }
    })
})

adminExpressRoute.post('/register', (req, res, next) => {
    let newUser = new adminSchema({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        position: req.body.position,
        phoneNumber:req.body.phoneNumber,
        image:req.body.image
    });

    adminSchema.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'User registered'});
        }
    });
});
adminExpressRoute.post('/AdminAuthenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    adminSchema.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }

        adminSchema.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = (user, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

adminExpressRoute.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = adminExpressRoute;