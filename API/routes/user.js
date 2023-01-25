const router = require('express').Router();
const { PassThrough } = require('stream');
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken');
const JWT = require('jsonwebtoken');
const CryptoJS = require('crypto-js');
const User = require('../models/User');

router.put("/:id",verifyTokenAndAuthorization, async (req, res) => {
    // encrypt the password first
    if (req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        console.log('updating user');
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
    }
});


module.exports = router