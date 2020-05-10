require("dotenv").config()
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI ||  process.env.MONGO_DATABASE);

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
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
