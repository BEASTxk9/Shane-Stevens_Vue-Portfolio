<template>
<!-- Header -->
<Header></Header>

<!-- NAV -->
<Nav></Nav>

<!-- DATA -->
  <router-view></router-view>

<!-- footer -->
  <footer>
    <div class="bg-dark text-white py-1">
      <p>Copyrights &copy; Made By Shane Stevens, 2022</p>
    </div>
  </footer>

</template>

<script>
import Nav from "./components/NavBar.vue";
import Header from "./components/HeaderView.vue";

export default{
  components: {
    Nav,
    Header
  }
};
</script>

<style>


/* html skeleton */
body{
  background-color: white;
  color: black;
    scroll-behavior: smooth;
    font-family: 'IBM Plex Mono', monospace;
}

main{
  font-size: 1rem;
}

footer{
  font-size: 1rem;
}

#app {
  font-family: "IBM Plex Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  scroll-behavior: smooth;
}

/* scroll */
/* width */
::-webkit-scrollbar {
    width: 100%;
    background-color: transparent;
}


/* headings */
.heading {
  font-weight: 1000;
  border-bottom: 1.8px solid rgba(0, 0, 0, 0.619);
  text-shadow: 5px 8px 7px rgba(0, 0, 0, 0.637);
}

#subheading {
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-weight: 900;
  text-shadow: 5px 8px 7px rgba(255, 255, 255, 0.637);
  text-decoration: 1.5px underline;
}

#HEADING-TEXT{
  position: relative;
  left: -4rem;
}


/* button2 */
.b2:before{
  text-align: center;
    transition: all 0.5s ease-in-out;
	content: ""; 
	width: 0; 
	height: 100%; 
	position: absolute; 
	background-color: rgb(0, 0, 0);
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

.b2:hover:before{
	color: rgb(255, 255, 255);
    box-shadow: 12px 31px 37px rgba(255, 255, 255, 0.5);
	width: 100%; 
	left: auto; 
	right: 0;
  
}

.btn-layout2, .bttn2 {	
  text-align: center;	
	display: inline-flex;
	margin: 0 5px 0 0;		
	position: relative;
	opacity: 0.999;
	padding: 10px 10px;		
	text-align:center;
	color: rgb(0, 0, 0);
	border-radius:3px;		
	border: none;
	-moz-transition: 0.3s;
	-ms-transition: 0.3s;
	-o-transition: 0.3s;
	-webkit-transition: 0.3s;
    transition: 0.3s;
	overflow:hidden; 
}

.btn-layout2:hover{
    color: rgb(255, 255, 255);
  transition: all 0.5s ease-in-out;
 box-shadow: 0px 0px 50px 3px rgba(0, 206, 255, 0.7);
}

/* AOS-"LIKE" EFFECT */
.slide-right-enter-from{
    opacity: 0;
    transform: translateX(-1500px);
}
.slide-right-enter-to{
    opacity: 1;
    transform: translateX(0px);
}
.slide-right-enter-active{
    transition: all 2s ease;
}
.slide-left-enter-from{
    opacity: 0;
    transform: translateX(1500px);
}
.slide-left-enter-to{
    opacity: 1;
    transform: translateX(0px);
}
.slide-left-enter-active{
    transition: all 2s ease;
}
.fade-enter-from{
    opacity: 0;
    transform: scale(0.1);
}
.fade-enter-to{
    opacity: 1;
    transform: scale(1);
}
.fade-enter-active{
    transition: all 2s ease;
}

@media only screen and (max-width: 790px) {
#HEADING-TEXT{
  position: relative;
  left: 0;
}
}
</style>
