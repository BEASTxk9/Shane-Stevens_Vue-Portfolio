<template>
<section id="testimonial">

<!-- heading -->
      <div class="container text-center">
        <div class="heading mx-5 py-1 row justify-content-center text-center">
       
          <div class="col-md-2 col-sm-1">
               <transition name="fade" appear>
  <h2 class="btn-layout2 b2">03-</h2>
               </transition>
          
          </div>
          <div class="col-md-10 col-sm-8">
            <transition name="fade" appear>
                <h2 id="HEADING-TEXT">TESTIMONIAL</h2>
               </transition>
            
          </div>
        </div>
      </div>

<div class="container">
    <div class="row">

<div class="home-demo">
  <div class="owl-carousel owl-theme">
    <div id="card" class="item" v-for="item of TestimonialsArray" :key="item.id">
<div class="container">
   <div class="row justify-content-center">
    <div class="col-md-8 col-sm-6">
      <img class=" py-3"  :src="item.image" :alt="item.name">
      </div>
      </div>
</div>
 
                <h4>{{ item.name }}</h4>
                <p>{{ item.title }}</p>
                <h6>{{ item.text }}</h6>
    </div>
  </div>
</div>

    </div>
</div>

    </section>
</template>

<script>
export default {
    name: 'Testimonials',
    data() {
        return {
            "TestimonialsArray": [
                {
                    "id": 1,
                    "image": "https://i.postimg.cc/hvCpWRbV/godwin-2-removebg-preview.png",
                    "name": "Godwin Dzvapatsva",
                    "title": "{Head of Curriculum and Learning}",
                    "text": "Shane is a diligent student who pays particular attention to detail. He is one of our top students in the academy. His mastery of HTML, CSS and Bootsrap has proved him to be among the prospective top developers. His work ethics are above board. I highly recommend him for any opportunities within your organisation."
                },
                {
                    "id": 2,
                    "image": "https://i.postimg.cc/HsVtcK9P/joel2-removebg-preview.png",
                    "name": "Joel Mukanya.",
                    "title": "{Coding Lecturer}",
                    "text": "Shane should be happy with his progress and understanding of the lesson content as he is doing very well. Shane has proven to have a detailed grasp of the HTML,CSS & Bootstrap material we have been studying. He is an expert at describing what he has done and what he has found out."
                },
                {
                    "id": 3,
                    "image": "https://i.postimg.cc/y8NCZ7bC/monique-removebg-preview.png",
                    "name": "Monique Dampies.",
                    "title": "{Colleague}",
                    "text": "Shane has a natural ability to solve problems and find unique routes to the solution. He never backs down in the face of any technical issues. I will recommend Shane to any team as he is always willing to assist the next person facing an issue. His ability to understand new information will make him a great asset to any company.Monique is a talented individual. With great initiative, she works hard and strives to make the best work possible. I would highly recommend her to any team."
                },
                {
                    "id": 4,
                    "image": "https://i.postimg.cc/Gp5L24Lf/Whatsapp-removebg-preview.png",
                    "name": "Marshalino Jankowski.",
                    "title": "{Colleague}",
                    "text": "Shane is a natural born leader who has earned everyone's respect through his brilliance when it comes to code. He has offered his assistance to everyone when they require it. He is destined for great things in the world of code and anyone alongside him shall succeed"
                },
                {
                    "id": 5,
                    "image": "https://i.postimg.cc/pLS45zjK/Jared-2-removebg-preview.png",
                    "name": "Jared Isaacs.",
                    "title": "{Colleague}",
                    "text": "Shane is an outgoing, hardworking, creative web developer. Who	sets out to achieve his goals through perseverance and determination. As his colleague I see a bright future filled with prosperity being set in front of him, with his iron will to overcome any impediments that comes he way. As such he has the set skills to fulfill any task that will be given to him, making him a great asset to any business or company."
                },
                {
                    "id": 6,
                    "image": "https://i.postimg.cc/xdcQW9v3/Reagan1-removebg-preview.png",
                    "name": "Reagan Carolussen .",
                    "title": "{Colleague}",
                    "text": "Shane always shows the best qualities, such as being fast learning, hardworking individual that always displays great understanding of any topic he is presented with. it is with these qualities that I recommend Shane Stevens"
                }
            ]
        }

    },
    mounted() {
        this.$refs.owl.owlCarousel({
            autoplay: true,
            loop: true,
            dots: false,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                800: {
                    items: 2,
                    nav: false,
                    dots: false
                },
                1000: {
                    items: 3,
                    nav: false,
                    dots: false
                }
            }
        });
    },
}



</script>

<style scoped>
#card {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  border-left: 2px solid rgb(54, 122, 182);
  height: 36rem;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: all 0.5s ease-in-out;
}

#card:hover {
  box-shadow: 10px 10px 20px rgba(255, 255, 255, 0.692);
}

#testimonial{
  z-index: 1;
  height: 100vh;
  padding-top: 3rem;
  scroll-margin-block-start: 23.7rem;

}

img{
      transition: all 0.3s ease-in-out;
  -webkit-filter: grayscale(80%);
  filter: grayscale(80%);
  height: 36vh;
  border-radius: 360px;
}

img:hover{
    background-color: antiquewhite;
      -webkit-filter: grayscale(0%); 
  filter: grayscale(0%);
}

.owl-carousel{

  
    padding-top: 3rem;
overflow-x: hidden;

}

@media only screen and (max-width: 790px){
#testimonial{
  padding-bottom: 47rem;
}

#card{
  height: 42rem;
}
}


</style>