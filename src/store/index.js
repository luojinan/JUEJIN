import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//使用try catch兼容浏览器
let defaultInfo = {
			'姓名':'KingAn',
			'职位':'前端工程师',
			'公司':'求实习',
			'简介':'双向数据绑定',
			'博客地址':'1017386624@qq.com',
			desc:'前端工程师'
		}
try{
	if(localStorage.name){
		defaultInfo.姓名 = localStorage.name
	}
}catch(e){}

export default new Vuex.Store({
	state:{
		info: defaultInfo
	},
	actions:{
		changeName(ctx,name){
			ctx.commit('changeName',name)
		}
	},
	mutations:{
		changeName(state,name){
			state.info.姓名 = name
			try{
				localStorage.name = name
			}catch(e){}	
		}
	}
})