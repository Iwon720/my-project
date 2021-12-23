const express = require("express"); 

const devicesController = require("../controllers/devices.controller");
const devicesRouter = express.Router();

devicesRouter.get("/", devicesController.getAll);

module.exports = devicesRouter;