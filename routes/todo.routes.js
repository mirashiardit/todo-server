const { Router } = require("express");

const todoRouter = Router();

todoRouter.get("/", (request, response) => {
  response.send("Fetch all todos");
});

todoRouter.post("/", (request, response) => {
  response.send("Creating todo");
});

todoRouter.get("/:id", (request, response) => {
  response.send(`Fetch the todo with id: ${request.params.id}`);
});

todoRouter.put("/:id", (request, response) => {
  response.send(`Update the todo with id: ${request.params.id}`);
});

todoRouter.delete("/:id", (request, response) => {
  response.send(`Delete the todo with id: ${request.params.id}`);
});

module.exports = todoRouter;
