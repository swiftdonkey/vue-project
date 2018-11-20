<template>
	<div class="newscomment">
		<h2>发表评论</h2>
		<hr />
		<textarea placeholder="请输入评论,最多输入100字" maxlength="100">
			
		</textarea>
		<mt-button type="primary" size="large" >发表评论</mt-button>
		<div class="comment-box" v-for="(item,i) in comment" :key="i">
			<p><span> 第{{i}}楼</span> <span> 用户：{{item.userName}}</span> <span> 发表时间：{{item.add_time}}</span></p>
			<p>{{item.content}} </p>
			
		</div>
		<mt-button type="danger" plain size="large" @click="getMore" >加载更多</mt-button>

	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
			index:1,
			comment:[]
			
			}
				},
		created(){
			this.getComment()
		},
		methods:{
			getComment(){
				this.$http.get("http://127.0.0.1:5000/home/newsComment/"+this.id+"/"+this.index).then(result => {
					
					if(result.body.status==0){
						this.comment = result.body.message 
						console.log(result.body)
					}else{
					Toast('获取评论失败')	
					}
				})
			
			
	},
	getMore(){
		this.index++
		this.$http.get("http://127.0.0.1:5000/home/newsComment/"+this.id+"/"+this.index).then(result => {
			
			if(result.body.status==0){
				this.comment = this.comment.concat(result.body.message )
			}else{
			Toast('没有更多了')	
			}
		})
	}
	
	
	
	},
	
		props:['id'],
		
			
	}
	
</script>

<style lang="less">
	.newscomment{
		h2{
			font-size: 16px;
			font-weight: bold;
		}
	}
</style>