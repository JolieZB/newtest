import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import Plist from './views/ProductList.vue'
import Stat from './views/Stat.vue'
import Index from './views/index.vue'
import Message from './views/message.vue'
import Comment from './views/comment.vue'
import Jses from './views/jses.vue'
import Animation from './views/animation.vue'
import Clock from './views/clock.vue'
import Closure from './views/closure.vue'
import Menu from './views/menu.vue'
Vue.use(Router)  //=><script src="vue-router.js">

export default new Router({
  routes: [
    // {path: '/',component:Main},
    // {path:"/login",component:Login},
    {path:"/",component:Main,children:[  
        {path:"",component:Index},      
        {path:"index",component:Index},
        {path:"message",component:Message},
        {path:"login",component:Login,children:[
          {path:"",component:Comment},
          {path:"comment",component:Comment}
        ]}
    ]},
    {path:"/jses",component:Jses},
    {path:"/animation",component:Animation},
    {path:"/clock",component:Clock},
    {path:"/closure",component:Closure},
    {path:"/menu",component:Menu},
    {path:"/*",component:NotFound}
  ]
})
