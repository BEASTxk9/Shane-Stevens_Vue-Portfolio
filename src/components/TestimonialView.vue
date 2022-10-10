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
    <div class="col-md-9 col-sm-10">

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-12">
            <img class="my-1"  :src="item.image" :alt="item.name">
          </div>
        </div>
      </div>
    
      </div>
      </div>
</div>
 
                <h3>{{ item.name }}</h3>
                <h4>{{ item.title }}</h4>
                <p>"{{ item.text }}"</p>
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
                    "image": "https://i.postimg.cc/CK71cczY/godwin-2-1.jpg",
                    "name": "Godwin Dzvapatsva",
                    "title": "Head of Curriculum and Learning",
                    "text": "Shane is a diligent student who pays particular attention to detail. He is one of our top students in the academy. His mastery of HTML, CSS and Bootsrap has proved him to be among the prospective top developers. His work ethics are above board. I highly recommend him for any opportunities within your organisation."
                },
                {
                    "id": 2,
                    "image": "https://i.postimg.cc/2897KxLQ/joel2.jpg",
                    "name": "Joel Mukanya",
                    "title": "Coding Lecturer",
                    "text": "Shane should be happy with his progress and understanding of the lesson content as he is doing very well. Shane has proven to have a detailed grasp of the HTML,CSS & Bootstrap material we have been studying. He is an expert at describing what he has done and what he has found out."
                },
                {
                    "id": 3,
                    "image": "https://i.postimg.cc/W1JgfcvV/monique.jpg",
                    "name": "Monique Dampies",
                    "title": "Colleague",
                    "text": "Shane has a natural ability to solve problems and find unique routes to the solution. He never backs down in the face of any technical issues. I will recommend Shane to any team as he is always willing to assist the next person facing an issue. His ability to understand new information will make him a great asset to any company.Monique is a talented individual. With great initiative, she works hard and strives to make the best work possible. I would highly recommend her to any team."
                },
                {
                    "id": 4,
                    "image": "https://i.postimg.cc/Jn3QYVj0/Whatsapp.jpg",
                    "name": "Marshalino Jankowski",
                    "title": "Colleague",
                    "text": "Shane is a natural born leader who has earned everyone's respect through his brilliance when it comes to code. He has offered his assistance to everyone when they require it. He is destined for great things in the world of code and anyone alongside him shall succeed"
                },
                {
                    "id": 5,
                    "image": "https://i.postimg.cc/Z5h5ZGN4/Jared-2.jpg",
                    "name": "Jared Isaacs",
                    "title": "Colleague",
                    "text": "Shane is an outgoing, hardworking, creative web developer. Who	sets out to achieve his goals through perseverance and determination. As his colleague I see a bright future filled with prosperity being set in front of him, with his iron will to overcome any impediments that comes he way. As such he has the set skills to fulfill any task that will be given to him, making him a great asset to any business or company."
                },
                {
                    "id": 6,
                    "image": "https://i.postimg.cc/wBwqX3Gj/Reagan1.jpg",
                    "name": "Reagan Carolussen",
                    "title": "Colleague",
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
  height: 35rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: all 0.5s ease-in-out;
  font-size: 0.5rem;
}

#testimonial{
  z-index: 1;
  padding-top: 3rem;
  padding-bottom: 1rem;
  scroll-margin-block-start: 19.7rem;

}

img{
  transition: all 0.3s ease-in-out;
  -webkit-filter: grayscale(80%);
  filter: grayscale(80%);
  height: 30vh;
  border-radius: 360px;
  opacity: 0.9;
  padding-bottom: 10px;
}

img:hover{
  opacity: 1;
}

.owl-carousel{

  
    padding-top: 3rem;
overflow-x: hidden;

}

h3, h4{
  font-weight: bold;
}

h4{
  color: rgb(91, 173, 173);
}

p{
  text-align: start;
  font-size: 0.82rem;
  font-weight: 300;
}

@media only screen and (max-width: 767px){
#testimonial{
  padding-bottom: 47rem;
}

#card{
  height: 42rem;
}

img{
  height: 40vh;
}

}


</style>