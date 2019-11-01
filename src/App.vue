<template>
  <div id="app">
    <Navbar />
    <transition
      name="router-anim"
      mode="out-in"
      enter-active-class="animated fadeIn" 
      leave-active-class="animated fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
@import "./styles/_variables.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
