<template>
  <Header/>
  <router-view id="router-view"/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style>
#app {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-url: url("../src/assets/imgs/FullScreen.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
#router-view {
  background-color:rgba(155,118,77,0.8);
  height: 87%;
  width: 100%;
}
</style>
