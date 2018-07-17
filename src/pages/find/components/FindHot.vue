<template>
<div class="findhot">
	<div class="findhot-title">
		<span class="iconfont findhot-icon">&#xe620;</span>
    	沸点
		<div class="findhot-title__right">
	    	<span class="iconfont">&#xe62d;</span>
    	</div>
    </div>

    <div class="findhot-hot">
	    <swiper  :options="swiperOption" >
	    	<swiper-slide 
	    		class="findhot-swiper"
	    		v-for="(swiper,index) of swipers"
	    		:key="index"
	    	>
		    	<div
		    		class="findhot-swiper__item"
		    		v-for="item of swiper"
		    		:key="item.number"
		    	>
		    		<img class="findhot-swiper__img" :src="item.image" />
		    		<span class="findhot-swiper__title" >{{item.title}}</span>
		    	</div>
	    	</swiper-slide>
	  	</swiper>

    </div>
</div>
</template>

<script>
import axios from "axios"

export default {
  name: 'FindHot',
  data:function(){
  	return {
  		swiperOption:{},
  		boil:[],
  	}
  },
  computed:{
  	swipers(){
  		const swipers = []
  		this.boil.forEach((item,index)=>{
  			const swiper = Math.floor(index/2)
  			if(!swipers[swiper]){	//判断是否为0，不为0就大于2
  				swipers[swiper]=[]
  			};
  			swipers[swiper].push(item)
  		})
  		return swipers ;
  	}
  },
  methods:{
  	getFindHotInfo(){
  		axios.get('/api/data.json').then(this.getFindHotInfoSucc)
  	},
  	getFindHotInfoSucc(res){
  		//console.log(res.data.find.boil)
  		const data = res.data.find
  		if(data){
  			this.boil = data.boil
  		}
  	}
  },

  mounted(){
  	this.getFindHotInfo()
  }
}
</script>

<style>
	.findhot{
		border: solid ..6rem #eee;
	}
	.findhot-title{
		display: flex;
		height: .8rem;
		line-height: .8rem;
		background-color: #fff;
		padding: 0 .2rem;
		border-bottom: solid .01rem #eee;
		position: relative;
		font-size: .32rem;
	}
	.findhot-icon{
		font-size: .6rem;
		color: red;
		margin-right: .1rem;
	}
	.findhot-title__right{
		position: absolute;
		top: 0;
		bottom:0;
		right: .2rem;
	}
	.findhot-title__right span{
		margin-left: .1rem;
		font-size: .32rem;
	}

	.findhot-hot{
		border-bottom: solid .2rem #eee;
	}
	.findhot-swiper{
		overflow: hidden;
		height: 0;
		padding-bottom: 30%;
	}
	.findhot-swiper__item{
		flex: 1;
		float: left;
		width: 50%;
		overflow: hidden;
		height: 0;
		padding-bottom: 30%;
		margin-top: .1rem;
		
	}
	.findhot-swiper__img{
		position: relative;
		border-radius: .2rem;
		height: 2rem;
		width: 100%;
	}
	 .findhot-swiper__title{
		position: absolute;
		top:.2rem;
		left:.2rem;
		right: .2rem;
		color: #fff;
		font-size: .32rem;
	}
</style>