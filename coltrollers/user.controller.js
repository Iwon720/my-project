const User = require("../models/userModel.js");
exports.getAll = (req, res) => {
    res.send(User.getAll())
  }
exports.addUser = (req, res) => {
  const user = new User(req.body);
  user.save();
  res.send(User.getAll());
  }
exports.deleteUser = (req, res) => {
    User.delete(+req.params.id);
    res.send(User.getAll());
  }  
