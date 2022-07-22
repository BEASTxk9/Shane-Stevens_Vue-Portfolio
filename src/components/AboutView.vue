<template>

<div id="about"></div>
<section>
        <!-- heading -->
    <div class="container text-center">
      <div id="1" class="heading mx-5 py-1 row justify-content-center text-center">

        <div class="col-sm-1">
          <transition name="fade" appear>
   <h2 class="btn-layout2 b2">01-</h2>
</transition>
         
        </div>
        <div class="col-sm-11">
          <transition name="fade" appear>
    <h2 id="HEADING-TEXT">ABOUT</h2>
</transition>
        
        </div>

      </div>
    </div>

<!-- data -->
  <div class="container text-centert">
        <div class="row justify-content-center">
          <!-- image -->
          <div class="col-md-3 col-sm-10">
            <img
              id="me"
              class="rounded-pill my-1"
              src="../assets/me3-removebg.png"
              height="520vh"
            />
          </div>
<!-- text -->
          <div class="col-md-8 my-5 mx-4 text-black">
            <p>
              I matriculated in 2021 at
              <b
                ><a id="random-links"
                  href="https://m.facebook.com/profile.php?id=115159715166400"
                  target="_blank"
                  >Heathfield High School</a
                ></b
              >
              in <b>Cape Town.</b> During my high school years, I was a part of
              the school’s athletics team where I took part in numerous inter
              school athletics events as well as the schools own 24 Hour
              marathon. Some of my hobbies include gaming, exercising, cycling,
              playing baseball, learning how to trade and increasing my Japanese
              knowledge through visual learning.
            </p>
            <p>
              I am very hardworking and do my best to achieve my goals. I
              possess the drive and endurance to take on any challenge as I view
              them as learning opportunities. I am <b>trustworthy</b> ,
              <b>open minded</b>, <b>reputable</b> and <b>approachable</b>.
            </p>

            <div class="container">
              <div class="row">
                <!-- left -->
                <div class="col-sm-4">
                  <p>Country: South Africa</p>
                  <p>City: Cape Town</p>
                </div>
                <!-- center -->
                <div class="col-sm-4">
                  <p>Birth: 05/03/2003</p>
                  <p>Criminal Record: None</p>
                </div>
                <!-- right -->
                <div class="col-sm-4">
                  <p>Home language: English</p>
                  <p>Second language: Afrikaans</p>
                </div>
              </div>
            </div>

            <div class="container-fluid">
              <!-- row1 -->
              <div class="row">
                <div class="col-md-4">
                  <label>HTML</label>

                  <div class="progress">
                    <div
                      class="progress-bar w-75 progress-bar-striped progress-bar-animated text-end"
                    >
                      75%
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="col-md-4">
                  <label>CSS</label>

                  <div class="progress">
                    <div
                      class="progress-bar w-75 progress-bar-striped progress-bar-animated text-end"
                    >
                      75%
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="col-md-4">
                  <label>BOOTSTRAP5</label>

                  <div class="progress">
                    <div
                      class="progress-bar w-75 progress-bar-striped progress-bar-animated text-end"
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
              <!-- row2 -->
              <div class="row">
                <div class="col-md-4">
                  <label>mySQL</label>

                  <div class="progress">
                    <div
                      class="progress-bar w-50 progress-bar-striped progress-bar-animated text-end"
                    >
                      50%
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="col-md-4">
                  <label>Java Script</label>

                  <div class="progress">
                    <div
                      class="progress-bar w-50 progress-bar-striped progress-bar-animated text-end"
                    >
                      50%
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="col-md-4">
                  <label>VUE</label>
                  <div class="progress">
                    <div
                      class="progress-bar w-50 progress-bar-striped progress-bar-animated text-end"
                    >
                      50%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button></Button>

</section>
</template>

<script>
import Button from "../components/CvButtonView.vue"

export default {
components: {
    Button
}
}
</script>

<style scoped>

/* sections */
#about {
  padding-bottom: 5rem;
  scroll-margin-block-start: 15em;
}

/* img */
#me {
  transition: all 0.3s ease-in-out;
  -webkit-filter: grayscale(80%); 
  filter: grayscale(80%);
}

#random-links{
  color: black;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
}

#random-links:hover{
color: rgb(0, 123, 255);
text-decoration: underline;
}

@media only screen and (max-width: 790px){
#me{
  width: 100%;
}
}
</style>