<template>
<section class="about" id="about">
    <div class="heading">
        <h2>About Me</h2>
    </div>
    <div class="content">
        <div class="contentBox">
            <h3>Who I am personaly and professionally</h3>
            <p>I work hard to be successful in all that I do in order to provide for and protect my family. 
                My path up to this point has been an exciting and fulfulling one. It has included becoming a United States Marine;
                two combat deployments to Afghanistan; graduating from the University of Michigan with a bachelor's degree; 
                starting my own Limited Liability Company with a main presence online; becoming a public safety officer; 
                and now discovering the perfect career as a web developer. I am excited to take my drive into this career and
                I don't plan on slowing down anytime soon.</p>
            <br>
            <p>I am an efficiency-driven, goal-oriented professional with problem-solving experience under a vast array 
                of high-pressure environments. A self-starter with excellent communication, organizational and analytical skills. 
                Demonstrated leadership skills, mentoring skills, risk assessment and management, and supervisory experience with 
                a team of 26 personnel in the United States Marine Corps. Exceptional ability to carry out work with minimal 
                supervision, attention to detail and the ability to work under strict deadlines. Strong verbal and written 
                communication skills with the ability to interact with all levels of an organization. 
                I have a great interest in what pushes people to be their best in any situation and I strive to come up with 
                solutions to problems and improve myself and others everyday.</p>
            <br>
            <span>
                <p>DRIVEN / PROBLEM SOLVER / LEADER / QUICK TO ADAPT / FOCUSED / TEAMWORK / INTEGRITY</p>
            </span>

        </div>
        <div class="w50">
            <img src="../assets/images/joe_family.jpg" alt="">
        </div>
    </div>
    <a href="resources/Web Developer Resume 2021.pdf" target="_blank" class="btn">My Resume</a>
</section>
</template>

<style scoped>
.about {
  background: var(--light-color);
}
.heading {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
  text-decoration: none;
}
.heading h2 {
  font-weight: 600;
  font-size: 30px;
}
.content {
  display: flex;
  justify-content: space-between;
}
.contentBox {
  padding: 30px;
}
.contentBox span {
  text-align: center;
}
.contentBox h3 {
  font-size: 24px;
  margin-bottom: 10px;
}
.w50 {
  min-width: 50%;
}
img {
  max-width: 100%;
  border-radius: 10px;
}
.about .btn {
  display: block;
  width: fit-content;
  margin: 0 auto;
}
@media (max-width: 991px) {
  section {
    padding: 100px 50px;
  }
  .banner {
    padding: 150px 50px 100px;
  }
  .banner h2 {
    font-size: 1.5em;
  }
  .banner h3 {
    font-size: 1em;
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
  .services .content .servicesBox {
    margin: 10px;
  }
  .work .content .workBox {
    width: 100%;
    padding: 10px;
  }
  .testimonials .content .testimonialsBox {
    max-width: calc(100% - 20px);
    padding: 40px 20px;
    margin: 10px;
    background: rgb(244, 198, 137);
  }
  .testimonials .content .testimonialsBox h3 {
    margin-top: 20px;
  }
  .contactInfo {
    margin: 20px 0;
  }
}

@media (max-width: 600px) {
  header,
  header.sticky {
    padding: 20px 20px;
    z-index: 1000;
  }
  .banner {
    padding: 150px 20px 100px;
  }
  section {
    padding: 100px 20px;
  }
}
</style>
