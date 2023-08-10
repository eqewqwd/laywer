<template>
  <div class="ContactContainer">
    <div class="TitleContainer">
      <h1 class="contactH1">לייעוץ ראשוני ללא התחייבות​</h1>
      <h5>לקבלת שיחת ייעוץ באפשרותך להשאיר פרטים בטופס המצורף, או לחייג אלינו למספר 03-7949755</h5>
    </div>
    <div class="formContainer">
      <form @submit.prevent="SendEmail()" action="">
        <input v-model="namePost" type="text" name="" placeholder="שם">
        <input v-model="emailPost" type="text" name="" placeholder="אימייל">
        <button type="submit">אשמח לייעוץ איתך</button>
      </form>
    </div>

  </div>
</template>

<script>

import axios from 'axios';
import emailjs from '@emailjs/browser';




export default {
    name: "ContactContainer",
    data() {
        return {
          namePost:'',
          emailPost:'',
        }
    },
    created () {
  },
    mounted(){
    }, 
    methods:{
      SendEmail(){
        let from_name = this.namePost
        let email_id = this.emailPost

        const data = {
          from_name:from_name,
          email_id:email_id,
        }

        let publicKey = "DBLmVAnW9rZgH7ggb"

        emailjs.send("service_trj97gf","template_gufs4gg",data,publicKey).then(function(res){
        alert("מייל נשלח בהצלחה");
        })
      }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ContactContainer{
  position: relative;
  direction: rtl;
  border: 3px solid gold;
  /* background-color: rgb(111, 20, 111); */

  /* background-color: rgb(128, 0, 128); */
  background-color: rgb(24,44,79);
  /* background-color: #588fb3; */
  height: auto;
  width: 90%;
  top: 20%;
  right: 50%;
  transform: translate(50%);
  padding: 25px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.TitleContainer{
  color: #f1f1f1;
}

.formContainer{
  width: 100%;
  height: 100px;
  padding-top: 20px;
}

.formContainer form{
  border: 1px solid none;
  display: flex;
  justify-content: space-evenly;
}

.formContainer form button[type="submit"]{
 background-color: gold;
 border: 1px solid white !important;
 color: white;
 font-weight: 600;
 font-size: 0.8vw;
 text-shadow: 1px 1px 2px pink; /* text-shadow: 30px 40px 50px rgba(0,0,0,0.3); */
 transition: ease 0.2s;
}

.formContainer form button[type="submit"]:hover{
  border: none;
  font-size: 1vw;
  color: black;
}

.formContainer form input[type="text"],.formContainer form button[type="submit"]{
  width: 32%;
  padding: 10px;
  height: 70px;
  border-radius: 10px;
  border: none;
  outline: none;

}

</style>
