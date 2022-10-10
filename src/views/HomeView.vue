<template>
<!-- Main -->
<main>
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

</style>
