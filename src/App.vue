<template>
  <div>
    <Header />
    <Banner />
    <About />
    <Services />
    <Contact />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
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
    Services,
    Contact,
    Footer,
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.6;
  scroll-behavior: smooth;
  font-family: futura, Verdana, sans-serif;
  --light-color: rgb(225, 232, 247);
  --dark-color: rgb(27, 51, 75);
}
html, body {
  overflow-x: hidden;
}
section {
  padding: 100px;
}
h1 {
  font-size: 100px;
  color: white;
  font-weight: 500;
}
@media (max-width: 991px) {
  section {
    padding: 100px 50px;
  }

  .btn {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
  }
  .heading h2 {
    font-weight: 600;
    font-size: 24px;
  }
  .contentBox h3 {
    font-size: 20px;
  }
  .content {
    flex-direction: column;
  }
  .w50 {
    margin-bottom: 20px;
  }

}
@media (max-width: 600px) {
  section {
    padding: 100px 20px;
  }
}

</style>
