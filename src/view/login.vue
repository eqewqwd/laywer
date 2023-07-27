<template>
<NavBar/>

<form @submit.prevent="handleLogin()" class="FormDiv" id="my-form">
  <label>אימייל :</label>
  <input type="email" v-model="email" required>
  <br>
  <label>סיסמא :</label>
  <input type="password" v-model="password" required>
  <br>
  <button type="submit">כניסה</button>
</form>



<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'


import axios from 'axios';
import jwt_decode from 'jwt-decode';


export default {
  name: 'PostForms',
  components: {
    NavBar,
    Footer
},
  data(){
      return{
        email:'',
        password:'',
      }
  },
  created(){

  },
  mounted(){
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('/.netlify/functions/login', {
          email: this.email,
          password: this.password,
        });

        const { token } = response.data;

        // Save the token in local storage or vuex store for later use
        localStorage.setItem('token', token);

        // Decode the token to extract user data (optional)
        const userData = jwt_decode(token);
        console.log('User Data:', userData);
        
      } catch (error) {
        console.error(error.response.data);
        alert('Login failed. Please check your credentials.');
      }
    },
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

/* ------------- FormDiv ------------- */

.FormDiv{
  position: relative;
  border: 1px solid none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  right: 50%;
  transform: translate(50%);
  margin-top: 3%;
}

.FormDiv input{
  height: 35px;
  width: 100%;
}

.FormDiv textarea{
  height: 150px;
  width: 100%;
}

.FormDiv button{
  border: none;
  border-radius: 25px;
  height: 50px;
  width: 100%;
  background-color: rgb(210, 183, 30);
  transition: ease 0.2s;
}

.FormDiv button:hover{
  color: white;
  background-color: rgb(243, 213, 45);
}


</style>




