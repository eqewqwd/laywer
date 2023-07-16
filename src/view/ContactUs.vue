<template>
<NavBar/>

<section class="get-in-touch">
   <h1 class="title">צרו קשר</h1>
   <form class="contact-form row">
      <div class="form-field col-lg-6">
         <input id="name" class="input-text js-input" type="text" v-model="namePost" required>
         <label class="label" for="name">שם מלא</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="email" class="input-text js-input" type="email" v-model="emailPost" required>
         <label class="label" for="email">אימייל</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="company" class="input-text js-input" type="text" v-model="optionPost" required>
         <label class="label" for="company">תחום</label>
      </div>
       <div class="form-field col-lg-6 ">
         <input id="phone" class="input-text js-input" type="text" v-model="phonePost" required>
         <label class="label" for="phone">מספר טלפון</label>
      </div>
      <div class="form-field col-lg-12">
         <input id="message" class="input-text js-input" type="text" v-model="messagePost" required>
         <label class="label" for="message">הודעה</label>
      </div>
      <div class="form-field col-lg-12">
         <input class="submit-btn" type="submit" value="שליחה">
      </div>
   </form>
</section>
  <Footer/>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'ContactUs',
  components: {
    NavBar,
    Footer
},
  data(){
      return{

      }
      
  },
  created(){

  },
  mounted(){
  },
  methods: {

  } 
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
}

/* -------------------- empty ------------------- */
.empty{
  height: 500px;
}

/* ---------------- PosterHome --------------- */


.formDiv{
  position: relative;
  border: 1px solid none;
  height: 75%;
  width: 1000px;
  border-left: 1px solid #999;
}
.MapDiv{
  border: 1px solid none;
  position: relative;
  height: 70%;
  width: 500px;
}

.mapContainer{
  border: 1px solid none;
  position: absolute;
  right: 10%;
  width: 60%;
  height: 300px;
}

iframe{
  width: 100%;
  height: 100%;
}


/* ------------------ from ---------------- */

.get-in-touch {
  position: relative;
  top: 70px;
  max-width: 800px;
  margin: 50px auto;

}
form.contact-form{
  width: 100%;
}
.get-in-touch .title {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 3.2em;
  line-height: 48px;
  padding-bottom: 48px;
     color: #5543ca;
    background: #5543ca;
    background: -moz-linear-gradient(left,#f4524d  0%,#5543ca 100%) !important;
    background: -webkit-linear-gradient(left,#f4524d  0%,#5543ca 100%) !important;
    background: linear-gradient(to right,#f4524d  0%,#5543ca  100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
}

.contact-form .form-field {
  position: relative;
  margin: 32px 0;
  
}
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #5543ca;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.contact-form .input-text:focus {
  outline: none;
}
.contact-form .input-text:focus + .label,
.contact-form .input-text.not-empty + .label {
  -webkit-transform: translateY(-30px);
          transform: translateY(-30px);
          
}
.contact-form .label {
  position: absolute;
  right: 20px;
  bottom: 11px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #5543ca;
  cursor: text;
  transition: -webkit-transform .2s ease-in-out;
  transition: transform .2s ease-in-out;
  transition: transform .2s ease-in-out, 
  -webkit-transform .2s ease-in-out;
          transform: translateY(-20px);
}
.contact-form .submit-btn {
  display: inline-block;
  background-color: #000;
   background-image: linear-gradient(125deg,#a72879,#064497);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  width:200px;
  float: left;
  cursor: pointer;
}

@media (max-width: 900px) {
  .contact-form .input-text {
    position: relative;
    right: 50%;
    transform: translate(50%);
    width: 70%;
    
  }

  .contact-form .label {
    position: relative;
    right: 17%;
    font-size: 18px;
    transform: translateY(-100%);
  }

  .contact-form .submit-btn {
    position: relative;
    left: 16%;
    float: left;
  }
  .get-in-touch {
    max-width: 730px;
  }
  .contact-form{

  }
}




</style>




