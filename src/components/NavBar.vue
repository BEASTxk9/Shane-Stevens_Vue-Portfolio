<template>
  <!-- sticky-navbar -->
  <nav class="navbar sticky-top">
    <div>
      	<div class="waviy">
					<a class="logo">
						<span style="--i:1"><i class="fa-solid fa-house"></i></span>
						<span style="--i:2">Shane Stevens</span>
						<span style="--i:3"><i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3"></i></span>
					</a>
				</div>
     
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
                            <a class="nav-link mb-0 h5 " href="#about">01-About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5 " href="#resume">02-Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5 " href="#testimonial">03-Testimonial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5" href="#projects">04-Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 h5" href="#contact">05-Contact</a>
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
.collapse{
  transition: all 0.2s ease-in-out;
  position: relative;
  top: -3rem;
 background: rgba(255, 255, 255, 0.514);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.4px);
-webkit-backdrop-filter: blur(5.4px);
}

nav {
	position: sticky;
  opacity: 5px;
  transition: all 0.5s ease-in-out;
}

nav a {
  font-size: 1.5rem;
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
  text-shadow: 5px 5px 5px rgba(14, 227, 247, 1);
}

a{
  margin-top: 1rem;
  margin-left: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  text-align: center;
  width: fit-content;
}

#icon{
  font-size: 2rem;
}

.navbar-toggler{
  outline: none;
}

/* .navspin */

.waviy {
    position: relative;
}

.waviy span {
    position: relative;
    display: inline-block;
    font-size: 20px;
    text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.781);
    color: rgba(0, 0, 0, 0.9);
    text-transform: uppercase;
    animation: flip 3s ease-in-out infinite;
    animation-delay: calc(.4s * var(--i))
}

@keyframes flip {

    0%,
    80% {
        transform: rotateY(360deg)
    }
}


</style>
