const express = require('express')
const routes = require('./routes')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views')) // .../rocketq/src/views

server.use(express.urlencoded({ extended: true })) // middleware / ele vai pegar o conteudo do formulario, vai decodificar e passar pro controller

server.use(routes)

server.listen(3300, () => console.log("Rodando"))

