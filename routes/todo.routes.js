const { Router } = require("express");

const todoController = require("../controllers/todo.controller");

const todoRouter = Router();

todoRouter.get("/", todoController.getAll);

todoRouter.post("/", todoController.create);

todoRouter.get("/:id", todoController.getOneById);

todoRouter.put("/:id", todoController.updateOneById);

todoRouter.delete("/:id", todoController.deleteOneById);

module.exports = todoRouter;
