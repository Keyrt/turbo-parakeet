import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Learn from './views/Learn.vue'
// import Student from './views/Student.vue'
// import Community from './views/Community.vue'

// import Academic from './components/community/Academic.vue'
// import Download from './components/community/Download.vue'
// import Personal from './components/community/Personal.vue'

// import Question from './components/Qusetion.vue'
// import Err from './components/Err.vue'

const Home = () =>import('./views/Home')
const Learn = () =>import('./views/Learn')
const Student = () =>import('./views/Student')
const About = () =>import('./views/About')
const Community = () =>import('./views/Community')

const Academic = () =>import('./components/community/Academic')
const Download = () =>import('./components/community/Download')
const Personal = () =>import('./components/community/Personal')
const Question = () =>import('./components/Qusetion')
const Err = () =>import('./components/Err')
const ChangeCourse = () =>import('./components/ChangeCourse')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes: [
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home,
        // 'academic': Academic
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component : Learn
    },
    {
      path: '/student',
      name: 'student',
      component : Student
    },
    {
      path: '/about',
      name: 'about',
      component : About
    },
    {
      path: '/community',
      name: 'community',
      component : Community,
      redirect:'/community/Academic',
      meta: {
        login:false
      },
      children:[
        {
          path: 'Academic',
          name: 'academic',
          component : Academic,
          // 路由独享守卫
          // beforeEnter(to,from,next) {
          //   const answer = confirm('你还没有登陆，是否登陆？');
          //   if(answer) {
          //     next({name:'personal'})
          //   }else {
          //     next(false);
          //   }
          // }
        },
        {
          path: 'Download',
          name: 'download',
          component : Download,
        },
        {
          path: 'Personal',
          name: 'personal',
          component : Personal,
        }
      ]
    },
    {
      path: '/question/:id',
      name: 'question',
      component : Question
    },
    {
      path: '/err.html',
      name: 'err',
      component : Err
    },
    {
      path: '/learn/ChangeCourse',
      name: 'changeCourse',
      component : ChangeCourse
    },
    {
      path:'*',
      redirect (to) {
        console.log(to)
        if(to.path == '/'){
          return '/home'
        }else {
          return {name: 'err'}
        }
      }
    }
  ]
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//     if(to.path === '/community/Academic') {
//       const answer = confirm('你还没有登陆，是否登陆？');
//       if(answer) {
//         next({name:'personal'})
//       }else {
//         next(false);
//       }
//     }else {
//       next();
//     }
//   })