<template>
<section class="banner" id="home">
    <div class="textbox">
        <img id="profile-image" src="../assets/images/me-profile.jpg" alt="ME">
        <h1>Joe Fernette</h1>
        <h4>Web Developer</h4>
        <!-- <p>Using Vue, JavaScript, </p> -->
        <!-- START ABOVE HERE -->
        <h3>Welcome to my
            <span
               class="txt-rotate"
               data-period="2000"
               data-rotate='[ "coding journey.","creations.", "life."]'></span>
          </h3>        
          <a href="#project" class="btn">My Projects</a>
    </div>
</section>
</template>

<style scoped>
#profile-image {
  height: 250px;
  border-radius: 100%;
}
.banner {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(rgba(24, 39, 54, 0.65), rgba(25, 30, 53, 0.65)),
    url(../assets/images/TableTop.jpg);
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.banner h2 {
  font-size: 3em;
  color: white;
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
}
.btn {
  position: relative;
  background: var(--dark-color);
  display: inline-block;
  color: white;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 500;
  border-radius: 5px;
}
.btn:hover {
  transform: scale(1.03);
  transition: 0.2s ease-in-out;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.25);
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
      color: white;
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
import { TimelineLite } from 'gsap'
export default { 
  mounted() { 
    const { btn } = this.$refs
    const timeline = new TimelineLite() 
    
    timeline.from(btn, {duration: 2, x: '-500%', ease: 'bounce', delay: 2})
  }
} 
</script>