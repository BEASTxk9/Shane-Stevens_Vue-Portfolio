<template>
    <section id="header" class="showcase w-100" defer>
    <!-- background-vid -->
<div class="video-container">
<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;" autoplay><iframe src="https://streamable.com/e/pe9vjl?autoplay=1&nocontrols=1" frameborder="0" allowfullscreen autoplay loop allow="autoplay loop" style="position:absolute;left:0px;top:0px;overflow:hidden;" defer></iframe></div>
  
	</div>

    <HeaderView></HeaderView>
    </section>
</template>

<script>
import HeaderView from './HeaderView.vue';
export default {
    components: { HeaderView }
}
</script>

<style scoped>
/* landing */
.showcase {
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 0 20px;
}

.video-container {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    overflow: hidden;
}

iframe{
margin-top: -10vh;
height: 100%;
width: 100%;
}

.video-container{
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}

.video-container:after {
    content: '';
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
}



@media only screen and (max-width: 1250px) {
  #header {
    width: auto;
    overflow-x: hidden;
  }

  .typewrite{
    font-size: 3rem;
  }

  iframe{
    width: 400%;
    height: 400%;
  }
}
</style>