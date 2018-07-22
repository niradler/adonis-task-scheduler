'use strict'
const moment = require("moment");
const Task = use('App/Models/Task')

class TaskController {
  async show({ view, auth, response }) {
    if (!auth.user) {
      return response.redirect('/')
    }

    let tasks = await Task.query().where('user_id', auth.user.id);
    tasks = tasks.map((t) => {
      t.run_at = moment(t.run_at).format("DD-MM-YY HH:mm")
      return t;
    });

    return view.render('tasks', { tasks: tasks });
  }

  async add({ request, response, auth }) {
    const { name, url, method, time } = request.all()
    const task = new Task()

    task.name = name
    task.url = url
    task.method = method
    task.run_at = time
    task.status = "pending"
    task.user_id = auth.user.id
    await task.save()

    return response.redirect('/tasks')
  }

  async delete({ params, response }) {
    const task = await Task.findOrFail(params.id)

    await task.delete()

    return response.redirect('/tasks')
  }

}

module.exports = TaskController
