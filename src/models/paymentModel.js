const {Schema, model} = require('mongoose');

const PaymentSchema = new Schema(
    {
        cardNumber: {type: String, required:true},
        expDate: {type: String, required:true},
        cvv: {type: Number, required:true},
        amount: {type: Number, required:true}
    }
)

module.exports = model('Payment', PaymentSchema);
