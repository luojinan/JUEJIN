<template>
	<div class="update">
		<div class="update-header">
			<router-link 
				to="/mine"
				tag="div"
				class="update-header__left">
				<span class="iconfont update-header__icon">&#xe624;</span>
			</router-link>
			<div class="update-header__title">修改资料</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'MineChange',
  data(){
	  return {
	  	
	  }
	}
 }
</script>

<style>
	.update{
		overflow: hidden;
		position: absolute;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #eee;
	}
	.update-header{
		display: flex;
		height: .8rem;
		line-height: .8rem;
		background-color: #f5f5f7;
		font-size: .32rem;
		box-shadow: inset 0px -1px 1px -1px #A7A7AB;
	}
	.update-header__left{
		float: left;
		width: .5rem;
		margin-left: .2rem;
	}
	.update-header__title{
		margin-left: 3rem;
	}
	
</style>