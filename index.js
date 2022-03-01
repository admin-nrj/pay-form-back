require('dotenv').config();
const express = require('express');
const cors = require('cors');
const paymentRouter = require('./src/routers/paymentRouter');
const errorMiddleware = require('./src/middleware/errorMiddleware');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(cors({
    origin:'*'
}));
app.use('/', paymentRouter);
app.use(errorMiddleware); // must be last middleware row

const start = async () => {
    try{
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        })
        app.listen(PORT,()=>console.log(`Server started on ${PORT}`))
    }catch (e) {
        console.log(e);
    }
}
start();