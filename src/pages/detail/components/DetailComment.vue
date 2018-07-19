<template>
	<div class="detail-comment">
	  	<div class="detail-comment__title">
        <p>{{list.number}}条回答</p>
        <div class="detail-comment__title-right">
          <p>最新</p><p>最热</p>
        </div>
      </div>
      <div class="detail-comment__text"></div>
	</div>
</template>

<script>

export default {
  name: 'DetailComment',
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
  .detail-comment__title{
    position: relative;
    height: .8rem;
    line-height: .8rem;
    border-bottom: solid .06rem #eee;
    padding: 0 .2rem;
    font-size: .32rem;
    color: #696969;
  }
  .detail-comment__title-right{
    position: absolute;
    right: .2rem;
    top:0;
  }
  .detail-comment__title-right p{
    float: left;
    padding-left: .4rem;
  }
</style>