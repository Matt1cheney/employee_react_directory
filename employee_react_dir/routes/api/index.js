const router = require("express").Router();
const employeeDirectoryRoute = require("./posts");

// Post routes
router.use("/employees", employeeDirectoryRoute);


module.exports = router;
