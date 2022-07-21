<template>
  <!-- sticky-navbar -->
  <nav class="navbar sticky-top">
    <div>
     
    </div>
    <!-- button -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
    >
      <span
        ><img src="https://img.icons8.com/ios/50/000000/menu-squared-2--v1.png"
      /></span>
    </button>

    <!-- button content -->
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav">
        <!-- links -->
        <router-link class="" to="/"
          >01-Home<i class="fa-solid fa-house"></i
        ></router-link>

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
  transition: all 0.8s ease-in-out;
}

nav:hover {
  color: rgb(255, 255, 255);
}

nav a {
	text-align: center;
	justify-content: center;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.897);
  transition: all 0.4 ease-in-out;
}

nav a.router-link-exact-active {
	text-align: center;
	justify-content: center;
  color: red;
  transition: all 0.4 ease-in-out;
}

a:hover {
	text-align: center;
	justify-content: center;
  color: rgb(255, 255, 255);
}

.a:hover:before{
	text-align: center;
	justify-content: center;
	align-content: center;
	color: rgb(255, 255, 255);
    box-shadow: 12px 31px 37px rgba(0, 0, 0, 0.5);
	width: 100%; 
	left: auto; 
	right: 0;
  
}

.a:before{
	text-align: center;
	justify-content: center;
    transition: all 0.5s ease-in-out;
	content: ""; 
	width: 0; 
	height: 100%; 
	position: absolute; 
	border-bottom: 1px solid white;
	color: rgb(255, 255, 255);
	left: 0; 
	top: 0; 
	transition: 0.5s;
	-webkit-transition: 0.5s;
	-moz-transition: 0.5s;
	-ms-transition: 0.5s;
	-o-transition: 0.5s; 
	z-index: -1;
}

.a-layout, .a {		
	justify-content: center;
	text-align: center;
	display: inline-flex;
	margin: 0 5px 0 0;
    width:130px;		
	position: relative;
	opacity: 0.999;
	padding: 10px 10px;		
	text-align:center;
	color: rgb(255, 255, 255);
    background-repeat: no-repeat;
	border-radius:3px;		
	border: none;
	-moz-transition: 0.3s;
	-ms-transition: 0.3s;
	-o-transition: 0.3s;
	-webkit-transition: 0.3s;
    transition: 0.3s;
	overflow:hidden;
    position: relative;
    top: -3rem; 
}


</style>
