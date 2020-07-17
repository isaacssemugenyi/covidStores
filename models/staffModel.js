const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    fname: String,
    lname: String,
    username: {
        type: String,
        unique: true
    },
    email: String,
    eid: {
        type: String,
        unique: true
    },
    nid: {
        type: String,
        unique: true
    },
    password: {
        type: String, 
        required: true,
        unique: true
    }
})

const Staff = mongoose.model('Staff', registerSchema);
module.exports = Staff;