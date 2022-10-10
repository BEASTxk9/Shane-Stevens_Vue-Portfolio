<template>
  <section >
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


<!-- Main -->
<main>
  <NavBar></NavBar>
  <div class="row justify-content-end">
    <button
      onclick="topFunction()"
      id="myBtn"
      class="rounded-pill fixed-bottom"
      title="Auto Scroll Top."
    >
      <i class="fa-solid fa-chevron-up"></i>
    </button>
  </div>
<!-- About -->

<About />
<!-- Resume -->
<!-- <div id="resume"></div> -->
<Resume />
<!-- Testimonial -->
<Testimonial />
<!-- Projeccts -->
<!-- <div id="projects"></div> -->
<Projects />
<!-- Contact -->
<!-- <div id="contact"></div> -->
<Contact />


</main>

</template>

<script>
// @ is an alias to /src
import About from "../components/AboutView.vue";
import Resume from "../components/ResumeView.vue";
import Testimonial from "../components/TestimonialView.vue";
import Projects from "../components/ProjectsView.vue";
import Contact from "../components/ContactView.vue";
import HeaderView from "@/components/HeaderView.vue";
import NavBar from "@/components/NavBar.vue";

export default {

  name: 'HomeView',
  components: {
    About,
    Resume,
    Testimonial,
    Projects,
    Contact,
    HeaderView,
    NavBar
}
}
</script>

<style scoped>
/* auto scroll top */
#myBtn {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  width: 49px;
  justify-content: end;
  align-content: flex-end;
  text-align: end;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(0, 0, 0);
  transition: all 0.3s ease-in-out;
  left: 10px;
  box-shadow: 0px 0px 42px rgb(18, 172, 183);
  opacity: 0.2;
}
#myBtn:hover {
  background-color: rgb(0, 0, 0);
  transform: scaleY(10px);
  transform: scale(1.3);
  opacity: 1;
}

#data{
  color: white;
    position: relative;
    top: 5rem;
text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.882);
}

.typewriter-text, a{
  font-size: 5rem;
  text-decoration: none;
}
</style>
