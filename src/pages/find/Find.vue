<template>
  <div>
    <find-header></find-header>
    <find-hot></find-hot>
    <find-essay></find-essay>
  </div>
</template>

<script>
import FindHeader from './components/FindHeader'
import FindHot from './components/FindHot'
import FindEssay from './components/FindEssay'

export default {
  name: 'Find',
  components:{
  	FindHeader,
  	FindHot,
  	FindEssay
  }
}
</script>

<style>
</style>