<template>
<NavBar @editStart="StartEdit()"/>

<div class="allContainer fadeInDown">
    <div class="FormContainer">
    <h1 class="contactH1">צור איתנו קשר</h1>
    <div class="FormDiv">
      <form @submit.prevent="SendEmail()">
        <input type="text" v-model="NamePost" name="name" placeholder="שם מלא">
        <input type="text" v-model="phonePost" name="name" placeholder="טלפון">
        <input type="text" v-model="SubjectPost" name="subject" placeholder="נושא">
        <textarea type="text" v-model="MessagePost" name="message" placeholder="הודעה" cols="30" rows="10"></textarea>
        <button  type="submit">שליחה <i style="margin-right: 5px;" class="bi bi-send"></i></button>
      </form>
    </div>
  </div>
  <div class="InfoContainer">
    <h1 class="contactH1">יצירת קשר</h1>
    <div class="InfoDiv">
      <!-- <div class="flexContact">
        <span class="infoSpan"><i class="bi bi-geo-alt"></i><span>מיקום:</span></span>
        <span class="InfoData">שדרות מוריה 81, חיפה</span>
      </div>
      <div class="flexContact">
        <span class="infoSpan"><i class="bi bi-telephone"></i><span>טלפון:</span></span>
        <span class="InfoData" >052-635-3423</span>
      </div>
      <div class="flexContact">
        <span class="infoSpan"><i class="bi bi-envelope"></i><span>אימייל:</span></span>
        <span class="InfoData">sharon@snt-law.co.il</span>
      </div> -->

      <ul class="ulContact">
        <li><span class="infoSpan"><i class="bi bi-geo-alt"></i><span class="optionContact">מיקום:</span>
          <span v-if="editMode == false" class="InfoData">{{ this.location }}</span>
          <span v-if="editMode == true">
          <input class="TitleFirstInput" :value="this.location" @input="this.locationPost = $event.target.value"/></span>
        </span></li>
        <li><span class="infoSpan"><a href="tel:052-635-3423"><i style="color: white;" class="bi bi-telephone"></i></a><span class="optionContact">טלפון:</span>
          <span v-if="editMode == false" class="InfoData">{{ this.phoneNumber }}</span>
          <span v-if="editMode == true">
          <input class="TitleFirstInput" :value="this.phoneNumber" @input="this.phoneNumberPost = $event.target.value"/></span>
        </span></li>
        <li><span class="infoSpan"><i class="bi bi-envelope"></i><span class="optionContact">אימייל:</span>
          <span v-if="editMode == false" class="InfoData">{{ this.email }}</span></span> 
          <span v-if="editMode == true">
          <input class="TitleFirstInput" :value="this.email" @input="this.emailPost = $event.target.value"/></span>
        </li>
        <span> <EditTool v-if="editMode == true" @PostMongo="updateItemInMongoDB()" @EditEnd="StartEdit('InfoOffice')"/></span>
      </ul>
    </div>
  </div>

</div>

<div class="empty">

</div>


<Footer/>

</template>

<script>
import NavBar from '@/components/NavBarcopy.vue'
import Footer from '@/components/Footer.vue'
import EditTool from '@/components/EditTool.vue'
import emailjs from '@emailjs/browser';


import axios from 'axios'


