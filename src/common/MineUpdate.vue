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
		<div class="update-info">
			<ul>
				<div class="update-info__face">
					<p class="update-info__key">头像</p>
					<img class="update-info__face--img" src="https://i1.hdslb.com/bfs/face/d9230cacf28eb70222828eee82c1665a616e62c4.jpg@100Q.webp@128w_128h_100Q_1c.webp" />
				</div>
				<li
					:key="index"
					v-for="(item,index) of infoKey"
					@click="handleInfoList(item)"
					>
					<p class="update-info__key">{{item}}</p>
					<p class="update-info__text">{{$store.state.info[item]}}</p>
				</li>
			</ul>
		</div>

		<!--修改页面作为组件引入-->
		<change-name v-show="showName" v-on:closeShow="closeName"></change-name>
		<change-job v-show="showJob" v-on:closeShow="closeJob"></change-job>
		<change-boss v-show="showBoss" v-on:closeShow="closeBoss"></change-boss>
		<change-desc v-show="showDesc" v-on:closeShow="closeDesc"></change-desc>
		<change-boke v-show="showBoke" v-on:closeShow="closeBoke"></change-boke>

	</div>
</template>

<script>
import ChangeName from './ChangeName'
import ChangeJob from './ChangeJob'
import ChangeDesc from './ChangeDesc'
import ChangeBoss from './ChangeBoss'
import ChangeBoke from './ChangeBoke'

export default {
  name: 'MineUpdate',
  data(){
	  return {
	  	infoKey:['姓名','职位','公司','简介','博客地址'],
	  	showName:false,
	  	showJob:false,
		showBoss:false,
		showDesc:false,
		showBoke:false
	  } 
	},
	components:{
	  	ChangeName,
	  	ChangeJob,
	  	ChangeDesc,
	  	ChangeBoss,
	  	ChangeBoke
	},
	methods:{
		handleInfoList(clickWhat){
			if(clickWhat=="姓名"){this.showName=true}else if(clickWhat=='职位'){
				this.showJob=true}else if(clickWhat=='公司'){
					this.showBoss=true}else if(clickWhat=='简介'){
						this.showDesc=true}else if(clickWhat=='博客地址'){
							this.showBoke=true}
		},
		closeName(close){
			this.showName = close
		},
		closeJob(close){
			this.showJob = close
		},
		closeBoss(close){
			this.showBoss = close
		},
		closeDesc(close){
			this.showDesc = close
		},
		closeBoke(close){
			this.showBoke = close
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
	li{
		height: 1rem;
		line-height: 1rem;
		background-color: #fff;
		border-bottom: solid .08rem #eee;
		font-size: .32rem;
		display: flex;
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
	.update-info__key{
		flex: 1;
		margin-left: .2rem;
	}
	.update-info__face{
		position: relative;
		height: 2rem;
		line-height: 2rem;
		background-color: #fff;
		border-bottom: solid .08rem #eee;
		font-size: .32rem;
		display: flex;
	}
	.update-info__face--img{
		height: 1.2rem;
		width: 1.2rem;
		border-radius: .6rem;

		margin: auto .4rem;
	}
	.update-info__text{
		color: #ccc;
		margin-right: .2rem;
	}
</style>