const { response } = require("express");
const todoService = require("../services/todo.service");

class TodoController {
  async create(request, response) {
    const createdTodo = await todoService.create(request.body);

    return response.json(createdTodo);
  }

  async getAll(request, response) {
    const todos = await todoService.getAll();

    return response.json(todos);
  }

  async getOneById(request, response) {
    const todo = await todoService.getOneById(request.params.id);

    return response.json(todo);
  }

  async updateOneById(request, response) {
    const updatedTodo = await todoService.updateOneById(
      request.params.id,
      request.body
    );

    return response.json(updatedTodo);
  }

  async deleteOneById(request, response) {
    const deleteMessage = await todoService.deleteOneById(request.params.id);

    return response.send(deleteMessage);
  }
}

module.exports = new TodoController();
