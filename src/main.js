// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'	//移动端点击插件--引入
import iconfont from 'styles/iconfont.css'


//移动端样式准备
import 'styles/reset.css'
import 'styles/border.css'

Vue.config.productionTip = false
fastclick.attach(document.body)		//移动端点击插件--配置

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
