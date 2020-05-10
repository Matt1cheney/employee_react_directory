const db = require("../models");

// Defining methods for the postsController
module.exports = {
  findAll: function(req, res) {
    db.EmployeeDir.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.EmployeeDir.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   db.EmployeeDir.create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.EmployeeDir.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.EmployeeDir.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
