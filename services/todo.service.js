const todoRepository = require("../repositories/todo.repository");

class TodoService {
  create(todoBody) {
    return todoRepository.create(todoBody);
  }

  async getAll() {
    return todoRepository.getAll();
  }

  async getOneById(todoId) {
    return todoRepository.getOneById(todoId);
  }

  async updateOneById(todoId, updateBody) {
    return todoRepository.updateOneById(todoId, updateBody);
  }

  async deleteOneById(todoId) {
    return todoRepository.deleteOneById(todoId);
  }
}

module.exports = new TodoService();
