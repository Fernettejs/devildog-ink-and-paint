<template>
  <div>
    <Header />
    <Banner />
    <About />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
// import Tawk from 'vue-echo'
  
// Vue.use(Tawk, {
//     tawkSrc: 'https://embed.tawk.to/6038be47385de407571a4c78/1eveqehid'
// })

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    About,
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    --primary-color:#8b0000;
    --secondary-color:#202020;
    --blue-color:#3C3B6E;
    --white-color:#FEFEFE;
    --gray-color:#CECECE;
}
html {
    scroll-padding-top: 118px; /* height of sticky header */
  }
section {
    padding: 100px;
}

h2 {
    font-size: 3em;
}

p {
    color: white;
}

.line {
    width: 100%;
    height: 6px;
    background: black;
}
</style>
