<template>
	<div class="news_container">
		<h1>{{newsInfo.title}}</h1>
		<p class="info-box">
			<span>发布时间: {{newsInfo.add_time}}</span><span>点击次数:{{newsInfo.click}}</span>
		</p>
		<HR />
		<div class="news-content" v-html="newsInfo.content">
			
		</div>
		<news-comment :id="this.newsid"></news-comment>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import comment from './comment.vue'
	export default {
		data(){
			return {
				newsid:this.$route.params.id,
				newsInfo:{}
			}
		},
		created(){
		this.getNewsInfo()
		},
		methods:{
			getNewsInfo(){
				this.$http.get('http://127.0.0.1:5000/home/newsInfo/'+this.newsid).then(result => {
					if(result.body.id == this.newsid){
						this.newsInfo = result.body
					}else{
						Toast("获取新闻内容失败")
					}
				})
			}
		},
		components:{
			"news-comment":comment
		}
		
		
		
	}
</script>

<style lang="less" >
	.news_container{
		padding: 0 4px;
		h1{
			font-size: 16px;
			text-align: center;
			color: red;
		}
		HR{
			border-top: 1px solid #000000;
			margin: 5px;
		}
		.info-box{
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			color: #226aff;
			margin-top: 20px;
		}
		.news-content{
			
			text-indent: 2em;
		}
	}
	
</style>