<template>
<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.imgUrl">
						<div class="mui-media-body">
							<h1>{{item.abstract}}</h1>
							<p class='mui-ellipsis'><span>发表时间: {{item.add_time | timeFormat}}</span>	<span>点击数: {{item.click}}</span></p>
							
						</div>
					</router-link>
				</li>
				
				

			</ul>
</template>
<script>
	import {Toast} from 'mint-ui'
	export default {
		created(){
			this.getNewsList()
		},
		data(){
			return {
				newsList : []
			}
		},
		methods:{
			getNewsList(){
				this.$http.get('http://127.0.0.1:5000/home/newsList').then(result=>{
					if(result.body.status === 0){
						this.newsList = result.body.message
						
					}else{
						Toast("新闻资讯数据获取失败")
					}
					
				})
				
			}
		}
		
	}
</script>
<style lang="less" scoped>
	.mui-table-view{
		
		h1{
			font-size: 14px;
		}
		.mui-ellipsis{
			display: flex;
			justify-content: space-between;
			span{
				font-size: 10px;
				color: #226aff;
			}
		}
		
		
		}
</style>