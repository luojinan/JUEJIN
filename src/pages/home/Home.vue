<template>
  <div>
    <home-header></home-header>
    <router-view></router-view>
  </div>

</template>

<script>
import HomeHeader from './components/HomeHeader'

export default {
  name: 'Home',
  components:{
  	HomeHeader
  }
}
</script>

<style>
</style>