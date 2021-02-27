<template>
    <section class="banner center" id="home">
            <h1>DEVILDOG INK & PAINT llc.</h1>
                <h4>Custom Art Studio</h4>
                <a href="#contact" class="btn">Get some shit done</a>
    </section>
</template>

<style scoped>
.banner {
    position: relative;
    min-height: 100vh;
    background: 
    /* top, transparent red, faked with gradient */ 
    linear-gradient(
      rgba(0, 0, 0, 0.55), 
      rgba(0, 0, 0, 0.55)
    ), url(../assets/images/banner.jpg
    );
    background-size: cover;
    background-position: center;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 2px solid var(--primary-color);
}

.banner:hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    -webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
}

.text-box{
    align-items: center;
    text-align: center;
}

.banner h1{
    font-size: 4em;
    color: #fff;
    font-weight: 500;
    line-height: 1.2em;
    margin-top: 300px;
}

.banner h4 {
    font-size: 1.2em;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
}

.btn{
    position: relative;
    background: linear-gradient(to bottom, #a90329 0%,#8f0222 44%,#6d0019 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    /* background: var(--primary-color); */
    display: inline-block;
    color: #fff;
    margin-top: 20px;
    padding: 10px 30px;
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
}
</style>