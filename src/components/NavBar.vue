<template>
  <!-- sticky-navbar -->
  <nav class="navbar sticky-top">
    <div>
      	<div class="waviy">
					<a href="#" class="logo">
						<span style="--i:1"><i class="fa-solid fa-house"></i></span>
						<span style="--i:2">Shane Stevens</span>
						<span style="--i:3"><i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3"></i></span>
					</a>
				</div>
     
    </div>
    <!-- button -->
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i id="burger" class="fa-solid fa-bars"></i></button>

    <!-- button content -->

    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h1 id="offcanvasTopLabel" class="text-bold px-4">MENU</h1>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
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
  </div>
<hr id="nav-rights">
  <div id="nav-rights" class="container">
<div class="row justify-content-center">
   <div class="col-sm-12 text-center py-1">
          <p>Copyright &copy; 2022 All Rights Reserved by 
         Shane Stevens.</p>
        </div>

</div>
  </div>

   
</div>
  </nav>

  
</template>

<script>
export default {};
</script>

<style scoped>
.offcanvas{
height: fit-content;
overflow-x: hidden;
}

nav {
	position: sticky;
  transition: all 0.5s ease-in-out;
}

a{
  color: black;
  text-decoration: line-through;
  margin-top: 1rem;
  margin-left: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  text-align: center;
  width: fit-content;
}

a:active{
  text-decoration: none;
  color: rgb(56, 56, 56);
}

a:hover{
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: black;
}

#icon{
  font-size: 2rem;
}

#burger{
  font-size: 2rem;
}

.navbar-toggler{
  outline: none;
  margin-right: 5px;
}

/* .navspin */

.waviy {
    position: relative;
    left: -1rem;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
    background: transparent;
}

.waviy:hover{
  opacity: 1;
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

@media only screen and (max-width: 1000px){
.waviy {
    display: none;
}

.navbar-toggler{
  margin-right: 5px;
}

#nav-rights{
  display: none;
}
}
</style>
