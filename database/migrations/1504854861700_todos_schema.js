'use strict'

const Schema = use('Schema')

class TodosSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.string('name')
      table.string('description', 255)
      table.string('status').defaultTo(1)
      table.string('is_complete').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodosSchema
