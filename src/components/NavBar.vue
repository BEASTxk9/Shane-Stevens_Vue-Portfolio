<template>
  <!-- sticky-navbar -->
  <nav class="navbar sticky-top">
    <div>
     
    </div>
    <!-- button -->
    <button
      class="navbar-toggler b1 text-white bg-dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
    >
      <span
        ><i id="icon" class="fa-solid fa-bars"></i></span>
    </button>

    <!-- button content -->
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav">
        <!-- links -->
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5 " href="#header">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5 " href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5 " href="#resume">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5 " href="#testimonial">Testimonial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5" href="#contact">Contact</a>
                        </li>
                    </ul>

        <div class="text-end py-1">
          <p>&copy;Made by Shane Stevens,2022</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
	position: sticky;
  font-size: large;
  opacity: 5px;
  transition: all 0.5s ease-in-out;
}

nav:hover{
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.4px);
-webkit-backdrop-filter: blur(5.4px);
font-size: 2rem;
}

nav a {
	text-align: center;
	justify-content: center;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.897);
  text-decoration: line-through rgba(0, 0, 0, 0.489);
  transition: all 0.4 ease-in-out;
}

nav a:hover {
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.4px);
-webkit-backdrop-filter: blur(5.4px);
	text-align: center;
	justify-content: center;
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

#icon{
  font-size: 2rem;
}

.navbar-toggler{
  outline: none;
}

</style>
