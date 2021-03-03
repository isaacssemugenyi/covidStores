const opts = { toJSON: { virtuals: true } };
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pdt_name : { 
      type: String, 
      required: true 
    },
    make: { 
      type: String, 
      required: true, 
      min: 2, 
      max: 2 
    },
    entry_date : { 
      type: Date 
    },
    pdt_category: { 
      type: String, 
      required: true 
    },
    serial_no: { 
      type: String, 
      unique: true, 
      min: 6, 
      max: 22 
    },
    pdt_color: {
      type: String
    },
    pdt_price: {
      type: Number,
       required: true
      },
    pay_interval: {
      type: String, 
      required: true
    },
    pdt_stock: {
      type: Number, 
      required: true
    }, //check out the count in db based on product category
    pdt_scheme: {
      type: String, 
      required: true
    },
    pdt_image : {
      type: String
    },
    imageId: {
      type: String
    },
    pdt_desc: {
      type: String
    }
}, opts)

productSchema.virtual('initial_pay').get(function() {
    return this.pdt_price / 2;
  });

var Product = mongoose.model('Product', productSchema);
module.exports = Product;
