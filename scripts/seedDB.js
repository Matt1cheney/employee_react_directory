require("dotenv").config()
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_DATABASE,{
  useNewUrlParser: true,
  useFindAndModify: false
  
});

const employeeSeed = [
  {
    fullName: "Bob Fitzgerald",
    email: "bob_fitzgerald@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "laura Bailey",
    email: "laura_bailey@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "Greg Ploid",
    email: "greg_ploid@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "Justine Lilly",
    email: "justine.lilly@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "Justin Timberlake",
    email: "Justin.Timberlake@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "Bobby Hoffman",
    email: "Bobby_thewizard_Hoffman@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "Mike Fearnley",
    email: "Mike_breaksthings_Fearnley@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "Sam Bates",
    email: "Sam.Bates@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "Ted Bundy",
    email: "Ted.Bundy@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "Chris Hanson",
    email: "Chris.hanson@mycompany.com",
    date: new Date(Date.now())
  },
  {
    fullName: "Tony Stark",
    email: "Ironman@mycompany.com",
    date: new Date(Date.now())
  },
];

db.EmployeeDir.remove({})
  .then(() => db.EmployeeDir.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
