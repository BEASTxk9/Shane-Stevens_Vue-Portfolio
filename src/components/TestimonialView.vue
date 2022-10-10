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

    <div class="card" v-for="item of TestimonialsArray" :key="item.id">
<div class="col-sm-5 img-div">
  <img :src="item.image" :alt="item.name">
</div>
  <div class="card-info">
    <h3>{{ item.name }}</h3>
    <h4 class="text-title">
      {{ item.title }}
    </h4>
    <p class="text-body text-start px-1">
               "{{ item.text }}"
    </p>
    
  </div>
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
                    "image": "https://i.postimg.cc/mZpHYqNN/godwin-2-1-removebg-preview.png",
                    "name": "Godwin Dzvapatsva",
                    "title": "Head of Curriculum and Learning",
                    "text": "Shane is a diligent student who pays particular attention to detail. He is one of our top students in the academy. His mastery of HTML, CSS and Bootsrap has proved him to be among the prospective top developers. His work ethics are above board. I highly recommend him for any opportunities within your organisation."
                },
                {
                    "id": 2,
                    "image": "https://i.postimg.cc/Dw85QLXm/joel2-removebg-preview.png",
                    "name": "Joel Mukanya",
                    "title": "Coding Lecturer",
                    "text": "Shane should be happy with his progress and understanding of the lesson content as he is doing very well. Shane has proven to have a detailed grasp of the HTML,CSS & Bootstrap material we have been studying. He is an expert at describing what he has done and what he has found out."
                },
                {
                    "id": 3,
                    "image": "https://i.postimg.cc/90YgS2mM/monique-removebg-preview.png",
                    "name": "Monique Dampies",
                    "title": "Colleague",
                    "text": "Shane has a natural ability to solve problems and find unique routes to the solution. He never backs down in the face of any technical issues. I will recommend Shane to any team as he is always willing to assist the next person facing an issue. His ability to understand new information will make him a great asset to any company.Monique is a talented individual. With great initiative, she works hard and strives to make the best work possible. I would highly recommend her to any team."
                },
                {
                    "id": 4,
                    "image": "https://i.postimg.cc/rFCLX6n5/Whatsapp-removebg-preview.png",
                    "name": "Marshalino Jankowski",
                    "title": "Colleague",
                    "text": "Shane is a natural born leader who has earned everyone's respect through his brilliance when it comes to code. He has offered his assistance to everyone when they require it. He is destined for great things in the world of code and anyone alongside him shall succeed"
                },
                {
                    "id": 5,
                    "image": "https://i.postimg.cc/26w4NSZP/Jared-2-removebg-preview.png",
                    "name": "Jared Isaacs",
                    "title": "Colleague",
                    "text": "Shane is an outgoing, hardworking, creative web developer. Who	sets out to achieve his goals through perseverance and determination. As his colleague I see a bright future filled with prosperity being set in front of him, with his iron will to overcome any impediments that comes he way. As such he has the set skills to fulfill any task that will be given to him, making him a great asset to any business or company."
                },
                {
                    "id": 6,
                    "image": "https://i.postimg.cc/8cQx9wLy/Reagan1-removebg-preview.png",
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

#testimonial{
  z-index: 1;
  padding-top: 3rem;
  padding-bottom: 0rem;
  scroll-margin-block-start: 19.7rem;
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
  font-weight: 500;
}

/* From uiverse.io by @alexruix */
/*Magic card*/
.card {
  margin-top: 10vh;
  height: 72vh;
 background: #f5f5f5;
 overflow: visible;
 box-shadow: 0 5px 20px 2px rgba(0,0,0,0.1);
 display: flex;
 flex-direction: column;
 align-items: center;
}

.card-info {
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 2em;
 padding: 0 1rem;
}
img {
  border-radius: 5px;
height: 18vh;
width: 5vw;
 transform: translateY(-50%);
 background: #42caff;
 background: linear-gradient(to bottom, #dfe1e2 0%, #6eaeee 100%);
 position: relative;
 transition: all .3s ease-in-out;
}

img::before {
 content: "";
 border-radius: inherit;
 position: absolute;
 top: 50%;
 left: 50%;
 width: 90%;
 height: 90%;
 transform: translate(-50%, -50%);
 border: 1rem solid #e8e8e8;
}


/*Text*/
.text-title {
 text-transform: uppercase;
 font-size: 1.1rem;
 color: #42caff;
 letter-spacing: 0.05rem;
}

.text-body {
 font-size: .8em;
 text-align: center;
 color: #6f6d78;
 font-weight: 400;
 font-style: italic;
}

@media only screen and (max-width: 767px){

.card{
  height: 35rem;
}
}
</style>