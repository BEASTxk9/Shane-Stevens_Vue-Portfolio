<template>
  <section id="resume">
    <!-- heading -->
    <div class="container text-center">
      <div class="heading mx-5 py-1 row justify-content-center text-center">
        <transition name="fade" appear>

        </transition>
        <div class="col-sm-1">
          <transition name="fade" appear>
             <h2 class="btn-layout2 b2">02-</h2>
        </transition>
       
        </div>
        <div class="col-sm-11">
          <transition name="fade" appear>
 <h2 id="HEADING-TEXT">RESUME</h2>
          </transition>
         
        </div>
      </div>
    </div>

    <h3 id="subheading">Work & Volunteering Experience</h3>
    <div class="container text-start">
      <div class="row justify-content-center ">
        <div
          id="card"
          class="col-md-5 col-sm-12 my-2"
          v-for="item of Work"
          :key="item.id"
        >
        <h3>{{ item.year }}</h3>
        <h3>{{ item.name }}</h3>
        <li>{{ item.title }}</li>
        <li>{{ item.skill }}</li>
        <li>{{ item.li }}</li>
          
          
          
          
          
        </div>
      </div>
    </div>
    



  </section>
</template>

<script>
export default {
  name: "Resume-vue",
  data() {
    return {
      Work: [
        {
          id: "1",
          year: "2018",
          name: "SecBands | Cape Town, South Africa ",
          title: "Title: Casual worker(holiday job)",
          skill:
            "Skills Aquired: Developed Time management skills and the ability to work well in a team",
          li: "I Was involved in the production of security bands",
        },
        {
          id: "2",
          year: "2019",
          name: "Cape Province Mountain Club | Cape Town, South Africa ",
          title:"Title: Assistant",
          skill:
            "Skills Aquired: Communication skills and Time management skills",
          li: "Assisted at annual Table Mountain hiking challenge",
        },
        {
          id: "3",
          year: "2020",
          name: "South	African Red Cross Society | Cape Town, South Africa ",
          title:"Title: Assistant",
          skill: "Skills Aquired: Time management skills and People skills",
          li: "Volunteered to pack distribute food and toiletry parcels.(Volunteered)",
        },
        {
          id: "4",
          year: "2022",
          name: "PowerPlastics Pool Covers | Cape Town, South Africa",
          title: "Title: Delivery, Collection and Installations",
          skill:
            "Skills Aquired: Navigational skills, Pool Cover Installation skills, Further	Developed Time management skills, and People skills.",
            li: "(Work)"
        }
      ]
    };
  },
};
</script>

<style scoped>
#card {
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  border-left: 2px solid rgb(0, 0, 0);
  height: 19.4rem;
  margin-right: 10px;
  padding-left: 1rem;
  padding-top: 1rem;
  transition: all 0.5s ease-in-out;
  	box-shadow: 10px 10px 27px rgba(0, 0, 0, 0.4);	
	overflow-x: hidden;
	position: relative;	
	overflow:hidden;
}

#card:before{
    transition: all 0.5s ease-in-out;
	content: ""; 
	width: 0; 
	height: 100%; 
	position: absolute; 
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	left: 0; 
	top: 0; 
	transition: 0.8s;
	-webkit-transition: 0.8s;
	-moz-transition: 0.8s;
	-ms-transition: 0.8s;
	-o-transition: 0.8s; 
	z-index: -1;
}

#card:hover:before{
    box-shadow: 12px 31px 37px rgba(0, 0, 0, 0.5);
	width: 100%; 
	left: 0; 
	right: auto; 
}

#card:hover{
  color: white;
}


</style>
