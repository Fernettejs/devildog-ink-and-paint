<template>
  <section id="footer">
    <h2>Get in touch</h2>
    <h5>
      I love learning and trying new projects. If you feel that we are a good
      match, send me a message!
    </h5>
    <Social />
  </section>
</template>

<style scoped>
section {
  background: var(--secondary-color);
  background-size: cover;
}

.copyright {
  background: #000;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>

<script>
import Social from "./Social.vue";

export default {
  name: "app",
  components: {
    Social,
  },
};
</script>
