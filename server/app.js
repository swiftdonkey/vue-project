var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var router = require('./router')
var app = new express()

		app.use(bodyParser.urlencoded({
				extended: false
			})),
		app.use(bodyParser.json())
		app.use('/', router)
		app.use(function(req,res){
			res.redirect('/404.html')
		})
		app.use(function(erro,req,res,next){
			res.send('错误i')
		})
		app.listen('5000', function() {
			console.log("开启监听")
		})