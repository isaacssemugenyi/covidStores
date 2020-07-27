/** 
 * <input type="text" name="product" list="productName"/>
<datalist id="productName">
    <option value="Pen">Pen</option>
    <option value="Pencil">Pencil</option>
    <option value="Paper">Paper</option>
</datalist>
*/
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
    dateOfPay : {type: Date, default: new Date},//automatic
    nextPayDate: { type: Date },
    nextPayAmt: {type: String},
    refereeNo: {type: String } 
})
// purchaseReceipt:
module.exports = mongoose.model('client_purchase', purchaseSchema)