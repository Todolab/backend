'use strict'

const Schema = use('Schema')

class TodoItemsSchema extends Schema {
  up () {
    this.create('todo_items', (table) => {
      table.increments()
      table.string('name')
      table.string('description', 255)
      table.string('status').defaultTo(1)
      table.string('is_complete').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('todo_items')
  }
}

module.exports = TodoItemsSchema
