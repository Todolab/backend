'use strict'

const Schema = use('Schema')

class TodosSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.string('text', 255)
      table.string('description', 255)
      table.string('status').defaultTo(1)
      table.string('completed').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodosSchema
