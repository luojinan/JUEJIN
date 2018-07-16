<template>
  <div class="findheader">
    <router-link 
    	tag="div"
    	to="/"
    	class="findheader-item"
    >
    	<span class="iconfont findheader-item__icon">&#xe603;</span>
    	本周最热
    </router-link>
    <router-link 
    	tag="div"
    	to="/"
    	class="findheader-item"
    >
    	<span class="iconfont findheader-item__icon">&#xe67f;</span>
    	收藏集
    </router-link>
    <router-link 
    	tag="div"
    	to="/"
    	class="findheader-item"
    >
    	<span class="iconfont findheader-item__icon">&#xe631;</span>
    	线下活动
    </router-link>
    <router-link 
    	tag="div"
    	to="/"
    	class="findheader-item"
    >
    	<span class="iconfont findheader-item__icon">&#xe628;</span>
    	专栏
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FindHeader'
}
</script>

<style>
	.findheader{
		display: flex;
		height: 2rem;
		text-align: center;
		border-bottom: solid .1rem #eee; 
	}
	.findheader-item{
		flex: 1;

		display: flex;
		flex-direction: column;/*垂直排列布局*/
		justify-content: center;
	}
	.findheader-item__icon{
		font-size: .6rem;
		color: #1296db;
		margin-bottom: .2rem;
	}
</style>