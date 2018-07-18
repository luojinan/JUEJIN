import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//使用try catch兼容浏览器
let defaultInfo = {
			'姓名':'KingAn',
			'职位':'前端工程师',
			'公司':'求实习',
			'简介':'双向数据绑定',
			'博客地址':'1017386624@qq.com'
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
		},
		changeJob(ctx,job){
			ctx.commit('changeJob',job)
		},
		changeBoss(ctx,boss){
			ctx.commit('changeBoss',boss)
		},
		changeDesc(ctx,desc){
			ctx.commit('changeDesc',desc)
		},
		changeBoke(ctx,boke){
			ctx.commit('changeBoke',boke)
		}
	},
	mutations:{
		changeName(state,name){
			state.info.姓名 = name
			try{
				localStorage.name = name
			}catch(e){}	
		},
		changeJob(state,job){
			state.info.职位 = job
			try{
				localStorage.job = job
			}catch(e){}	
		},
		changeBoss(state,boss){
			state.info.公司 = boss
			try{
				localStorage.boss = boss
			}catch(e){}	
		},
		changeDesc(state,desc){
			state.info.简介 = desc
			try{
				localStorage.desc = desc
			}catch(e){}	
		},
		changeBoke(state,boke){
			state.info.博客地址 = boke
			try{
				localStorage.boke = boke
			}catch(e){}	
		}
	}
})