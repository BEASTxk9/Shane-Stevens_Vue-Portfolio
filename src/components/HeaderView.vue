<template>
  <section id="header" class="w-100" defer>
    <!-- type writer -->
    <div class="container typewriter-container">
      <transition name="slide-right" appear>
        <h1 class="typewriter-text">
          <a
            href="#about"
            class="typewrite text-white"
            data-period="2500"
            data-type='[ "Hi there,", "Im Shane Stevens,"]'
          >
          </a>
        </h1>
      </transition>
    </div>
    <!-- subheading -->
    <div class="container mt-3">

      <div class="row">
        <transition name="fade" appear>
          <h2>Aspiring Web Developer & Designer</h2>
        </transition>
      </div>

      <div class="row">
        <transition name="slide-left" appear>
          <p id="landing-sub2" class="h5 py-5">
            DISCIPLINED
            <img
              src="https://i.postimg.cc/rsGPYxWd/noun-naruto-3129058.png"
              width="30px"
              height="30px"
            />
            DEDICATED
            <img
              src="https://i.postimg.cc/rsGPYxWd/noun-naruto-3129058.png"
              width="30px"
              height="30px"
            />
            DIFFERENT
          </p>
        </transition>
      </div>

<div class="row justify-content-center text-center">
<div class="col-2">
    <transition name="fade" appear>
<a class="a1" href="#about">Read More.</a>
    </transition>
</div>
</div>

    </div>
  </section>
</template>

<script>
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
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

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

export default {};
</script>

<style>
#header {
    position: fixed;
  color: white;
  overflow-x: hidden;
  z-index: -1;
  background-image: url("https://images6.alphacoders.com/775/775269.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 30vh;
  height: 100vh;

  font-size: 3rem;
}

img {
  color: white;
}

.typewrite {
  font-size: 7rem;
  text-decoration: none;
}

.a1{
    text-align: center;
    font-size: 1rem;
     font-size: 1rem;
    transition: all 0.s ease-in-out;
    color: rgb(64, 62, 62);
}

.a1:hover{
    color: rgb(0, 0, 0);
}

.a1:hover{
    transition: all 0.5s ease-in-out;
 box-shadow: 0px 0px 50px 3px rgba(0, 206, 255, 0.7);
}

.a1:before{
    transition: all 0.5s ease-in-out;
	content: ""; 
	width: 0; 
	height: 100%; 
	position: absolute; 
	background-color: rgb(255, 255, 255);
	color: rgb(0, 0, 0);
	left: 0; 
	top: 0; 
	transition: 0.5s;
	-webkit-transition: 0.5s;
	-moz-transition: 0.5s;
	-ms-transition: 0.5s;
	-o-transition: 0.5s; 
	z-index: -1;
}

.a1:hover:before{
	color: rgb(255, 255, 255);
    box-shadow: 12px 31px 37px rgba(0, 0, 0, 0.5);
	width: 100%; 
	left: auto; 
	right: 0;
  
}

.a1 {	
	box-shadow: 10px 10px 27px rgba(0, 0, 0, 0.4);	
	display: inline-flex;
	overflow-x: hidden;
	margin: 0 5px 0 0;
    width:110px;		
	position: relative;
	opacity: 0.999;
	padding: 10px 10px;		
	text-align:center;
	color: rgb(255, 255, 255);
    background-image: url("../assets/5c9642165efdd1625cb1d9ae6fb4ef4e-removebg-preview.png");
    background-repeat: no-repeat;
	border-radius:3px;		
	border: none;
	-moz-transition: 0.3s;
	-ms-transition: 0.3s;
	-o-transition: 0.3s;
	-webkit-transition: 0.3s;
    transition: 0.3s;
	overflow:hidden;
    position: relative;
    top: -3rem; 
}

@media only screen and (max-width: 790px) {
  #header {
    width: auto;
    overflow-x: hidden;
  }
}
</style>
