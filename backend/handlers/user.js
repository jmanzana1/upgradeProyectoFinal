const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const userSchema = require("../model/user");
const authorize = require("../middlewares/auth");
const { check, validationResult } = require('express-validator');

// Sign-up
router.post("/register-user",
    [
        check('name')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),
        check('email', 'Email is required')
            .not()
            .isEmpty(),
        check('password', 'Password should be between 5 to 8 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 8 })
    ],
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }
        else {
            bcrypt.hash(req.body.password, 10).then((hash) => {
                const user = new userSchema({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                });
                user.save().then((response) => {
                    res.status(201).json({
                        message: "User successfully created!",
                        result: response
                    });
                }).catch(error => {
                    res.status(500).json({
                        error: error
                    });
                });
            });
        }
    });

// Sign-in
router.post("/signin", (req, res, next) => {
    let getUser;
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
        console.log(user)
        if (!user) {
            console.log("El usaurio no ha sido encontrado. ")
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        console.log("continua con el codigo. ")
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(response => {
        console.log("continua con el codigo. 2")
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }else {
        let jwtToken = jwt.sign({
            email: getUser.email,
            userId: getUser._id
        }, "longer-secret-is-better", {
            expiresIn: "24h"
        }); 
        res.status(200).json({
            token: jwtToken,
            expiresIn: 86400,
            _id: getUser._id,
            role: getUser.role
        });
    }
    }).catch(err => {
        console.log(err)
        // return res.status(401).json({
        //     message: "Authentication failed"
        // });
    });
});

// Get Users
router.route('/').get(authorize, (req, res, next) => {
    userSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

// Get Single User
router.route('/user-profile/:id').get(authorize, (req, res, next) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({data })
        }
    })
})

// Update User
router.route('/update-user/:id').put(authorize, (req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('User successfully updated!')
        }
    })
})

// Delete User
router.route('/delete-user/:id').delete(authorize, (req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;
