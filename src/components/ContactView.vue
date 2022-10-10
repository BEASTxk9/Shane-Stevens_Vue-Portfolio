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

    <div class="container justify-content-center">
      <div class="row justify-content-center">
        <div class="col-sm-8">
        <!-- Form-left -->
        <div id="form" class="col-lg-8 col-md-8 mt-5">
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
              <div class="col-md-12 col-sm-12">
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
            <div class="row justify-content-center">
 <div class="col-lg-12 col-sm-8 text-center">
              <button
              class="my-3 b btn-layout w-75"
              type="submit"
             
              onclick="this.classList.toggle('button--loading')"
            >
              <span class="button__text">Submit</span>
            </button>

            </div>
            </div>
           
          </form>
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
    scroll-margin-block-start: 23rem;
  padding-bottom: 10vh;
}
/* form */
#form {
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  box-shadow: 10px 10px 20px rgba(255, 255, 255, 0.692);
  border-radius: 10px;
  width: 100%;
}

input {
  width: 60%;
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
  width: 80%;
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

/* button */
button {
  text-align: center;
}
.btn-layout,
.b {
  text-align: center;
  margin: 0 5px 0 0;
  position: relative;
  opacity: 0.999;
  padding: 8px 8px;
  text-align: center;
  background-color: rgb(212, 212, 212);
  color: rgb(0, 0, 0);
  border-radius: 3px;
  border: none;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  overflow: hidden;
}
.b:before {
  text-align: center;
  transition: all 0.3s ease-in-out;
  content: "";
  width: 0;
  height: 100%;
  position: absolute;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  left: 0;
  top: 0;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  z-index: -1;
}
.b:hover:before {
  color: rgb(0, 0, 0);
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  width: 100%;
  left: auto;
  right: 0;
}
.btn-layout:hover {
  color: rgb(0, 0, 0);
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 20px 3px rgb(32, 218, 218);
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

@media only screen and (max-width: 1000px) {
  #form {
    text-align: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 90%;
  }

  textarea {
    width: 80%;
  }

  #contact-info{
    font-size: 0.8rem;
  }

  label{
    display: none;
  }

button{
  justify-content: center;
  align-content: center;
}

#info{
font-size: 0.7rem;
gap: 1.5rem;
justify-content: space-between;
}



}
</style>
