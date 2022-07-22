<template>
  <section id="header" class="showcase w-100" defer>
    <!-- background-vid -->
<div class="video-container">
				<video src="https://cdn.pixabay.com/vimeo/390688175/Winter%20-%2032184.mp4?width=1280&expiry=1658492328&hash=e7274363acb30e765c66f147de614bb561149ae3" autoplay muted loop></video>
			</div>
<!-- data -->
<div id="data" class="container">
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
    <div class="container">

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
<h4 >SCROLL DOWN</h4>
    </transition>
</div>
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
  background-image: url("https://i.postimg.cc/vmpSLmHw/Wallpaper-Dog-10918942-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 30vh;
  height: 100vh;

  font-size: 3rem;
}

#data{
    position: relative;
    top: -5rem;
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

.video-container video {
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

@media only screen and (max-width: 790px) {
  #header {
    width: auto;
    overflow-x: hidden;
  }
}
</style>
