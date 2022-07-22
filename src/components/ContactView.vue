<template>
  <section id="contact">
    <!-- heading -->
    <div class="container text-center">
      <div class="heading mx-5 py-1 row justify-content-center text-center">
    
        <div class="col-sm-1">
      
           <h2 class="btn-layout2 b2">05-</h2>
       
         
        </div>
        <div class="col-sm-11">
              
          <h2 id="HEADING-TEXT">CONTACT</h2>
       
          
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row col-sm-12 justify-content-center">
        <!-- Form-left -->
        <div id="form" class="col-lg-12 col-md-12 mt-5">
          <form action="https://formspree.io/f/xayvpewl" method="post">
            <h2 id="subheading" class="pt-3">Let's Get In Contact.</h2>
            <div class="row justify-content-center">
              <!-- name -->
              <div class="col-md-6 col-sm-12">
                <label>1.Name</label><br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter your Name."
                />
              </div>
              <!-- surname -->
              <div class="col-md-6 col-sm-12">
                <label>2.Surname</label><br />
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  required
                  placeholder="Enter your Surname."
                />
              </div>
            </div>
            <div class="row justify-content-center">
              <!-- email -->
              <div class="col-md-6 col-sm-12">
                <label>3.Email</label><br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your Email."
                />
              </div>
              <!-- contact -->
              <div class="col-md-6 col-sm-12">
                <label>4.Contact</label><br />
                <input
                  type="number"
                  maxlength="10"
                  required
                  placeholder="Enter your Details."
                />
              </div>
            </div>

            <div class="row justify-content-center">
              <!-- message -->
              <div class="col-md-12 col-sm-8">
                <label>5.Message</label><br />
                <textarea
                  name="message"
                  id="message"
                  required
                  cols="56"
                  rows="5"
                placeholder="Enter your message."></textarea>
              </div>
            </div>

            <!-- button -->
            <div class="col-md-12 col-sm-8 text-center">
              <button class="btn-layout3 b3 text-center my-3" type="submit">
                <span class="text-center">Submit</span>
              </button>
            </div>
          </form>
        </div>

        <!-- right -->
        <div class="col-lg-12 col-md-12 mt-5 text-start px-5">
          <!-- my contact info -->
          <div class="container text-center px-5 py-5">
            <div class="row">
              <!-- phone no -->
              <div class="col-sm-4">
                <a href="tel:06708596682"
                  ><i id="contact-icons" class="fa-brands fa-whatsapp"></i
                ></a>
                <p>+27 67 859 6682</p>
              </div>

              <!-- email -->
              <div class="col-sm-4">
                <a href="mailto:shanestevensxk9@gmail.com" target="_blank"
                  ><i id="contact-icons" class="fa-solid fa-envelope"></i
                ></a>
                <p>shanestevens@gmail.com</p>
              </div>

              <!-- location -->
              <div class="col-sm-4">
                <a
                  href="https://www.google.com/maps/place/Plumstead,+Cape+Town,+7801/@-34.0264953,18.4548908,14z/data=!3m1!4b1!4m5!3m4!1s0x1dcc424d7e933d0b:0xbd5bd6448b6553c2!8m2!3d-34.0259442!4d18.4761775"
                  target="_blank"
                >
                  <i id="contact-icons" class="fa-solid fa-location-dot"></i>
                </a>
                <p>Plumstead / Cape Town</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
    scroll-margin-block-start: 19rem;
  padding-bottom: 10vh;
}
/* form */
#form {
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  box-shadow: 10px 10px 20px rgba(255, 255, 255, 0.692);
  border-radius: 10px;
  width: 50vw;
}

input {
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  outline: none;
}

input:hover {
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 50px 3px rgba(0, 206, 255, 0.7);
}

textarea {
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  outline: none;
}

textarea:hover {
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 50px 3px rgba(0, 206, 255, 0.7);
}

#subheading{
    padding: 5px;
}

/* BUTTON3 */
button a {
  transition: all 0s ease-in-out;
  color: rgb(64, 62, 62);
}

button a:hover {
  color: rgb(0, 0, 0);
}

button:hover {
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 50px 3px rgba(0, 206, 255, 0.7);
}

.b3:before {
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

.b3:hover:before {
  color: rgb(255, 255, 255);
  box-shadow: 12px 31px 37px rgba(0, 0, 0, 0.5);
  width: 100%;
  left: auto;
  right: 0;
}

.btn-layout3,
.bttn3 {
  margin-top: 10px;
  display: inline-flex;
  margin: 0 5px 0 0;
  position: relative;
  opacity: 0.999;
  padding: 10px 10px;
  text-align: center;
  color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  border: none;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  overflow: hidden;
  margin-left: 1%;
  width: 82.5%;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
}

a {
  color: black;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

a:hover {
  color: black;
  text-shadow: 6px 12px 9px black;
  font-size: 1.8rem;
}

@media only screen and (max-width: 790px) {
  #form {
    text-align: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 80%;
  }

  textarea {
    width: 10rem;
  }
}
</style>
