const Task = use('App/Models/Task');
const rp = require('request-promise');
const moment = require("moment");

const timer = exports = module.exports = {}

timer.interval = setInterval(async() => {
  try {
    let tasks = await Task.query().where('status', 'pending');
    tasks.forEach(task => {
      const isAfter = moment().isAfter(moment(task.run_at));
      if (isAfter) {
       Task.find(task.id).then((t) => {
        const options = {
          uri: task.url,
          json: true
        };
        rp(options).then(d=> {
          t.status = "done";
          t.save();
      }).catch(e=>{
        t.status = "failed"
        t.save();
      });
       });
      }
    });
  } catch (error) {
    console.log(error);
  }
}, 60000);
