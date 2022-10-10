<template>
  <section id="header" class="showcase w-100" defer>
    <!-- background-vid -->
<div class="video-container">
<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;" autoplay><iframe src="https://streamable.com/e/pe9vjl?autoplay=1&nocontrols=1" frameborder="0" allowfullscreen autoplay loop allow="autoplay loop" style="position:absolute;left:0px;top:0px;overflow:hidden;" defer></iframe></div>
  
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

<style scoped>

#header {
    position: fixed;
  overflow-x: hidden;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 30vh;
  height: 100vh;
}

img {
  color: white;
}

.typewrite {
  font-size: 7rem;
  text-decoration: none;
}

/* landing */
.showcase {
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 0 20px;
}

.video-container {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    overflow: hidden;
}

iframe{
margin-top: -10vh;
height: 100%;
width: 100%;
}

.video-container{
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}

.video-container:after {
    content: '';
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
}



@media only screen and (max-width: 1250px) {
  #header {
    width: auto;
    overflow-x: hidden;
  }

  .typewrite{
    font-size: 3rem;
  }

  iframe{
    width: 400%;
    height: 400%;
  }
}
</style>
