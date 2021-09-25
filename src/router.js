import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home.vue'
import BookEvent from './components/BookEvent.vue'
//import Finalticket from './components/Finalticket.vue'

Vue.use(Router);
export const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/bookevent", component: BookEvent },
    // {path:"/checkout",component:Finalticket}
 //{ path:'/:notFound(.*)', component:Resource},   //for error page
  ]
});