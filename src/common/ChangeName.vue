<template>
	<div class="change">
		<div class="update-header">
			<div
				class="update-header__left"
				@click="handleChangeBack">
				<span class="iconfont update-header__icon">&#xe624;</span>
			</div>
			<div class="update-header__title">修改名字</div>
			<div @click="handleSureClick" class="update-header__Sure">保存</div>
		</div>
		<div class="update-input">
			<input type="text" v-model="name"> </input>
			<p>好的名字让人更容易记住你</p>
		</div>
	</div>
</template>

<script>

export default {
  name: 'MineChange',
  data(){
	  return {
	  	name:"",
	  	open:false
	  }
	},
	methods:{
		handleChangeBack(){
			this.$emit('closeShow',this.open)
		},
		handleSureClick(){
			//console.log(this.name)
			this.$store.dispatch('changeName',this.name)
			this.$emit('closeShow',this.open)
			this.name=''
		}
	}
 }
</script>

<style>
	.change{
		overflow: hidden;
		position: absolute;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #eee;
	}
	.update-header{
		position: relative;
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
	.update-header__Sure{
		position: absolute;
		right: .4rem;
		color: #007AFF;
	}
	.update-input{
		padding: .2rem;
	}
	.update-input input{
		height: .64rem;
		width: 100%;
		background-color: #eee;
		border-bottom: solid .01rem #007AFF;
	}
	.update-input p{
		margin-top: .2rem;
		color: #696969;
	}
</style>