'use strict'

const Model = use('Model')

class Task extends Model {
  static boot () {
    super.boot()
    this.addHook('afterFetch', 'TaskHook.formatDate')
  }
}

module.exports = Task
