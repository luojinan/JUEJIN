<template>
  <div class="detail">	
	<div class="detail-banner">
		<img class="detail-banner__img" src="http://i0.hdslb.com/bfs/archive/7dace60479fb74a3ebd1e7a55e50c0781fe2a397.jpg"/>
		<router-link 
		tag="span"
		to="/find"
		class="iconfont detail-banner__back">&#xe624;
		</router-link>
		<div class="detail-banner__author-infor">
	        <img src="https://i1.hdslb.com/bfs/face/7696fa55a173dd7b703ef6f398d2fde819f0c7af.jpg@100Q.webp@128w_128h_100Q_1c.webp" />
	        <p>泡芙喵-PuFF</p>
	    </div>
		<span class="iconfont detail-banner__share">&#xe62f;</span>
		<div class="detail-banner__info">
				<div>118人参加</div>
				<div>{{boildetails.title}}</div>
		</div>		
	</div>
	
	<detail-centent :list="boildetails"></detail-centent>
	<detail-comment :list="boildetails"></detail-comment>
</div>
	
</template>

<script>
import axios from 'axios'
import DetailCentent from './components/DetailCentent'
import DetailComment from './components/DetailComment'

export default {
  name: 'Drtail',
  data(){
  	return {
  		boildetails:{}
  	}
  },
  components:{
  	DetailCentent,
  	DetailComment
  },
  methods:{
  	//axios获取数据方法
  	getAllData(){
  		axios.get('static/mock/data.json').then(this.getAllDataSucc)
  	},
  	getAllDataSucc(res){
  		console.log(res.data.find.boildetail)
  		const data =res.data.find
  		if(res.data && data){
  			this.boildetails = data.boildetail[0]
  		}
  	}
  },

  mounted(){
  	this.getAllData()
	//this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style>
	.detail-banner{
		overflow: hidden;
		height: 0;
		padding-bottom: 60%;
		position: relative;
	}
	.detail-banner__img{
		width: 100%;
	}
	.detail-banner__back{
		position: absolute;
		top:.2rem;
		left: .2rem;
		color: #fff;
		font-size: .44rem;
	}
	.detail-banner__share{
		position: absolute;
		top:.2rem;
		right: .2rem;
		color: #fff;
		font-size: .44rem;
	}
	.detail-banner__author-infor{
		position: absolute;
		top:.1rem;
		left: .8rem;
		color: #fff;
		font-size: .32rem;
	}
	.detail-banner__info{
		position: absolute;
		bottom: .1rem;
		left: .2rem;
		color: #fff;
		font-size: .32rem;
	}
	.detail-banner__author-infor img{
		float: left;
		width: .8rem;
		height: .8rem;
		border-radius: .4rem;
	}
	.detail-banner__author-infor p{
		float: left;
		margin-top: .2rem;
		margin-left: .2rem;
	}
	
</style>