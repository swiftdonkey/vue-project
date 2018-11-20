<template>
	<div>
		<mt-swipe :auto="4000" >
  <mt-swipe-item v-for="item in swipePicList" v-bind:key="item.url" >
	 <a :href="item.url"> <img :src="item.img" /></a>
  </mt-swipe-item>
  
</mt-swipe>
	<ul class="mui-table-view mui-grid-view mui-grid-9">
			            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
							
							<router-link to="/home/newsList">
			                    <img src="../src/images/menu1.png" />
			                    <div class="mui-media-body">新闻资讯</div></router-link>
								
								</li>
			            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
			                   <img src="../src/images/menu2.png" />
			                    <div class="mui-media-body">图片分享</div></a></li>
			            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
			                  <img src="../src/images/menu3.png" />
			                    <div class="mui-media-body">商品购买</div></a></li>
			            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
			                    <img src="../src/images/menu4.png" />
			                    <div class="mui-media-body">留言反馈</div></a></li>
			            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
			                    <img src="../src/images/menu5.png" />
			                    <div class="mui-media-body">视频专区</div></a></li>
			            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
			                    <img src="../src/images/menu6.png" />
			                    <div class="mui-media-body">联系我们</div></a></li>
			        </ul> 

	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
export default {
	created(){
		this.getSwipePic()
	},
	data(){
		return {
			swipePicList : []
		}
	},
	methods:{
		getSwipePic(){
			this.$http.get('http://127.0.0.1:5000/swipePic').then(result=>{
				if(result.body.status === 0){
					this.swipePicList = result.body.message
					// Toast("轮播图数据获取成功")
				}else{
					Toast("轮播图数据获取失败")
				}
				
			})
			
		}
	}
	
}



 
</script>
<style lang='less'>
	.mint-swipe{
		height: 200px;
		.mint-swipe-item:nth-child(1){
			background: red;
		}
		.mint-swipe-item:nth-child(2){
			background: green;
		}
		.mint-swipe-item:nth-child(3){
			background: cyan;
		}
		img{
			width: 100%;
			height: 100%;
		}
	}
.mui-grid-view.mui-grid-9{
	background-color: white;
	
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: none;
	img{
		width: 60px;
		height: 60px;
	}
}
</style>