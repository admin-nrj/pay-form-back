const dbService = require('./dbService')
const PaymentDto = require('../dtos/paymentDto')

class PaymentService {
    async payment(paymentData) {
        //long processing imitation
        await sleep(5000);
        return new PaymentDto(await dbService.addPayment(paymentData))
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
module.exports = new PaymentService()