'use strict'
const moment = require("moment");
const TaskHook = exports = module.exports = {}

TaskHook.formatDate = (task) => {
  task.run_at = moment(task.run_at).format("DD-MM-YY")
}
