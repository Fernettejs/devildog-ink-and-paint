<template>
  <div>
    <Header />
    <Banner />
    <About />
    <Services />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Banner,
    About,
    Services,
    Projects,
    Footer,
  },
};
</script>
