<template>
    <section class="about" id="about">
        <div class="content">
            <div class="w50">
                <img src="../assets/images/TableTop.jpg" class="img" alt="">
            </div>
            <div class="contentBox">
                <div class="heading">
                    <h2>The Artist</h2>
                </div>
            </div>
        </div>
        <section class="social" id="social">
            <div class="content">
                <div class="social-box" id="youtube-box">
                    <a href="https://www.youtube.com/channel/UCsp7n4jSu-uMAbMqL-QHJ9A" target="_blank">
                        <img src="../assets/images/youtube-icon.png" alt="">
                    </a>
                </div>
                <div class="social-box" id="ig-box">
                    <a href="https://www.instagram.com/devildog_inkandpaintllc/" target="_blank">
                        <img src="../assets/images/ig-icon.png" alt="">
                    </a>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
.about{
    background: var(--secondary-color);
}
.about .img{
    border: 3px solid white;
    border-radius: 5px;
}
.heading{
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    color: #fff;
    text-decoration: none;
    border: 3px solid white;
    border-radius: 5px;
}
.heading h2{
    font-weight: 600;
    font-size: 30px;    
}
.content{
    display: flex;
    justify-content: space-between;
}
.contentBox{
    padding: 30px;
    display: inline;
    background: var(--blue-color);
    border: 3px solid white;
    border-radius: 5px;

}
.contentBox h3{
    font-size: 24px;
    margin-bottom: 10px;
}
.w50{
    min-width: 40%;
    display: inline;
}
img{
    max-width: 100%;
}
#the-artist {
    font-size: 1.2em;
}

/*  */
/* SOCIAL MEDIA */
/*  */

.social .content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: var(--secondary-color);
    margin-top: -50px;
    border: 3px solid white;
    border-radius: 5px;
    padding: 20px;
}
.social-box{
    height: 100px;
    width: 100px;
    border-radius: 100px;
    background-color: var(--secondary-color);
    display: block;
}
.social-box:hover{
    transition: .2s ease-in-out;
    height: 120px;
    width: 120px;
    border-radius: 100px;
    background-color: var(--primary-color);
    display: block;
}

.social img {
    filter: invert(100%);
}

@media (max-width: 991px){
    
    section{
        padding: 100px 50px;
    }
    .banner{
        padding: 150px 50px 100px;
    }
    .banner h2{
        font-size: 1.5em;
    }
    .banner h3{
        font-size: 1em;
    }
    .btn{
        margin: 10px;
        padding: 10px 20px;
        font-size: 16px;
    }
    .heading h2{
        font-weight: 600;
        font-size: 24px;
    }
    .contentBox h3{
        font-size: 20px;
    }
    .content{
        flex-direction: column;
    }
    .w50{
        margin-bottom: 20px;
    }
    .services .content .servicesBox{
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
        background: rgb(244,198, 137);
    }
        .testimonials .content .testimonialsBox h3 {
            margin-top: 20px;
    }
    .contactInfo {
        margin: 20px 0;
    }
}

@media (max-width:600px){
    header,
    header.sticky{
        padding: 20px 20px;
        z-index: 1000;
    }
    .banner{
        padding: 150px 20px 100px;
    }
    section{
        padding: 100px 20px;
    }
}
</style>