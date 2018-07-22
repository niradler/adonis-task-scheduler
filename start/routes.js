'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route');

Route.post('login', 'UserController.login')
Route.post('register', 'UserController.register')

Route.on('/').render('welcome');

Route.get('/tasks/check', 'TaskController.check');
Route.get('/tasks', 'TaskController.show').middleware('auth');
Route.post('/tasks/add', 'TaskController.add').middleware('auth');
Route.get('/tasks/delete:id', 'TaskController.delete').middleware('auth');
