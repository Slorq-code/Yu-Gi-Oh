<template>
  <div class="container">
    <Header/>
    <router-view id="router-view"/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
:root {
    --background-body: #24282F;
    --background-card: #3C3E44;
    --text-white: #FFFFFF;
    --text-gray: #c0c0c0;
    --text-orange: #FF9800;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--background-body);
    color: var(--text-white);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    margin-bottom: 3rem;
    text-align: center;
}

</style>
