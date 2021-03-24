<template>
  <div class="social" id="social">
    <div class="content">
      <div class="contactBox">
        <a href="mailto:fernettejs@gmail.com" target="_blank">
          <img src="../assets/images/icon_email.png" alt="" />
        </a>
      </div>
      <div class="contactBox">
        <a href="https://github.com/Fernettejs" target="_blank">
          <img src="../assets/images/icon_github.png" alt="" />
        </a>
      </div>
      <div class="contactBox">
        <a href="https://www.linkedin.com/in/joe-fernette/" target="_blank">
          <img src="../assets/images/icon_linkedin.png" alt="" />
        </a>
      </div>
      <div class="contactBox">
        <a href="https://twitter.com/JoeFernette" target="_blank">
          <img src="../assets/images/icon_twitter.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact .content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;
}
.contactBox,
img {
  height: 36px;
  width: 36px;
  border-radius: 100%;
  display: inline-block;
}
.contactBox {
  margin: 10px;
}
.contactText {
  transition: 0.5s ease;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
}

.contact img:hover {
  border-radius: 100%;
  transform: scale(1.05);
  transition: 0.2s ease-in-out;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.25);
}
</style>
