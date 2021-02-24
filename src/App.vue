<template>
  <div>
    <Header />
    <Banner />
    <About />
    <Foot />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Foot from './components/Foot.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    About,
    Foot
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
    --primary-color:#cc0102;
    --secondary-color:#4d4a4a;
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
