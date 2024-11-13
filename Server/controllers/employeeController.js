const Employee = require('../models/Employee');
const asyncHandler = require('../utils/asyncHandler');

exports.createEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.create(req.body);
  res.status(201).json({
    success: true,
    data: employee
  });
});

exports.getAllEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find();
  res.status(200).json({
    success: true,
    data: employees
  });
});

exports.getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    return res.status(404).json({
      success: false,
      message: 'Employee not found'
    });
  }
  res.status(200).json({
    success: true,
    data: employee
  });
});

exports.updateEmployee = asyncHandler(async (req, res) => {
  let employee = await Employee.findById(req.params.id);
  if (!employee) {
    return res.status(404).json({
      success: false,
      message: 'Employee not found'
    });
  }
  
  employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  
  res.status(200).json({
    success: true,
    data: employee
  });
});

exports.deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    return res.status(404).json({
      success: false,
      message: 'Employee not found'
    });
  }
  
  await employee.remove();
  
  res.status(200).json({
    success: true,
    data: {}
  });
});
