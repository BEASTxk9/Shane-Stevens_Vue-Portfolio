<template>
<Button class="btn-layout b mt-4">
    <a class="text-black fw-6" href="https://docs.google.com/uc?export=download&id=11Hvd4rQPPHObrHz82UbG4-lnOBwt_X0v" target="_blank" download="https://docs.google.com/document/d/e/2PACX-1vRGyaErsl3o1p3Lza7PBa6QXn64JUGcKEao1TtUju-qchykfji6Q0EVnBcg1eK5JA/pub">Download CV</a>
</Button>
</template>

<script>
export default {

}
</script>

<style scoped>
/* button */
button a {
    transition: all 0.s ease-in-out;
    color: rgb(64, 62, 62);
	width: 130px;
}

button a:hover{
    color: rgb(0, 0, 0);
}

button:hover{
    transition: all 0.5s ease-in-out;
 box-shadow: 0px 0px 50px 3px rgba(0, 206, 255, 0.7);
}

.b:before{
    transition: all 0.5s ease-in-out;
	content: ""; 
	width: 0; 
	height: 100%; 
	position: absolute; 
	background-color: rgb(255, 255, 255);
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

.b:hover:before{
	color: rgb(255, 255, 255);
    box-shadow: 12px 31px 37px rgba(0, 0, 0, 0.5);
	width: 100%; 
	left: auto; 
	right: 0;
  
}

.btn-layout, .bttn {		
	display: inline-flex;
	overflow-x: hidden;
	margin: 0 5px 0 0;
    width:130px;		
	position: relative;
	opacity: 0.999;
	padding: 10px 10px;		
	text-align:center;
	color: rgb(255, 255, 255);
    background-image: url("../assets/5c9642165efdd1625cb1d9ae6fb4ef4e-removebg-preview.png");
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