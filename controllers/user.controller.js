const db = require('../models/index')
const User = db.users;

exports.getAll = (req, res) => {
  User.findAll({raw: true}).then((users) => {
    res.send(users)
  }).catch(err => console.log(err))
};
exports.addUser = (req, res) => {
  const user = new User(req.body);
  User.create(user).then((users) => {
    req.send(users);
  })
};
exports.deleteUser = (req, res) => {
  User.destroy({
    where: {
      id: +req.params.id
    }
  }).then((res) => {
    res.send(User.getAll());
  }).catch(err => console.log(err));
};
