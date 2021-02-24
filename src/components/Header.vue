<template>
    <header>
        <div class="toggle" onclick="toggleMenu();"></div>
        <ul class="menu-left">
            <li><a href="index.html" onclick="toggleMenu();">Home</a></li>
            <li><a href="#about" onclick="toggleMenu();">About</a></li>
        </ul>
            <a href="#home" class="logo">
                <img id="logo" src="../assets/images/logo-white.png" alt="logo">
            </a>
        <ul class="menu-right">
            <div class="subnav">
                <button class="subnavbtn">Portfolio<i class="fa fa-caret-down"></i></button>
                <div class="subnav-content">
                  <a href="airbrush.html">Airbrush</a>
                  <a href="#tattoo">Tattoo</a>
                </div>
            </div>
            <li><a href="#testimonials" onclick="toggleMenu();">Testimonials</a></li>
            <a href="#contact" onclick="toggleMenu();" class="btn">Contact</a>
            <!-- <li><a href="#contact" onclick="toggleMenu();">Contact</a></li> -->
        </ul>
    </header>
</template>

<style scoped>
#logo {
    width: 160px;
}
header{
    position: relative;
    top: 0;
    width: 100%;
    padding: 40px 100px;
    z-index: 1000;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;
    text-align: center;
    background: rgb(77, 74, 74, .9) ;

}

header.sticky{
    background: rgb(77, 74, 74, .9) ;
    padding: 10px 100px;
    box-shadow: 0 5px 20px rgba(0,0,0,0,0.1);
}
header.sticky .logo{
    color: #111;
    width: 132px;
    transition: 2.5s;
}
header ul{
    position: relative;
    display: flex;
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
export default {
    // Sticky Banner JavaScript

// window.addEventListener('scroll', function(){
//     var header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 0);
// });

// function toggleMenu(){
//     var menuToggle = document.querySelector('.toggle');
//     var menu = document.querySelector('.menu');
//     menuToggle.classList.toggle('active')
//     menu.classList.toggle('active')
}
</script>