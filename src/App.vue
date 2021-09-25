<template>
  <div id="app">
    <Header />
    <!-- <Searchbar /> -->
   <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/Home.vue'
import Header from './components/Header.vue'
// import Searchbar from './components/Searchbar.vue'
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 


}
</style>
