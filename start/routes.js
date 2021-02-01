'use strict'


const Route = use('Route')

Route.get('/', 'SneakerController.index')

Route.get('/sneakers', 'SneakerController.index')
Route.get('/sneakers/create', 'SneakerController.create')
Route.post('/sneakers', 'SneakerController.store')
Route.get('/sneakers/:id', 'SneakerController.show')
Route.get('/sneakers/:id/edit', 'SneakerController.edit')
Route.put('/sneakers/:id', 'SneakerController.update')
Route.delete('/sneakers/:id', 'SneakerController.destroy')
