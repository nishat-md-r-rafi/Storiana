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
router.delete('/delete/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order is deleted successfully")
    } catch(err){
        res.status(500).json(err);
    }
})

// GET A ORDER

// GET ALL ORDERS

// Advanced Options
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth -1));

    try {
        data = await Order.aggregate(
            [
                {$match: {createdAt: {$gte: previousMonth}}},
            ]
        )
    } catch (err) {
        res.status(500).send(err);
    }
})


module.exports = router