const paymentRouter = require('express').Router();
const paymentController = require('../controllers/paymentController');
const {body} = require('express-validator');

// { "CardNumber": '0000000000000000', ExpDate: '04/2022', Cvv: '123', Amount: 100 }
// - Card Number - (только цифры, длина значения 16)
// - Expiration Date (формат даты MM/YYYY)
// - CVV (только цифры, длина значения 3)
// - Amount (только цифры)
paymentRouter.post('/payment',

    body('cardNumber').exists({checkNull:true}),
    body('cardNumber').notEmpty({ignore_whitespace:true}),
    body('cardNumber').isNumeric(),
    body('cardNumber').isLength({min:16,max:16}),

    body('expDate').exists({checkNull:true}),
    body('expDate').notEmpty({ignore_whitespace:true}),
    body('expDate').isLength({min:6,max:7}),

    body('cvv').exists({checkNull:true}),
    body('cvv').notEmpty({ignore_whitespace:true}),
    body('cvv').isNumeric(),
    body('cvv').isLength({min:3,max:3}),

    body('amount').exists({checkNull:true}),
    body('amount').notEmpty({ignore_whitespace:true}),
    body('amount').isNumeric(),

    paymentController.payment);


module.exports = paymentRouter;