const Cart = require('../models/Cart');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();

router.post('/add', verifyToken , async(req, res)=>{
    const newCart = new Cart(req.body);
    try{
        newCart.save();
        res.json(newCart);
    } catch(err){
        res.json(err);
    }
});

// UPDATE A CART
router.put('/update/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedCart);
    } catch(err){
        res.status(500).json(err);
    }
});

// DELETE A CART
router.delete('/delete/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).send("Cart has been deleted");
    } catch(err){
        res.status(500).json(err);
    }
});

// GET A USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch(err){
        res.status(500).json(err)}
});


// GET ALL CART
router.get('/all', verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts);
    } catch(err){
        res.status(500).json(err)
    }
});


module.exports = router