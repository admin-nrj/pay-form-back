const dbService = require('./dbService')
const PaymentDto = require('../dtos/paymentDto')

class PaymentService {
    async payment(paymentData) {

        return new PaymentDto(await dbService.addPayment(paymentData))
    }
}

module.exports = new PaymentService()