<template>
  <header>
    <a href="#home" class="logo">Joe Fernette</a>
    <Sidebar />
    <Burger />

    <ul class="menu">
      <li><a href="#home" onclick="toggleMenu();">Home</a></li>
      <li><a href="#about" onclick="toggleMenu();">About</a></li>
      <li><a href="#services" onclick="toggleMenu();">Services</a></li>
      <li><a href="#project" onclick="toggleMenu();">Projects</a></li>
      <li><a href="#footer" onclick="toggleMenu();">Contact</a></li>
    </ul>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  text-align: right;
}
header.sticky {
  background: rgb(225, 232, 247);
  padding: 20px 100px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0, 0.1);
}
header .logo {
  color: black;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 2px;
}
.logo {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.logo.sticky {
  color: #111;
  visibility: visible;
  opacity: 1;
}
header ul {
  position: relative;
  display: flex;
}
header ul li {
  position: relative;
  list-style: none;
}
header ul li a {
  position: relative;
  display: inline-block;
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
}
header ul li a:hover {
  text-decoration: underline;
}
header.sticky ul li a {
  color: #111;
}

@media (max-width: 991px) {
  header,
  header.sticky {
    padding: 20px 50px;
    z-index: 1000;
  }
  .menu {
    position: fixed;
    top: 75px;
    left: -100%;
    display: block;
    padding: 100;
    text-align: center;
    width: 100%;
    height: 100vh;
    background: white;
    transition: 0.5s;
    z-index: 999;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  .menu.active {
    left: 0;
  }
  header ul li a {
    color: #111;
    font-size: 24px;
    margin: 10px;
  }
  .toggle {
    width: 40px;
    height: 40px;
    background: url(../assets/images/menu.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px;
    cursor: pointer;
  }
  .toggle.active {
    width: 40px;
    height: 40px;
    background: url(../assets/images/close.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25px;
    cursor: pointer;
  }
  header .toggle {
    filter: invert(1);
  }
  header.sticky .toggle {
    filter: invert(0);
  }
}
/* Responsive navigation menu - display links on top of each other instead of next to each other (for mobile devices) */
@media (max-width: 600px) {
  header,
  header.sticky {
    padding: 20px 20px;
    z-index: 1000;
  }
}
</style>

<script>
import Burger from "./Burger.vue";
import Sidebar from "./Sidebar.vue";
import { TimelineLite } from "gsap";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
  },
  mounted() {
    const { logo } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(logo, { duration: 2, y: "-100%", ease: "bounce" });

    // Sticky Header
    window.addEventListener("scroll", function() {
      const header = document.querySelector("header");
      const logo = document.querySelector(".logo");
      header.classList.toggle("sticky", window.scrollY > 0);
      logo.classList.toggle("sticky", window.scrollY > 400);
    });
  },
};
</script>
