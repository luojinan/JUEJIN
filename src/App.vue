<template>
	<div>
		<keep-alive>
			<router-view/>
		</keep-alive>
	 	<tab-list></tab-list>
	</div>
</template>

<script>
import TabList from 'common/tab/TabList'

export default {
  name: 'App',
  components:{
  	TabList,
  }
}
</script>

<style>
</style>
