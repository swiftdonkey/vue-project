	import Vue from 'vue'
	import VueRouter from 'vue-router'
	Vue.use(VueRouter)
	import home from '../../vue-component/home.vue'
	import search from '../../vue-component/search.vue'
	import shopcar from '../../vue-component/shopcar.vue'
	import member from '../../vue-component/member.vue'
	import newsList from '../../vue-component/newsList.vue'
	import newsInfo from '../../vue-component/newsInfo.vue'
	var router = new VueRouter({
		routes:[
			{path:'/',redirect:'/home'},
			{path:'/home',component:home},
			{path:'/search',component:search},
			{path:'/shopcar',component:shopcar},
			{path:'/member',component:member},
			{path:'/home/newsList',component:newsList},
			{path:'/home/newsInfo/:id',component:newsInfo},
		],
		linkActiveClass:"mui-active"
	})
	export default router
