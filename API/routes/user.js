const router = require('express').Router();
const { PassThrough } = require('stream');
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');
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

router.delete('/:id',verifyTokenAndAuthorization, async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User is deleted");
    } catch (err) {
        console.error(err);
    }
});

// GET USER BY ID
router.get('/find/:id',verifyTokenAndAdmin, async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
    }
});

// Get all users

router.get('/users', verifyTokenAndAdmin, async (req, res) => {
    try {
        const query = req.query.new;
        const users = query? await User.find().sort({_id:-1}).limit(1) : await User.find()
        res.status(200).json(users);
    } catch (err){console.error(err);}
});

router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    try {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
        console.log(lastYear);
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {$project: {month: {$month: "$createdAt"}}},
            {$group: {_id:"$month", total:{$sum:1}}},
        ]);
        res.send(data)
    } catch (err){res.status(403).json("U R not admin")}
});

module.exports = router