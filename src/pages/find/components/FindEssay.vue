<template>
  <div>
    <div class="findessay-title">
		<span class="iconfont findessay-icon">&#xe603;</span>
    	热门文章
		<div class="findessay-title__right">
	    	<span class="iconfont">&#xe645;</span>
    	</div>
    </div>

    <div class="findessay-list">
	  	<router-link
	  		tag="div"
	  		:to="'/detail/'+index" 
	  		class="findessay-item" 
	  		v-for="(item,index) of essay"
	  		:key="index"
	  	>
	    	<div class="findessay-item--info">
	    		<div class="findessay-item--title">{{item.title}}</div>
	    		<div class="findessay-item--desc">
		    		{{item.number}}人喜欢 · {{item.author}} · {{item.time}}前
	    		</div>
	    	</div>
	    	<img class="findessay-item--img" :src="item.image" />
	    </router-link>
	  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FindEssay',
  data(){
  	return {
  		essay:[]
  	}
  },
  methods:{
  	getFindEssayInfo(){
  		axios.get('/api/data.json').then(this.getFindEssayInfoSucc)
  	},
  	getFindEssayInfoSucc(res){
  		const data = res.data.find
  		if(data){
  			this.essay = data.boildetail
  		}
  	}
  },
  mounted(){
  	this.getFindEssayInfo()
  }
}
</script>

<style>
	.findessay-title{
		display: flex;
		height: .8rem;
		width: 100%;
		line-height: .8rem;
		background-color: #fff;
		padding: 0 .2rem;
		border-bottom: solid .01rem #eee;
		position: relative;
	}
	.findessay-title--right{
		position: absolute;
		top: 0;
		bottom:0;
		right: .6rem;
	}
	.findessay-title--right span{
		margin-left: .1rem;
		font-size: .32rem;
	}

	.findessay-item{
		height: 2rem;
		background-color: #fff;
		display: flex;
		border-bottom: solid .03rem #eee;
	}
	.findessay-item--info{
		flex: 1;
		margin-top: .4rem;
		padding-left: .2rem;
		min-width: 0;
	}
	.findessay-item--title{
		font-size: .38rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.findessay-item--desc{
		color: #ccc;
		margin-top: .3rem;
		font-size: .12rem;
	}
	.findessay-item--img{
		width: 1.2rem;
		height: 1.2rem;
		margin: .4rem .2rem 0 .4rem;
	}
	.findessay-list{
		margin-top:.2rem;
	}
</style>