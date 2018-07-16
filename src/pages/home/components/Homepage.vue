<template>
<div class="homepage" ref="wrapper">
	<div>
	  <div class="homepage-recommend">
	  	<div class="homepage-recommend__title">
	    	<span class="iconfont">&#xe627;</span>
	    	热门推荐
	    	<div class="homepage-recommend__title--right">
		    	<span class="iconfont">&#xe653;</span>
		    	<span class="iconfont">&#xe64d;</span>
	    	</div>
	    </div>
	    <div 
	    	v-for="(item,index) of recommend"
	    	:key="index"
	    	class="homepage-recommend__item"
	    >
	    	<div class="homepage-recommend__item--info">
	    		<div class="homepage-recommend__item--title">{{item.title}}</div>
	    		<div class="homepage-recommend__item--desc">
		    		<span class="iconfont">&#xe627;</span>{{item.like}}
		    		<span class="iconfont">&#xe62f;</span>{{item.author}}
		    		<span class="iconfont">&#xe627;</span>{{item.time}}
	    		</div>
	    	</div>
	    	<img class="homepage-recommend__item--img" :src="item.list_img" />
	    </div>
		</div>

	  <div class="homepage-list">
	  	<div 
	  		class="homepage-recommend__item" 
	  		v-for="(item,index) of content"
	  		:key="index"
	  	>
	    	<div class="homepage-recommend__item--info">
	    		<div class="homepage-recommend__item--title">{{item.title}}</div>
	    		<div class="homepage-recommend__item--desc">
		    		<span class="iconfont">&#xe627;</span>{{item.like}}
		    		<span class="iconfont">&#xe62f;</span>{{item.author}}
		    		<span class="iconfont">&#xe627;</span>{{item.time}}
	    		</div>
	    	</div>
	    	<img class="homepage-recommend__item--img" :src="item.list_img" />
	    </div>
	  </div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'

export default {
  name: 'HomePage',
  data:function(){
  	return {
  		recommend:[],
  		content:[]
  	}
  },
	methods:{
  	//axios获取数据方法
  	getAllData(){
  		axios.get('static/mock/homepage.json').then(this.getAllDataSucc)
  	},
  	getAllDataSucc(res){
  		console.log(res.data)
  		const data =res.data.data
  		if(res.data.ret && data){
  			this.recommend = data.recommend
  			this.content = data.content
  		}
  	}
  },

  mounted(){
  	this.getAllData(),
	this.scroll = new BScroll(this.$refs.wrapper)
  }
}

</script>

<style>
	.homepage{
		/*overflow: hidden;*/
		position: fixed;
		top:.8rem;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #eee;
	}
	.homepage-recommend{
		border-top: solid .2rem #eee;
	}
	.homepage-recommend__title{
		display: flex;
		height: .8rem;
		width: 100%;
		line-height: .8rem;
		background-color: #fff;
		padding: 0 .2rem;
		border-bottom: solid .01rem #eee;
		position: relative;
	}
	.homepage-recommend__title--right{
		position: absolute;
		top: 0;
		bottom:0;
		right: .6rem;
	}
	.homepage-recommend__title--right span{
		margin-left: .1rem;
		font-size: .32rem;
	}
	.homepage-recommend__item{
		height: 2rem;
		background-color: #fff;
		display: flex;
		border-bottom: solid .03rem #eee;
	}
	.homepage-recommend__item--info{
		flex: 1;
		margin-top: .4rem;
		padding-left: .2rem;
		min-width: 0;
	}
	.homepage-recommend__item--title{
		font-size: .38rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.homepage-recommend__item--desc{
		color: #ccc;
		margin-top: .3rem;
		font-size: .12rem;
	}
	.homepage-recommend__item--img{
		width: 1.2rem;
		height: 1.2rem;
		margin-top: .4rem;
		margin-right: .2rem;
	}
	.homepage-list{
		margin-top:.2rem;
	}
</style>