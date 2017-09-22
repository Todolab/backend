'use strict'
const Todo = use('App/Models/Todo')

class TodoController {
  async index () {
    let todo = await Todo.all()
    todo = todo.toJSON()

    // Change completed data type
    todo.map((item) => {
      item.completed = Number(item.completed)
      return item
    })

    return todo
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
