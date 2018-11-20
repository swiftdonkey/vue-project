var fs = require('fs')
var express = require('express')
var router = express.Router()
router.use('/public/', express.static('./public/'))
router.get('/', function(req, res) {
	res.send('hello')
})
router.get('/swipePic', function(req, res) {
	fs.readFile('api-swipePic.json', 'utf-8', function(erro, data) {
		if (erro) {
			res.render('404.html')
		} else {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Allow", "*");
			res.send(JSON.stringify(JSON.parse(data)))
		}
	})
})
router.get('/home/newsList', function(req, res) {

	fs.readFile('api-newsList.json', 'utf-8', function(erro, data) {
		if (erro) {
			res.render('404.html')
		} else {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Allow", "*");
			res.send(JSON.stringify(JSON.parse(data)))
		}
	})




})
router.get('/home/newsInfo/:id', function(req, res) {
	fs.readFile('api-newsInfo.json', 'utf-8', function(erro, data) {
		if (erro) {
			res.render('404.html')
		} else {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Allow", "*");

			var newsInfo = JSON.parse(data).message.find(function(item) {
				return item.id == req.params.id
			})
			res.send(JSON.stringify(newsInfo))

		}
	})

})
router.get('/home/newsComment/:id/:pageindex', function(req, res) {
	fs.readFile('api-newsComment.json', 'utf-8', function(erro, data) {
		if (erro) {
			res.render('404.html')
		} else {

			var pagemax = parseInt(req.params.pageindex) * 3
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Allow", "*");
			var tmp = {}
			var com = JSON.parse(data).message
			for (var i = 0; i < com.length; i++) {
				if (com[i].id == req.params.id) {
					tmp = com[i]
				} else {}

			}
			var tmp2 = []
			var len = tmp.comment.length
			if(len<3){
				for (var i = 0; i < len; i++) {
					tmp2.push(tmp.comment[i])
				}
				var newsComment = {
					"status": 0,
					"message": tmp2
				}
				res.send(JSON.stringify(newsComment))
			}else if(len-pagemax >= 0){
				for (var i =pagemax-3; i < pagemax; i++) {
					tmp2.push(tmp.comment[i])
				}
				var newsComment = {
					"status": 0,
					"message": tmp2
				}
				res.send(JSON.stringify(newsComment))
				
			}else{
				for (var i =pagemax-3; i < len; i++) {
					tmp2.push(tmp.comment[i])
				}
				var newsComment = {
					"status": 0,
					"message": tmp2
				}
				res.send(JSON.stringify(newsComment))
			}

			tmp2=null
		}
	})

})
router.get('/404.html', function(req, res) {
	res.render('404.html')
})
module.exports = router
