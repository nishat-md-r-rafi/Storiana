const Order = require('../models/Order');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();

// POST A ORDER
router.post('/order',verifyTokenAndAuthorization, async (req, res) => {
    const newOrder = new Order(req.body);
    try{
        await newOrder.save();
        res.status(200).send(newOrder);
    } catch(err){
        res.status(500).json(err)};
});

// UPDATE A ORDER
router.put('/update/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedOrder)
    } catch(err){
        res.status(500).json(err)
    }
});

// DELETE AN ORDER

// GET A ORDER

// GET ALL ORDERS


module.exports = router