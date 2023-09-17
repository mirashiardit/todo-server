const todoModel = require("../models/todo.model");

class TodoRepository {
  async create(todoBody) {
    const createdTodo = await todoModel.create(todoBody);

    await createdTodo.save();

    return createdTodo;
  }

  async getAll() {
    const todos = await todoModel.findAll();

    return todos;
  }

  async getOneById(todoId) {
    const todo = await todoModel.findByPk(todoId);

    return todo;
  }

  async updateOneById(todoId, updateBody) {
    const updatedTodo = await todoModel.update(updateBody, {
      where: { id: todoId },
    });

    return updatedTodo;
  }

  async deleteOneById(todoId) {
    await todoModel.destroy({
      where: { id: todoId },
    });

    return `Deleted todo with id: ${todoId}`;
  }
}

module.exports = new TodoRepository();
