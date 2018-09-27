import Vue from 'vue'
import Router from 'vue-router'
import SendPage from '@/components/SendPage'
import GetPage from '@/components/GetPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SendPage',
      component: SendPage
    },
    {
    	path:'/get',
    	name:'GetPage',
    	component:GetPage
    }
  ]
})
