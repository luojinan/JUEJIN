<template>
  <div class="tablist">
    <router-link 
    	tag="div"
    	to="/home"
    	class="tablist-item"
    >
    	<span class="iconfont tablist-icon">&#xe62e;</span>
    	首页
    </router-link>
    <router-link 
    	tag="div"
    	to="/find"
    	class="tablist-item"
    >
    	<span class="iconfont tablist-icon">&#xe632;</span>
    	发现
    </router-link>
    <router-link 
    	tag="div"
    	to="/info"
    	class="tablist-item"
    >
    	<span class="iconfont tablist-icon">&#xe630;</span>
    	消息
    </router-link>
    <router-link 
    	tag="div"
    	to="/mine"
    	class="tablist-item"
    >
    	<span class="iconfont tablist-icon">&#xe62f;</span>
    	我的
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data:function(){
  	return {
  	}
  }
}
</script>

<style>

	.tablist{
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;

		box-shadow: inset 0px 1px 1px -1px #A7A7AB;
	}
	.tablist-item{
		flex:1;
		height: 1.2rem;
		background-color: #F5F5F5;
		text-align: center;
		font-size: .32rem;

		display: flex;
		flex-direction: column;/*垂直排列布局*/
		justify-content: center;	
	}
	.tablist-icon{
		font-size: .48rem;
		margin-bottom: .1rem;
	}
	.router-link-active{
  		color: #007AFF;
	}
</style>