<template>
	<div class="homepage">
	  <div class="homepage-recommend">
	  	<div class="homepage-recommend__title">
	    	<span class="iconfont">&#xe627;</span>
	    	热门推荐
	    	<span class="iconfont">&#xe653;</span>
	    	<span class="iconfont">&#xe64d;</span>
	    </div>
	    <div class="homepage-recommend__item">
	    	<div class="homepage-recommend__item--info">
	    		<div class="homepage-recommend__item--title">这是标题</div>
	    		<div class="homepage-recommend__item--desc">
	    		<span class="iconfont">&#xe627;</span>10
	    		<span class="iconfont">&#xe62f;</span>渔人码头
	    		<span class="iconfont">&#xe627;</span>40分钟前
	    		</div>
	    	</div>
	    	<img class="homepage-recommend__item--img" src="https://user-gold-cdn.xitu.io/2018/7/13/16491cbd31f9640f?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1" />
	    </div>
	    <div class="homepage-recommend__item">
	    	<div class="homepage-recommend__item--info">
	    		<div class="homepage-recommend__item--title">这是标题</div>
	    		<div class="homepage-recommend__item--desc">
	    		<span class="iconfont">&#xe627;</span>10
	    		<span class="iconfont">&#xe62f;</span>渔人码头
	    		<span class="iconfont">&#xe627;</span>40分钟前
	    		</div>
	    	</div>
	    	<img class="homepage-recommend__item--img" src="https://user-gold-cdn.xitu.io/2018/7/13/16491cbd31f9640f?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1" />
	    </div>
	    <div class="homepage-recommend__item">
	    	<div class="homepage-recommend__item--info">
	    		<div class="homepage-recommend__item--title">这是标题</div>
	    		<div class="homepage-recommend__item--desc">
	    		<span class="iconfont">&#xe627;</span>10
	    		<span class="iconfont">&#xe62f;</span>渔人码头
	    		<span class="iconfont">&#xe627;</span>40分钟前
	    		</div>
	    	</div>
	    	<img class="homepage-recommend__item--img" src="https://user-gold-cdn.xitu.io/2018/7/13/16491cbd31f9640f?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1" />
	    </div>
	  </div>
	  <div class="homepage-list">
	  	<div class="homepage-recommend__item">
	    	<div class="homepage-recommend__item--info">
	    		<div class="homepage-recommend__item--title">这是标题</div>
	    		<div class="homepage-recommend__item--desc">
	    		<span class="iconfont">&#xe627;</span>10
	    		<span class="iconfont">&#xe62f;</span>渔人码头
	    		<span class="iconfont">&#xe627;</span>40分钟前
	    		</div>
	    	</div>
	    	<img class="homepage-recommend__item--img" src="https://user-gold-cdn.xitu.io/2018/7/13/16491cbd31f9640f?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1" />
	    </div>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
	.homepage{
		position: fixed;
		top:.8rem;
		left: 0;
		right: 0;
		
		height: 50rem;
		background-color: #eee;
	}
	.homepage-recommend{
		border-top: solid .2rem #eee;
	}
	.homepage-recommend__title{
		display: flex;
		height: .8rem;
		line-height: .8rem;
		background-color: #fff;
		border-bottom: solid .01rem #eee;
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
	}
	.homepage-recommend__item--title{
		font-size: .44rem;
	}
	.homepage-recommend__item--desc{
		color: #ccc;
		margin-top: .2rem;
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