export default {
  name: 'ContactUs',
  components: {
    NavBar,
    Footer,
    EditTool
},
  data(){
      return{

        contact:[],
        // email post data 

        NamePost:'',
        phonePost:'',
        SubjectPost:'',
        MessagePost:'',

        // ---------- end -------------


        // post data mongodb

        IdPost:null,

        email:'',
        emailPost:'',

        phoneNumber:'',
        phoneNumberPost:'',

        location:'',
        locationPost:'',

        // ---------- end -------------

        // action

        editMode:false,

      }
      
  },
  created(){
    this.GetDataContact()
  },
  mounted(){
  },
  methods: {
    async SendEmail(){

      const res = await this.checkLengthPost()
      if(res == true){
          const data = {
          from_name: this.NamePost,
          PhoneNumber: this.phonePost,
          subject: this.SubjectPost,
          message: this.MessagePost
        }
          let publicKey = "DBLmVAnW9rZgH7ggb"

          emailjs.send("service_trj97gf","template_u6nhy8ta",data,publicKey).then(function(res){
          alert("מייל נשלח בהצלחה");     
          window.location.reload()   
        })
      }else if(res == false){
        alert("נא למלא את כל התיבות")
      }

      
    },
    checkLengthPost(){
      if(this.NamePost.length == 0 || this.phonePost.length == 0 || this.SubjectPost.length == 0 || this.MessagePost.length == 0 ){
        return false
      }else{
        return true
      }

    },
    async GetDataContact(){

      await axios.get('/.netlify/functions/GetDataContact').then(response => {
        console.log(response.data);
        this.contact = response.data

        this.IdPost = this.contact[0]._id

        this.location = this.contact[0].location
        this.locationPost = this.contact[0].location


        this.phoneNumber = this.contact[0].phoneNumber
        this.phoneNumberPost = this.contact[0].phoneNumber
        
        this.email = this.contact[0].email
        this.emailPost = this.contact[0].email
            

      }).catch(error => {
          console.log(error);
      }); 

    },
    StartEdit(){
        if(this.editMode == false){
          this.editMode = true
        }else{
          this.editMode = false
        }      
    },
  async updateItemInMongoDB() {

    if(this.location != this.locationPost || this.phoneNumber != this.phoneNumberPost
    || this.email != this.emailPost){
      const id = this.IdPost; 
      const updatedData = {
        location:this.locationPost,
        phoneNumber:this.phoneNumberPost,
        email:this.emailPost,
      };

      try {
        const response = await axios.post('/.netlify/functions/UpdateItemContact', {
          id,
          updatedData,
        });

        // Handle the response, display success message, etc.
        alert('תיאור יצירת קשר עודכן')
        window.location.reload()
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    }else{
      alert('לא בוצע שינוי')
      this.StartEdit()
    }
      
  }  

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
  height: 150px;
}

.allContainer{
  direction: ltr;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: auto;
  top: 70px;
  width: 70%;
  height: 640px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

/* ------------- InfoContainer ------------------ */

.InfoContainer{
  background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
  direction: rtl;
  width: 40%;
  border-radius: 0px 25px 25px 0px;
  overflow: auto;
}

.InfoContainer h1{
  position: relative;
  top: 10%;
  font-size: 2.5vw;
  text-align: center;
  color: #f1f1f1;
}

.InfoContainer .InfoDiv{
  position: relative;
  display: flex;
  flex-direction: column;
  top: 20%;
  right: 50%;
  transform: translate(50%);
  color: #f1f1f1;
  text-align: right;
  width: 80%;
  border: 1px solid none;
}

.InfoContainer .InfoDiv .flexContact{
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
}

.InfoContainer .InfoDiv span.infoSpan{
  font-size: 1.3vw;
}

.InfoContainer .InfoDiv span.infoSpan i{
  border: 1px solid none;
  background-color: rgb(84, 102, 162);
  border-radius: 100%;
  padding: 10px 15px 10px 15px;
}

.InfoContainer .InfoDiv span.infoSpan span{
  margin-right: 15px;
}

ul.ulContact{
  display: flex;
  flex-direction: column;
  list-style: none;
}

ul.ulContact li{
  margin-top: 40px;
}

span.InfoData{
  position: relative;
  right: 2%;
  margin-top: 1%;
  border: 1px solid none;
  font-size: 1.1vw;
}

/* ------------- FormContainer ------------------ */


.FormContainer{
  border: 1px solid none;
  direction: rtl;
  width: 60%;
  border-radius: 25px 0px 0px 25px;
  overflow: auto;
  background-color: white;

}

.FormContainer h1{
  position: relative;
  top: 5%;
  text-align: center;
}

.FormDiv{
  border: 1px solid none;
  position: relative;
  top: 7%;
  right: 50%;
  transform: translate(50%);
  width: 80%;
}
.FormDiv form{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.FormDiv form input[type="text"],.FormDiv form input[type="email"],.FormDiv form textarea[type="text"]{
  background: #e6e6e6;
  position: relative;
  right: 50%;
  transform: translate(50%);
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 80%;
  margin-top: 20px;
}

.FormDiv form input:focus ,.FormDiv form textarea:focus{
  transition: ease 0.1s;
  outline: rgb(63, 76, 119);;
  outline-style: inset;
}

.FormDiv form button[type="submit"]{
  background: rgb(63, 76, 119);
  position: relative;
  right: 50%;
  transform: translate(50%);
  padding: 7px;
  border-radius: 20px;
  border: none;
  width: 30%;
  margin-top: 15px;
  color: white;
  transition: ease 0.2s;
}

.FormDiv form button[type="submit"]:hover{
  background: rgb(95, 116, 183);
}







/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, -100%);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}


@media (max-width: 1050px) {

  .allContainer{
    flex-direction: column;
    width: 90%;
    height: 85vh;
  }
  .InfoContainer h1{
    font-size: 20px;
  }

  .InfoContainer{
    width: 100%;
    height: 25%;
    border-radius: 0px 0px 25px 25px;
  }

  .FormContainer{
    border: 1px solid none;
    height: 75%;
    width: 100%;
  }

  .FormContainer form textarea{
    height: 100px;
  }

  .InfoContainer .InfoDiv{
    position: relative;
    display: flex;
    flex-direction: row;
    top: 20%;
    transform: translate(50%);
    color: #f1f1f1;
    text-align: right;
    width: 100%;
    justify-content: space-evenly;

  }
  .InfoContainer .InfoDiv .flexContact{
    position: relative;
    display: flex;
    flex-direction: row;
  }

  .InfoContainer .InfoDiv span.infoSpan span{
    margin-right: 5px;
  }



  .FormDiv form input[type="text"],.FormDiv form input[type="email"],.FormDiv form textarea[type="text"]{
    position: relative;
    padding: 5px;
    border: none;
    width: 80%;
    margin-top: 5%;
  }

  .FormDiv form input[type="email"]{
    padding: 10px;
  }

  .InfoContainer .InfoDiv span.infoSpan i{
    border: 1px solid none;
    background-color: rgb(84, 102, 162);
    font-size: 2.9vw;
    padding: 5px 10px 5px 10px;
  }


  .FormDiv form button[type="submit"]{
    width: 40%;
  }

  ul.ulContact{
    border: 1px solid none;
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 98%;
  justify-content: space-around;
}

.optionContact{
  display: none;
}

span.InfoData{
  position: relative;
  right: 0.2%;
  /* margin-top: 1%; */
  border: 1px solid none;
  font-size: 2.2vw;
}


}


</style>




