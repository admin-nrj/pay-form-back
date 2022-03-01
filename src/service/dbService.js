const PaymentModel = require('../models/paymentModel')
class DbService {
    async addPayment(paymentData){
        return await PaymentModel.create(paymentData)
    }
}

module.exports = new DbService()