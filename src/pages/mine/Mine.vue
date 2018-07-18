<template>
  <div class="mine">
    <div class="mine-header">我的</div>
    <router-link 
		tag="div"
		to="/mine/update"
    	class="mine-info">
    	<img src="https://i1.hdslb.com/bfs/face/d9230cacf28eb70222828eee82c1665a616e62c4.jpg@100Q.webp@128w_128h_100Q_1c.webp" >
    	<div class="mine-info__text">
	    	<p class="mine-info__name">
	    		{{this.$store.state.info.姓名}}
	    	</p>
	    	<p class="mine-info__desc">
	    		{{this.$store.state.info.desc}}
	    	</p>
	    	<span class="iconfont mine-info__icon">&#xe62d;</span>
	    </div>
    </router-link>
    <ul class="mine-info__mylist">
    	<li class="borderbottom"><i class="iconfont mine-list__icon">&#xe627;</i>我喜欢的</li>
    	<li class="borderbottom"><i class="iconfont mine-list__icon">&#xe67f;</i>收藏集</li>
    	<li class="borderbottom"><i class="iconfont mine-list__icon">&#xe628;</i>阅读过的文章</li>
    	<li class="borderbottom"><i class="iconfont mine-list__icon">&#xe627;</i>标签管理</li>
    </ul>
    <ul class="mine-info__set">
    	<li class="borderbottom"><i class="iconfont mine-list__icon">&#xe630;</i>意见反馈</li>
    	<li class="borderbottom"><i class="iconfont mine-list__icon">&#xe645;</i>设置</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Mine'
}
</script>

<style>
	.mine{
		background-color: #eee;
		overflow: hidden;
		position: absolute;
		top:0;
		right: 0;
		left: 0;
		bottom: 0;
	}
	.mine-header{
		height: .8rem;
		line-height: .8rem;
		background-color: #f5f5f7;
		text-align: center;
		font-size: .32rem;
		box-shadow: inset 0px -1px 1px -1px #A7A7AB;
	}
	.mine-info{
		position: relative;
		height: 2rem;
		background-color: #fff;
		display: flex;
		border-bottom: solid .4rem #eee; 
		border-top: solid .4rem #eee;
	}
	.mine-info img{
		height: 1.2rem;
		width: 1.2rem;
		border-radius: .6rem;
		margin:auto .4rem;
	}
	.mine-info__text{
		display: flex;
		flex-direction: column;
		margin:auto .2rem;
	}
	.mine-info__name{
		font-size: .48rem;
	}
	.mine-info__desc{
		font-size: .12rem;
		margin-top: .1rem;
		color: #ccc;
	}
	.mine-info__icon{
		position: absolute;
		right:.6rem;
		font-size: .48rem;
	}
	.mine-list__icon{
		margin:0 .4rem;
	}

	ul{
		border-bottom: solid .4rem #eee; 
	}
	li{
		height: 1rem;
		line-height: 1rem;
		background-color: #fff;
		border-bottom: solid .01rem #eee;
		font-size: .32rem
	}
</style>