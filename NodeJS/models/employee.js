
const mongoose = require('mongoose');
const { SSL_OP_CISCO_ANYCONNECT } = require('constants');

const employeeSchema = mongoose.Schema({
    name : {
        type : String,
        required : 'Name cannot be empty'
    },
    address : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true,
        minlength : [5,'Salary must be at least 5 characters long']
    },
    nic : {
        type: String,
        required: true,
        minlength: [10, 'NIC must be in 10 characters'],
        maxlength: [10, 'NIC must be in 10 characters']
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('emp', employeeSchema);
