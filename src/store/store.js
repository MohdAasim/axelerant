import Vue from "vue";
import Vuex from "vuex";
import json from '../data.json'

Vue.use(Vuex);
  const  store = new Vuex.Store({
      state:{
         Oderedlist:[],
         Resource:json.users,
      }
  })
  export default store;