const express = require("express")

const tarefa = express.Router()

const controller = require("../controllers/tarefa")

tarefa.get("/", controller.list)

tarefa.get("/:id", controller.getById)

tarefa.post("/", controller.create)

tarefa.delete("/:id", controller.delete)

tarefa.put("/:id", controller.update)

module.exports = tarefa