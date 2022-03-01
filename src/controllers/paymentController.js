const paymentService = require('../service/paymentService');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/apiError');

class PaymentController {
    async payment(req, res, next) {
        try {
            const errors = validationResult(req);
            console.log(errors.array())
            if (!errors.isEmpty())
                return next(ApiError.BadRequest("Ошибка проверки введнных данных", errors.array()));

            const {cardNumber, expDate, cvv, amount} = req.body;

            if (!isExpDateValid(expDate))
                return next(ApiError.BadRequest("Ошибка проверки введнных данных",[]));

            const result = await paymentService.payment({cardNumber, expDate, cvv, amount});

            return res.json({...result});
        } catch (e) {
            next(e);
        }
    }
}

function isExpDateValid(exDateText){
    const parts=exDateText.split("/")
    if (parts.length!==2)
        return false

    const ccMonth = parts[0];
    const ccYear = parts[1];

    const today = new Date();
    const someday = new Date();
    if (ccMonth<1 || ccMonth>12 || ccYear.length<1 )
        return false;

    if (parseInt(ccMonth) || parseInt(ccYear))
        someday.setFullYear(ccYear, ccMonth-1, 1);

    if (someday < today) {
        return false
    }

    return true
}


module.exports = new PaymentController();