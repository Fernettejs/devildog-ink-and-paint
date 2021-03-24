<template>
  <section class="services" id="services">
    <div class="heading">
      <h2>Services</h2>
      <p>This is what I do.</p>
    </div>
    <div class="content">
      <div class="servicesBox">
        <img src="../assets/images/icon_responsive.png" alt="" />
        <h2>HTML & CSS Responsive Web Design</h2>
        <p>
          Websites that are user friendly, visually appealing, and work across
          various platforms and devices.
        </p>
      </div>
      <div class="servicesBox">
        <img src="../assets/images/icon_web_dev.png" alt="" />
        <h2>JavaScript</h2>
        <p>
          The ability to get interactive with JavaScript along with jQuery and
          DOM manipluation skills. Intermediate skills working with
          <strong>React</strong> and <strong>Vue</strong> frameworks.
        </p>
      </div>
      <div class="servicesBox">
        <img src="../assets/images/icon_web_design.png" alt="" />
        <h2>Behind The Scenes</h2>
        <p>
          Use of Git and GitHub, Node.js, APIs, Bootstrap, SASS, and Google.
        </p>
      </div>
      <div class="servicesBox">
        <img src="../assets/images/icon_lightbulb.png" alt="" />
        <h2>Problem Solving</h2>
        <p>
          Able to <strong>troubleshoot</strong> and <strong>debug</strong> when
          the pressure is on. These are the challenges I live for. We grow from
          every problem we face and I am driven to learn and always improve as a
          developer.
        </p>
      </div>
      <div class="servicesBox">
        <img src="../assets/images/icon_handshake.png" alt="" />
        <h2>Customer Relations</h2>
        <p>
          From the fields in Afghanistan to the customers of my LLC; I have
          enjoyed working with a wide variety of personnel.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services .content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.services .content .servicesBox {
  padding: 40px 20px;
  background: #222;
  color: var(--light-color);
  width: 340px;
  margin: 20px;
  text-align: center;
  transition: 0.5s;
  border-radius: 10px;
}
.services .content .servicesBox img {
  height: 150px;
  padding-bottom: 10px;
}
.services .content .servicesBox:hover {
  background-color: var(--dark-color);
  color: white;
  transform: scale(1.05);
  transition: 0.2s ease-in-out;
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.25);
}
.services .content .servicesBox:hover img {
  filter: invert(1);
}
.services .content .servicesBox h2 {
  font-size: 20px;
  font-weight: 60px;
}
.servicesBox p {
  padding-top: 10px;
}

</style>

<script>
import { TimelineLite } from "gsap";
export default {
  mounted() {
    const timeline = new TimelineLite();

    timeline.from(".servicesBox", {
      duration: 1,
      opacity: 0,
      delay: 2,
      stagger: 0.5,
    });
  },
};
</script>
