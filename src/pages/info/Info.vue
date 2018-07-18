<template>
<div class="info" ref="wrapper">
	  <div class="info-list">
	  	<div 
	  		class="info-recommend__item" 
	  		v-for="(item,index) of content"
	  		:key="index"
	  	>
	  		<img class="info-recommend__item--img" :src="item.list_img" />
	    	<div class="info-recommend__item--info">
	    		<div class="info-recommend__item--title">徐听雨_</div>
	    		<div class="info-recommend__item--desc">
		    		有眼光 :)
	    		</div>
	    		<div class="info-recommend__item--time">
	    			{{item.time}}前
	    		</div>
	    	</div>  	
	    </div>
	  </div>
</div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'

export default {
  name: 'Info',
  data:function(){
  	return {
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
	.info{
		/*overflow: hidden;*/
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #eee;
	}
	.info-recommend__item{
		height: 2rem;
		background-color: #fff;
		display: flex;
		border-bottom: solid .03rem #eee;
	}
	.info-recommend__item--info{
		flex: 1;
		margin-top: .4rem;
		padding-left: .2rem;
		min-width: 0;
	}
	.info-recommend__item--title{
		font-size: .38rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.info-recommend__item--desc{
		color: #ccc;
		margin-top: .3rem;
		font-size: .12rem;
	}
	.info-recommend__item--img{
		width: 1.2rem;
		height: 1.2rem;
		margin-top: .4rem;
		margin-left: .2rem;
		border-radius: .6rem;
	}
	.info-recommend__item--time{
		float: right;
		margin-right: .2rem;
		color: #ccc;
	}
</style>