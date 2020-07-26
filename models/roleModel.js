const mongoose = require('mongoose');
const roleSchema = mongoose.Schema({
    role: String
})

module.exports = mongoose.model('role', roleSchema);