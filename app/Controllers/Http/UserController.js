'use strict'
const User = use('App/Models/User')

class UserController {

  async login ({ request, auth, response }) {
    const { email, password } = request.all()

    if (auth.user) return response.redirect('/tasks')

    const user = await auth.attempt(email, password)

    return response.redirect('/tasks')
  }

  async register ({ request, response }) {
    const { email, password } = request.all()
    const user = new User()

    user.email = email
    user.username = email
    user.password = password
    await user.save()

    return response.redirect('/tasks')
  }

}

module.exports = UserController
