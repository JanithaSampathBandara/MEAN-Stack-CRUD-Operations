const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const empRoutes = require('./routes/employee');
app.use('/employees', empRoutes);


mongoose.connect('mongodb+srv://janzz:1234@cluster0.fsfrn.mongodb.net/mean_stack_crud?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
    console.log('DB Connected..');
});




app.listen(3000, () => {
    console.log('Listening..');
});