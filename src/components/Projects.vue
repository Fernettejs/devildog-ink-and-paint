<template>
  <section class="project" id="project">
    <div class="heading">
      <h2>My Latest Projects</h2>
      <p>
        Repositories at
        <a target="_blank" href="https://github.com/Fernettejs"
          >github.com/Fernettejs</a
        >.
      </p>
    </div>
    <div class="content">
      <div class="projectBox">
        <a href="https://gifted-aryabhata-13f4ca.netlify.app/" target="_blank">
          <img src="../assets/images/mountain_pink.jpg" alt="" />
          <div class="projectText">
            <b>React Affirmation API:</b> <br /><br />
            Single page that pulls affirmations from an API and reads it outloud
            to the user.
          </div>
        </a>
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/Fernettejs/affirmation-react-api"
          >GitHub: React Affirmation API</a
        >
      </div>
      <div class="projectBox">
        <a href="http://backfirstresponders.github.io/" target="_blank">
          <img src="../assets/images/alex_banner.jpg" alt="" />
          <div class="projectText">
            <b>Alex's Portfolio:</b> <br /><br />
            Personal website for my wife using HTML, CSS, and minimal JS.
          </div>
        </a>
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/Fernettejs/Alex"
          >GitHub: Alex's Portfolio</a
        >
      </div>
      <div class="projectBox">
        <a href="https://quizzical-bell-6db17d.netlify.app/" target="_blank">
          <img src="../assets/images/js-car-game.png" alt="" />
          <div class="projectText">
            <b>JavaScript Car Game</b> <br /><br />
            Simple game with primary focus on JavaScript (so don't hate on the
            lack of design).
          </div>
        </a>
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/Fernettejs/js-game"
          >GitHub: JavaScript Car Game</a
        >
      </div>
      <div class="projectBox">
        <a href="https://www.devildoginkandpaint.com/" target="_blank">
          <img src="../assets/images/American-flag-2a.png" alt="" />
          <div class="projectText">
            <b>DevilDog Ink and Paint</b> <br /><br />Vue.js with multiple
            views/pages, using GSAP for animations
          </div>
        </a>
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/Fernettejs/router-netlify"
          >GitHub: DevilDog Ink and Paint</a
        >
      </div>
      <div class="projectBox">
        <a href="https://blissful-murdock-e6b468.netlify.app/" target="_blank">
          <img src="../assets/images/oliver1.jpg" alt="" />
          <div class="projectText">
            <b>Oliver's Epic Ride:</b> <br /><br />
            Utilizing more design and different ways to showcase people's work.
          </div>
        </a>
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/Fernettejs/Oliver"
          >GitHub: Oliver's Epic Ride</a
        >
      </div>
      <div class="projectBox">
        <a href="https://epic-heyrovsky-94143d.netlify.app/" target="_blank">
          <img
            src="../assets/images/blue-check-mark-transparent-png-21.png"
            alt=""
          />
          <div class="projectText">
            <b>React Task Manager</b> <br /><br />Front end only build with
            React.
          </div>
        </a>
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/Fernettejs/router-netlify"
          >GitHub: DevilDog Ink and Paint</a
        >
      </div>
      <div class="projectBox">
        <a href="https://fernettejs.github.io/twitter-app" target="_blank">
          <img src="../assets/images/react-twitter.png" alt="" />
          <div class="projectText">
            <b>React Twitter Clone:</b> <br /><br />
            Project used to practice building with React. With integrated
            real-time twitter feed.
          </div>
        </a>
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/Fernettejs/twitter-app"
          >GitHub: React Twitter Clone</a
        >
      </div>
      <!-- <div class="projectBox">
            <a href="resources/Comb/index.html" target="_blank">
                <img src="../assets/images/Screen Shot 2020-12-04 at 4.42.25 PM.png" alt="">
                <div class="projectText"><b>The Comb</b> <br/><br/> Product page utilizing marketing strategies and visual appeal with HTML, CSS(SASS), and JS.</div>
            </a>
        </div> -->
      <div class="projectBox">
        <a href="https://relaxed-meninsky-fb5c8c.netlify.app/" target="_blank">
          <img src="../assets/images/Cowbell.png" alt="" />
          <div class="projectText">
            <b>More Cowbell:</b> <br /><br />
            First page created with HTML, CSS, and JavaScript. Simple button
            that plays more Cowbell! This will always be here.
          </div>
        </a>
        <a
          class="github-link"
          target="_blank"
          href="https://github.com/Fernettejs/MoreCowbellButton"
          >GitHub: More Cowbell</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.project {
  background: var(--light-color);
}
.project .content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.project .content .projectBox {
  width: 350px;
  height: 350px;
  padding: 20px;
  position: relative;
  text-align: center;
}
.project .content .projectBox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: rgba(24, 39, 54, 0.65);
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  backface-visibility: hidden;
  background-color: white;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 99;
}
.projectText {
  transition: 0.5s ease;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  padding: 32px 64px;
  height: 300px;
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
}
.projectBox:hover .projectText {
  visibility: visible;
  opacity: 1;
  border-radius: 10px;
}
.projectBox:hover img {
  filter: opacity(0.3);
}
.github-link {
  position: absolute;
  transform: rotate(90deg);
  width: 200px;
  height: 45px;
  top: 190px;
  left: 253px;
  background: var(--dark-color);
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 5px;
  visibility: hidden;
}
.projectBox:hover .github-link {
  visibility: visible;
}
</style>
