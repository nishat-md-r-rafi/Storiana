const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const app = express();

mongoose.set('strictQuery', true);


// write configuration for env
dotenv.config();

port = process.env.PORT || 5000 


mongoose.connect(process.env.MONGO_URL)
                            .then(()=> console.log("connection successful"))
                            .catch((err) => console.log("connection failed"))

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);

app.get('/', (req, res) => {
    res.send("Hello to Stotiana!")
})

app.listen(port, ()=>{
    console.log('Backend is listening on port', port);
})