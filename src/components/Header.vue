<template>
    <header>
        <div class="toggle" @click="toggleMenu();"></div>
          <ul class="menu-left">
              <li><a href="index.html" @click="toggleMenu();">Home</a></li>
              <li><a href="#about" @click="toggleMenu();">About</a></li>
          </ul>
              <img ref="logo" class="logo" src="../assets/images/logo-white.png" alt="logo">
              <a  href="#home" ></a>
          <ul class="menu-right">
              <div class="subnav">
                  <button class="subnavbtn">Portfolio<i class="fa fa-caret-down"></i></button>
                  <div class="subnav-content">
                    <a href="airbrush.html">Airbrush</a>
                    <a href="#tattoo">Tattoo</a>
                  </div>
              </div>
              <li><a href="#testimonials" @click="toggleMenu();">Testimonials</a></li>
              <a href="#contact" @click="toggleMenu();" class="btn">Contact</a>
              <!-- <li><a href="#contact" @click="toggleMenu();">Contact</a></li> -->
          </ul>
    </header>
</template>

<style scoped>

header {
    border-bottom: 2px solid var(--primary-color);
    display: flex;
    align-items: center;
    height: 160px;
    background: var(--secondary-color);
}
.logo {
    height: 150px;
}
header ul{
    position: relative;
    display: flex;
}
.menu-left {
  flex: 2;
}
header ul li{
    position: relative;
    list-style: none;
}
header a{
    position: relative;
    display: inline-block;
    margin: 0 20px;
    color: #fff;
    text-decoration: none;
    font-size: 30px;
}
header.sticky ul li a{
color: #fff;
}

/*  */
/*  */
/*  */

/* The navigation menu */
  /* Navigation links */
  
  /* The subnavigation menu */
  .subnav {
    float: left;
    overflow: hidden;
  }
  
  /* Subnav button */
  .subnav .subnavbtn {
    border: none;
    outline: none;
    color: white;
    margin: 0 20px;
    background-color: inherit;
    font-family: inherit;
    font-size: 30px;
  }
  
  /* Add a red background color to navigation links on hover */
  .header a:hover, .subnav:hover .subnavbtn {
    background: var(--primary-color);
  }
  
  /* Style the subnav content - positioned absolute */
  .subnav-content {
    display: none;
    position: absolute;
    background: var(--primary-color);
    z-index: 1;
  }
  
  /* Style the subnav links */
  .subnav-content a {
    float: left;
    color: white;
    text-decoration: none;
    margin: 10px;
  }
  
  /* Add a grey background color on hover */
  .subnav-content a:hover {
    background-color: #eee;
    color: black;
  }
  
  /* When you move the mouse over the subnav container, open the subnav content */
  .subnav:hover .subnav-content {
    display: block;
  }
</style>

<script>
import { TimelineLite } from 'gsap'
export default { 
  mounted() { 
    const { logo } = this.$refs
    const timeline = new TimelineLite() 
    
    timeline.from(logo, {duration: 2, y: '-100%', ease: 'bounce'})
  } 
} 

// import gsap from 'gsap'

// export default {
//   name: "Header",
//   methods: {
//     function(){
//       gsap.from('.logo', {duration: 2, y: '-100%', ease: 'bounce'})
//     },
//   funtion() {
//     console.log("I hope this works.")
//   }
//   }
// }
</script>