const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    
    if (authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) =>{
            if (err){
                res.status(403).json("Invalid Token!!");
            } else {
                req.user = user;
                next(); // very important otherwise wont be called
            }
    })
    }
    else{
        res.status(401).json("UnAuthenticated!!")
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin){
            next();
        }

        else{
            res.status(403).json("U R Not Allowed")
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin){
            next();
        }

        else{
            res.status(403).json("U R Not Allowed")
        }
    });
};

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};