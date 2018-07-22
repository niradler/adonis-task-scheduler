'use strict'

const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
	 table.integer('user_id').unsigned().references('id').inTable('users')
	  table.string('name')
	  table.string('url')
	  table.string('method')
	  table.string('status')
	   table.timestamp('run_at')
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
