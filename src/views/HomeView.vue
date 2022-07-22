<template>
<!-- Main -->
<main>
<!-- About -->
<About></About>
<!-- Resume -->
<Resume></Resume>
<!-- Testimonial -->
<Testimonial></Testimonial>
<!-- Projeccts -->
<Projects></Projects>
<!-- Contact -->
<Contact></Contact>

</main>

</template>

<script>
// @ is an alias to /src
import About from "../components/AboutView.vue";
import Resume from "../components/ResumeView.vue";
import Testimonial from "../components/TestimonialView.vue";
import Projects from "../components/ProjectsView.vue";
import Contact from "../components/ContactView.vue";

export default {
  name: 'HomeView',
  components: {
About,
    Resume,
 Testimonial,
 Projects,
 Contact
  }
}
</script>

<style scoped>


</style>
