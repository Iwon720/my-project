const express = require("express");

const computerController = require('../controllers/computer.controller')
const computerRouter = express.Router();

computerRouter.get("/", computerController.getAll);
computerRouter.post("/", computerController.addComputer);
computerRouter.delete("/:id", computerController.deleteComputer);
computerRouter.put("/:id", computerController.updateComputer);
computerRouter.get("/:id", computerController.getOneComputer);

module.exports = computerRouter;