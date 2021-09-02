const express = require('express')

const QuestionController = require('./controller/QuestionController')
const RoomController = require('./controller/RoomController')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index", { page: 'enter-room' }))
routes.get('/create-pass', (req, res) => res.render("index", { page: 'create-pass' }))

routes.post('/create-room', RoomController.create)
routes.get('/room/:room', RoomController.open)
routes.post('/enterroom', RoomController.enter)

routes.post('/question/create/:room', QuestionController.create)
routes.post('/question/create/:room', QuestionController.index)
// Formato que o form de dentro da modal tem que passar a informação 
routes.post('/question/:room/:question/:action', QuestionController.index)

module.exports = routes