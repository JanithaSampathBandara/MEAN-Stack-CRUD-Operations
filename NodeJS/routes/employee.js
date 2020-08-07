const express = require('express');
const router = express.Router();

const Employee = require('../models/employee');
const bodyParser = require('body-parser');


router.get('/', async (req, res) => {
    res.send('<h1> Employeesss </h1>');
});

router.post('/saveEmployee', async (req, res) => {
    const employee = new Employee({
        name : req.body.name,
        address : req.body.address,
        salary : req.body.salary,
        nic: req.body.nic,
        email : req.body.email,
        password : req.body.password
    });
    
    try
    {
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       const savedEmployee = await employee.save();
       res.header("Access-Control-Allow-Origin", "*");
       res.json(savedEmployee);
       console.log('Saved to backend succesfully :' + savedEmployee);
    }
    catch(err)
    {
        console.log('Backend Error');
        console.log(err);
        res.json({ message : err });
    }
});

router.get('/getEmployee', async (req, res,) => {
    try
    {
        const employees = await Employee.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.json(employees);
        
    }
    catch(err)
    {
        res.json({ message : err});
    }
});

router.get('/getEmployee/:employeeId', async (req, res) => {
    try
    {
        const employee = await Employee.findById(req.params.employeeId);
        res.header("Access-Control-Allow-Origin", "*");
        res.json(employee);
    }
    catch(err)
    {
        res.json({ message : err });
    }
    
    
});

router.delete('/deleteEmployee/:employeeId', async (req, res) => {
    try
    {
        const deletedEmployee = await Employee.deleteOne({ _id: req.params.employeeId });
        res.header("Access-Control-Allow-Origin", "*");
        res.json(deletedEmployee);
        console.log('deleted');
    }
    catch(err)
    {
        res.json({ message : err });
        console.log('not deleted');
    }
    
})

module.exports = router;