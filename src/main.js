import Vue from 'vue'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import './lib/mui/dist/css/mui.min.css'
import App from '../vue-component/app.vue'
import router from './js/router.js'
import './lib/mui/examples/hello-mui/css/icons-extra.css'
import { Swipe, SwipeItem,Header,Button} from 'mint-ui';
import vueResource from 'vue-resource'
import moment from 'moment'
Vue.use(vueResource)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);4
Vue.component(Button.name, Button);
Vue.filter('timeFormat',function(timeStr,pattern="YYYY-MM-DD HH:MM:SS"){
	return moment(timeStr).format(pattern)
})
var vm = new Vue({
	el: "#app",
	data: {

	},
	methods: {
	},
	render: ce => ce(App),
	router,
	
	

})
