<template>
	<div class="detail-centent">
	  	<h3>{{list.title}}</h3>
	  	<p>{{list.content}}</p>

	  	<p class="detail-centent__info">{{list.time}}前</p><p>{{list.read}}人看过</p>

	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DetailCentent',
  data(){
  	return {
  	}
  },
  props:{
  	list:Object
  }
}
</script>

<style>
	.detail-centent{
		padding: .4rem .2rem ;
		border-bottom: solid .3rem #eee;
		font-size: .32rem;
	}
	.detail-centent h3{
		font-size: .44rem;
	}
	.detail-centent p{
		margin-top: .4rem;
		color: #696969;
	}
	.detail-centent__info {
		float: left;
		margin: .4rem .4rem .2rem 0 ;
	}
</style>