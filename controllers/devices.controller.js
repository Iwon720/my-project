const Device = require("../models/devicesModel");

exports.getAll = (req, res) => {
  res.send(Device.getAll());
};