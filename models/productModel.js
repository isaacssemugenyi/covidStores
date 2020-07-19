const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pdt_name : { type: String, required: true },
    make: { type: String, required: true, min: 2, max: 2 },
    entry_date : { type: Date, default: Date.now() },
    pdt_category: { type: String, required: true },
    serial_no: { type: String, unique: true, required: true, min: 6, max: 22 },
    pdt_color: {type: String},
    pdt_price: {type: Number, required: true},
    pay_interval: {type: String, required: true},
    pdt_stock: {type: Number, required: true}, //check out the count in db based on product category
    pdt_scheme: {type: String, required: true},
    pdt_image : {type: String},
    pdt_desc: {type: String}
})

var Product = mongoose.model('Product', productSchema);
module.exports = Product;
