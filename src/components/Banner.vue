<template>
  <section class="banner" id="home">
    <div class="textbox">
      <img id="profile-image" src="../assets/images/me-profile.jpg" alt="ME" />
      <h1>Joe Fernette</h1>
      <h4>Web Developer</h4>
      <p>
        Vue, JavaScript, HTML and CSS are my daily users. I use these for
        personal projects and static websites for clients. I love building with
        React. I have built with it before and am getting back into it. I am
        also currently building more with Ruby on Rails. I'm fascinated by front
        end architecture and design. I find myself wanting to do more with
        backend everyday though. I have been doing this for around 3 years and
        don't see ever stopping! There is always something to learn and that's
        what I love about it.
      </p>
      <Social />
      <!-- <h3>
        Welcome to my
        <span
          class="txt-rotate"
          data-period="2000"
          data-rotate='[ "coding journey.","creations.", "life."]'
        ></span>
      </h3> -->
      <!-- <a href="./src/assets/Web Developer Resume 2021.pdf" target="_blank" class="btn">My Resume</a> -->
    </div>
  </section>
</template>

<style scoped>
#profile-image {
  margin-top: -100px;
  height: 250px;
  border-radius: 100%;
}
.banner {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(rgba(24, 39, 54, 0.65), rgba(25, 30, 53, 0.65)),
    url(../assets/images/TableTop.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.banner h2 {
  font-size: 3em;
  color: #fff;
  font-weight: 500;
  line-height: 1.2em;
}
.banner h2 span {
  font-size: 1.5em;
}
.banner h3 {
  font-size: 1.5em;
  color: var(--light-color);
  font-weight: 500;
}
.banner h4 {
  margin-top: -16px;
  margin-bottom: 20px;
  background: #fff;
}
.btn:hover {
  transform: scale(1.03);
  transition: 0.2s ease-in-out;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.25);
}
p {
  color: #fff;
  background: linear-gradient(rgba(24, 39, 54, 0.65), rgba(25, 30, 53, 0.65));
  font-size: 20px;
}
@media (max-width: 991px) {
  .banner {
    padding: 150px 50px 100px;
    align-items: flex-start;
  }
  #profile-image {
    height: 150px;
    border-radius: 100%;
  }
  .banner h1 {
    font-size: 52px;
    color: #fff;
    font-weight: 500;
  }
  .btn {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
  }
}
@media (max-width: 600px) {
  .banner {
    padding: 150px 20px 100px;
  }
  .banner h2 {
    font-size: 2.5em;
  }
  .banner h3 {
    font-size: 1em;
  }
}
</style>

<script>
import Social from "./Social.vue";
import { TimelineLite } from "gsap";

export default {
  name: "app",
  components: {
    Social,
  },
  mounted() {
    const { btn } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(btn, { duration: 2, x: "-500%", ease: "bounce", delay: 2 });
    // TYPING SUBHEADER
    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    window.onload = function() {
      var elements = document.getElementsByClassName("txt-rotate");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML =
        ".txt-rotate > .wrap { border-right: 0.2em solid rgb(225, 232, 247) }";
      document.body.appendChild(css);
    };
  },
};
</script>
