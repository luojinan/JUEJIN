<template>
  <div>
    <home-header></home-header>
    <router-view></router-view>
  </div>

</template>

<script>
import HomeHeader from './components/HomeHeader'
import axios from 'axios'	//使用axios胡群殴ajax数据

export default {
  name: 'Home',
  components:{
  	HomeHeader
  },
  data:function(){
  	return {
  		data:{}
  	}
  },

}
</script>

<style>
</style>