const User = require("../models/userModel.js");

exports.getAll = (req, res) => {
  res.send(User.getAll());
};
exports.addUser = (req, res) => {
  //console.log(req.body);
  // users.push(req.body);
  // res.send(users);
  const user = new User(req.body);
  user.save();
  res.send(User.getAll());
};
exports.deleteUser = (req, res) => {
  //users = users.filter((user) => user.id !== +req.params.id);
  //res.send(users);
  User.delete(+req.params.id);
  res.send(User.getAll());
};
