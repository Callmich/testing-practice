const express = require("express")
const todoController = require("../controllers/totdo.controller")
const router = express.Router()

router.post("/", todoController.createTodo);

module.exports = router