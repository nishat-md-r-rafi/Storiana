const router = require('express').Router();
const User = require('./../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


// Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email   : req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser)
    } catch(err){
        // console.log(err);
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {
    
    // res.send(`getting user ${req.body.username}`)
    const user = await User.findOne({username: req.body.username});
    if(!user)  {
        console.log("usr not found");
        res.status(401).json("Wrong credentials"); 
        return;
    };
    const hassedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const originalPassword = hassedPassword.toString(CryptoJS.enc.Utf8);

    if(originalPassword !== req.body.password)  {
        // console.log(`password :  ${password} and given wrong password : ${req.body.password}`);
        res.status(401).json("Wrong credentials")
        return;
    };

    const {password, ...others} = user._doc;
    const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SEC, {expiresIn: '3d'})


    res.status(200).json({...others, accessToken});
        } catch(err){
        res.status(500).json("Error: " + err.message)
    }
})


module.exports = router