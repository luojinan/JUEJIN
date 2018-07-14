<template>
  <div class="homeheader">
    <router-link 
    	tag="div"
		to="/home/homepage"
    	class="homeheader-item">首页
    </router-link>
    <router-link 
    	tag="div"
		to="/home/homefrontend"
    	class="homeheader-item">前端
    </router-link>
    <router-link 
		tag="div"
		to="/home/homedesign"
    	class="homeheader-item">设计
    </router-link>
    <router-link 
		tag="div"
		to="/home/homeproduct"
    	class="homeheader-item">产品
    </router-link>
    <router-link 
		tag="div"
		to="/home/homeafterend"
    	class="homeheader-item">后端
    </router-link>
    <router-link 
		tag="span"
		to="/find"
    	class="homeheader-icon iconfont">&#xe62f;
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style>
	.homeheader{
		z-index: 99;
		display: flex;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;

		height: .8rem;
		background-color: #f5f5f7;
		box-shadow: inset 0px -1px 1px -1px #A7A7AB;
	}
	.homeheader-item{
		flex: 1;
		text-align: center;
		line-height: .8rem;
		font-size: .32rem;
	}
	.homeheader-icon{
		text-align: center;
		padding: 0 .2rem 0 0;
		line-height: .8rem;
		font-size: .32rem;
	}
	.router-link-exact-active{
		color: #007AFF;
		border-bottom: 1px solid #006CFF;
	}
</style>