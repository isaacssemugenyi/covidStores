const mongoose = require('mongoose');
const purchaseSchema = mongoose.Schema({
    cname: { type: String, reuired: true },
    clocation: { type: String, required: true },
    cphone: { type: Number, required: true },
    cemail: { type: String, required: true },
    cinitialPay: {type: String, required: true },
    cnid: {type: String, required: true },
    citemName: {type: String, required: true },
    itemSerial: { type: String, required: true },
    dateOfPay : {type: Date, default: new Date()},
    nextPayDate: { type: Date },
    nextPayAmt: {type: String},
    refereeNo: {type: String },
    crefNo: {type: String}
})

module.exports = mongoose.model('client_purchase', purchaseSchema)