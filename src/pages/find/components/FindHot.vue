<template>
<div class="findhot">
	<div class="findhot-title">
		<span class="iconfont findhot-icon">&#xe620;</span>
    	沸点
		<div class="findhot-title__right">
	    	<span class="iconfont">&#xe62d;</span>
    	</div>
    </div>

    <div>
	    <swiper  :options="swiperOption" >
	    	<swiper-slide 
	    		class="findhot-swiper"
	    	>
		    	<div class="findhot-swiper__item">
		    		<img class="findhot-swiper__img" src="https://user-gold-cdn.xitu.io/2017/7/5/6d36d47cce7a430e0b6a3e5ec304f02e?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1" />
		    		<span class="findhot-swiper__title" >我是标题</span>
		    	</div>
	    		<div class="findhot-swiper__item">
		    		<img class="findhot-swiper__img" src="https://user-gold-cdn.xitu.io/2017/7/5/6d36d47cce7a430e0b6a3e5ec304f02e?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1" />
		    		<span class="findhot-swiper__title" >我是标题</span>
		    	</div>
	    	</swiper-slide>
	    	<swiper-slide 
	    		class="findhot-swiper"
	    	>
	    		<img class="findhot-swiper__img" src="https://user-gold-cdn.xitu.io/2017/7/5/6d36d47cce7a430e0b6a3e5ec304f02e?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1" />
	    		<span class="findhot-swiper__title" >我是标题</span>
	    	</swiper-slide>
	  	</swiper>

    </div>
</div>
</template>

<script>
export default {
  name: 'FindHot',
  data:function(){
  	return {
  		swiperOption:{}
  	}
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
	.findhot-swiper{
		overflow: hidden;
		height: 0;
		padding-bottom: 30%;
	}
	.findhot-swiper__item{
		float: left;
		width: 50%;
	}
	.findhot-swiper__img{
		height: 80%;
		position: relative;
	}
	.findhot-swiper__title{
		position: absolute;
		top:45%;
		left:.2rem;
		right: .2rem;
		color: #fff;
		font-size: .48rem;
	}
</style>