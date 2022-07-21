<template>

<section id="header" class="w-100">
<!-- type writer -->
  <div class="container typewriter-container">
    <transition name="slide-right" appear>
	<h1 class="typewriter-text" >
						<a href="#about" class="typewrite text-white" data-period="2000"
							data-type='[ "Hi there,", "Im Shane Stevens,"]'>
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
           <p id="landing-sub2" class="h5 py-5">DISCIPLINED <img src="https://i.postimg.cc/rsGPYxWd/noun-naruto-3129058.png"
							width="30px" height="30px">
						DEDICATED <img src="https://i.postimg.cc/rsGPYxWd/noun-naruto-3129058.png" width="30px" height="30px">
						DIFFERENT</p>
    </transition>
 
</div>
</div>



</section>

</template>

<script>
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
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

export default{}
</script>

<style>
#header {
    color: white;
  overflow-x: hidden;
  z-index: 1;
  position: relative;
  background-image: url("https://images6.alphacoders.com/775/775269.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 30vh;
  height: 100vh;
}

img{
    color: white;
}

@media only screen and (max-width: 790px){
	#header{
        width: auto;
        overflow-x: hidden;
    }
}
</style>