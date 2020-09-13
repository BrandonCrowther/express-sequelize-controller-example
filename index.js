const express = require('express')
const config = require('./config')
const app = express()

const {APIController, mountController} = require('express-sequelize-controller')
const {Post} = require('./model')

app.mountController = mountController

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', 1)

// Just to get around the CORS issue
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.mountController(new APIController(Post))

app.listen(config.port, async () => {})



