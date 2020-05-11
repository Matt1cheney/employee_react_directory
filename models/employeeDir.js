const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const EmployeeDir = mongoose.model("EmployeeDir", employeeSchema);

module.exports = EmployeeDir;
