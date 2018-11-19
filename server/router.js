var fs = require('fs')
	var express = require('express')
	var router = express.Router()
	router.use('/public/', express.static('./public/'))
	router.get('/',function(req,res){
	res.send('hello')
	})
	router.get('/swipePic',function(req,res){
	fs.readFile('api-swipePic.json','utf-8',function(erro,data){
		if(erro){
			res.render('404.html')
		}else{
			 res.setHeader("Access-Control-Allow-Origin", "*");
				res.setHeader("Allow", "*");
			res.send(JSON.stringify(JSON.parse(data)))
		}
	})
	})
	router.get('/404.html',function(req,res){
		res.render('404.html')
	})
	module.exports = router
	