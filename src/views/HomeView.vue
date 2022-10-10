<template>
<!-- Main -->
<main>
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

export default {

  name: 'HomeView',
  components: {
    About,
    Resume,
    Testimonial,
    Projects,
    Contact,
    HeaderView
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
  opacity: 0.5;
}
#myBtn:hover {
  background-color: rgb(0, 0, 0);
  transform: scaleY(10px);
  transform: scale(1.3);
  opacity: 1;
}
</style>
