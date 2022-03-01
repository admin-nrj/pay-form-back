module.exports = class paymentDto{
    requestId;
    amount;

    constructor(model) {
        this.requestId=model._id;
        this.amount=model.amount;
    }
}
