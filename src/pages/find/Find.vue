<template>
  <div class="find" ref="wrapper">
    <div>
      <find-header></find-header>
      <find-hot></find-hot>
      <find-essay></find-essay>
    </div>
  </div>
</template>

<script>
import FindHeader from './components/FindHeader'
import FindHot from './components/FindHot'
import FindEssay from './components/FindEssay'
import BScroll from 'better-scroll'


export default {
  name: 'Find',
  components:{
  	FindHeader,
  	FindHot,
  	FindEssay
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style>
  .find{
    overflow: hidden;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>