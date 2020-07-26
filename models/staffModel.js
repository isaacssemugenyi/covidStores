const mongoose = require('mongoose');

//staff Schema
const registerSchema = mongoose.Schema({
    fname: String,
    lname: String,
    username: {
        type: String,
        unique: true
    },
    email: String,
    phone: Number,
    eid: {
        type: String,
        unique: true
    },
    nid: {
        type: String,
        unique: true
    },
    role: String,
    password: {
        type: String, 
        required: true
    },
    // c_password: {
    //    type: String,
    //    required: true
    // }
})

const Staff = mongoose.model('Staff', registerSchema);
module.exports = Staff;