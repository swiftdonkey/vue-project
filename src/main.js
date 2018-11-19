import Vue from 'vue'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Button } from 'mint-ui'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import './lib/mui/dist/css/mui.min.css'
import App from '../vue-component/app.vue'
import router from './js/router.js'
import { Header } from 'mint-ui';
import './lib/mui/examples/hello-mui/css/icons-extra.css'
import { Swipe, SwipeItem } from 'mint-ui';
import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

var vm = new Vue({
	el: "#app",
	data: {

	},
	methods: {
	},
	render: ce => ce(App),
	router
})
