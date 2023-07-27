<template>
  <nav class="navbar">
    <span class="loginuser" v-if="user"><h1>ברוכה הבאה {{ user.name }} </h1><i class="bi bi-person-circle"></i><i @click="exitUser()" class="bi bi-box-arrow-right"></i></span>
    <img class="imgAll" src="@/assets/Logo/logo.png" alt="">
    <!-- <a @click="OpenMenu" class="toggle-button">
      <span class="bar" id="first"></span>
      <span class="bar" id="two"></span>
      <span class="bar" id="three"></span>
    </a> -->
    <div class="navbar-links">
      <ul>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/"><li><a>בית</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'tzavahot' } })"><li><a>צוואות</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'yipuy-Koach' } })"><li><a>ייפוי כוח מתמשך</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/ContactUs"><li><a>צור קשר</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/Files-Download"><li><a>טפסים להורדה</a></li></router-link>
      </ul>
    </div>
  </nav>
  <div class="threebarnav">
    <a @click="OpenMenu" class="toggle-button">
      <span class="bar" id="first"></span>
      <span class="bar" id="two"></span>
      <span class="bar" id="three"></span>
    </a>
    <div class="navbar-links">
      <div class="brand-title"><img src="@/assets/Logo/logo.png" alt="" width="300px"></div>
        <ul>
          <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/"><li><a>בית</a></li></router-link>
          <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'tzavahot' } })"><li><a>צוואות</a></li></router-link>
          <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'yipuy-Koach' } })"><li><a>ייפוי כוח מתמשך</a></li></router-link>
          <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/ContactUs"><li><a>צור קשר</a></li></router-link>
          <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/Files-Download"><li><a>טפסים להורדה</a></li></router-link>
        </ul>
      </div>
  </div>
</template>

<script>

import axios from 'axios'


export default {
  

  name: 'Navbar',
  mounted() {
    // addEventListener.this.OpenMenu()
    this.changeNavByRoute()
    this.userData()
  },
  data(){
    return{
      test:'tzavahot',
      user:null,
    }
  },
  props:{
  },
  created () {
    // window.addEventListener('scroll', this.handleScroll);
    // window.addEventListener('click', this.toggleButton);
    // console.log(document.getElementById("itemNum").ariaValueText)
    
  
  },
  destroyed () {
    // window.removeEventListener('scroll', this.handleScroll);
    // window.removeEventListener('click', this.OpenMenu);
  },
  methods: {
    // handleScroll (event) {
    //   var navbar = document.getElementsByClassName('navbar')[0]
    //   navbar.classList.toggle("sticky",window.scrollY > 0)
    // },
    OpenMenu(event) {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[1]
      
      navbarLinks.classList.toggle('active')
      toggleButton.classList.toggle('rotate')


    },
    changeNavByRoute(){
      console.log(this.$route.fullPath == '/')
      let checkRoute = this.$route.fullPath == '/'
      const LogoResponsive = document.querySelector('.navbar')

      if(checkRoute == true & innerWidth <= 750){
        LogoResponsive.style.display = 'none'
      }else{
      }
    },
    async userData(){

       
var token = localStorage.getItem("token"); // Replace this with the actual token

await axios
  .get('/.netlify/functions/user-data', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    this.user = response.data
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
},
exitUser(){
      localStorage.clear()
      alert('חשבון התנתק מהמערכת')
      window.location.reload()
    }

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  direction: ltr !important;
  box-sizing: border-box;
}


.navbar{
  top: 0 !important;
  border: 1px solid none;
  position: relative;
  display: flex;
  width: 100%;
  height: 23vh;
  align-items: center;
  background-color: transparent;
  z-index: 999999;
  transition: 0s ease-out;
}
.navbar span.loginuser{
  border: 1px solid none;
  width: auto;
  height: auto;
  position: absolute;
  top: 5%;
  right: 2%;
  display: flex;

}

.navbar span.loginuser h1{
  position: relative;
  right: 3%;
  margin-top: 4%;
  font-size: 1.3vw;
}
.navbar span.loginuser i{
  font-size: 2vw;
}

.threebarnav{
    display: hidden;
  }

.threebarnav .navbar-links{
  display: none;
}


.threebarnav .brand-title{
  display: block ;
  width: 150px;
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translate(-50%);
  /* border: 1px solid red; */
}

.brand-title img{
  width: 100%
}

.sticky{
  background-color: transparent;
  background-image: linear-gradient(#020202, #1c1d1e 40%, transparent);
  transition: 0.4s ease-in;
}

img{
  width: 250px;
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translate(-50%);
  /* border: 1px solid red; */
}

.navbar-links{
  border: 1px solid none;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);  
  width: 726px;
  border-bottom: 1px solid black;
}

.navbar-links ul{
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row-reverse ;
  justify-content: center;
}

.navbar-links li{
  list-style: none;
  color: black;
  border: 1px solid none;
  padding: 0px 10px 0px 10px;
}

.navbar-links li a{
  text-decoration: none;
  border: 1px solid none;
  color: black;
  padding: 1rem;
  display: block;
  font-size: 1.3rem;
}

.navbar-links li:hover{
  background-color: rgb(173, 148, 7);
  color: white;
  transition: 0.2s ease-in;

}

.toggle-button{
  position: absolute;
  top: 1.4rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 3212133213;
}

.toggle-button .bar{
  height: 3px;
  width: 100%;
  background-color: black;
  border-radius: 10px;
  transition:  0.2s ease-out;
}

#itemNum{
  position: relative;
  background-color: #ff80c3;
  width: 21px;
  height: 21px;
  border-radius: 60%;
  text-align: center;
  color: black;
  left: 52px;
  font-family: system-ui;
  font-weight: 500;
  padding-bottom: 23px;
}



@media (max-width: 750px) {

  .toggle-button {
    display: flex;
    /* border: 1px solid transparent; */
    transition:  0.2s ease-out;
  }

  .imgAll{
    display: block;
    z-index: 2312321321321;
  }

  .navbar-links {
    background-color: rgb(209, 212, 215);
    position: absolute;
    top: 0;
    height: 390px;
    display: none;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-bottom: none;
    border: 1px solid none;
    z-index: 32132121;
  }

  .navbar  .navbar-links {
    /* flex-direction: column;
    align-items: flex-start; */
    display: none;
  }

  .threebarnav.addHeight{
    display: block;
    width: 100%;
    height: 180px;
  }
  .navbar-links ul{
    position: absolute;
    bottom: 0;
    width: 100%;
    flex-direction: column;
  }

  .navbar-links li{
    text-align: center;
  }

  .navbar-links li a{
    padding: .7rem 1rem;
  }

  .navbar-links.active{
    display: flex;
  }

  .toggle-button.rotate #first{
    background-color: transparent;
  }

  .toggle-button.rotate #two{
    transform: rotate(45deg);
    position: relative;
    top: 4.5px;
    transition:  0.2s ease-in;
  }

  .toggle-button.rotate #three{
    transform: rotate(-45deg);
    position: relative;
    top: -4.5px;
    transition:  0.2s ease-in;
  }

}


</style>
