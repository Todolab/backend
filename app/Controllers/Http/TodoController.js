'use strict'
const Todo = use('App/Models/Todo')

class TodoController {
  async index () {
    const todo = await Todo.all()

    return todo.toJSON()
  }

  async store ({request}) {
    const todoData = request.only(['name', 'description'])

    const todo = await Todo.create(todoData)

    return todo.toJSON()
  }

  async show () {
    return 'Dummy response'
  }

  async update () {
    return 'Dummy response'
  }

  async destroy () {
    return 'Dummy response'
  }
}

module.exports = TodoController
