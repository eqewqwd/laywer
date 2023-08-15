<template>
 <div class="divNav" id="mainNavigation">
      <nav role="navigation">
        <div class="py-3 text-center border-bottom">
          <img style="width: 250px;" class="imgAll" src="@/assets/Logo/logo.png" alt="">
          <span class="loginuser" v-if="user"><h1>ברוכה הבאה <b>{{ user.name }}</b></h1><i @click="openMenuUser()" class="bi bi-person-circle"></i></span>
        </div>
      </nav>
      <div class="navbar-expand-md">
        <div class="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto ">
            <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/"><li class="nav-item"><a class="nav-link">בית</a></li></router-link>
            <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'mekarkein' } })"><li class="nav-item"><a class="nav-link">מקרקעין</a></li></router-link>
            <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'nezikin' } })"><li class="nav-item"><a class="nav-link">נזיקין</a></li></router-link>
            <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'tzavahot-yipuy-Koach' } })"><li class="nav-item"><a class="nav-link">צוואות/יפויי כוח מתמשך</a></li></router-link>
            <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/blog"><li class="nav-item"><a class="nav-link">בלוג</a></li></router-link>
            <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/ContactUs"><li class="nav-item"><a class="nav-link">צור קשר</a></li></router-link>
            <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/Files-Download"><li class="nav-item"><a class="nav-link">טפסים להורדה</a></li></router-link>
          </ul>
        </div>
      </div>
    </div>

    <div class="menuUser"  v-if="user && this.menuUserOpen == true">
      <i class="bi bi-arrow-up-short arrowUser"></i>
      <ul>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;color:black;" to="/admin/PostForms"><li><a><i class="bi bi-patch-plus"></i> מאמר</a></li></router-link>
        <hr>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;color:black;" to="/admin/PostBlogs"><li><a><i class="bi bi-patch-plus"></i> בלוג</a></li></router-link>
        <hr>
        <li style="text-decoration: none;color:black;" @click="StartEdit()"><a><i class="bi bi-pencil-square"></i> עריכה</a></li>
        <hr>
        <li style="text-decoration: none;color:black;" @click="exitUser()"><a><i class="bi bi-box-arrow-right"></i> יציאה</a></li>
      </ul>

    </div>

    <div class="threebarnav">
    <a @click="this.OpenMenu()" class="toggle-button">
      <span class="bar" id="first"></span>
      <span class="bar" id="two"></span>
      <span class="bar" id="three"></span>
    </a>
    <div class="navbar-links">
      <div class="brand-title"><img src="@/assets/Logo/logo.png" alt="" width="300px"></div>
        <ul>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/"><li><a>בית</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'mekarkein' } })"><li><a>מקרקעין</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'nezikin' } })"><li><a>נזיקין</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'tzavahot-yipuy-Koach' } })"><li><a>צוואות</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'tzavahot-yipuy-Koach' } })"><li><a>ייפוי כוח מתמשך</a></li></router-link>
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
      menuUserOpen:false,
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
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      
      navbarLinks.classList.toggle('active')
      toggleButton.classList.toggle('rotate')


    },
    StartEdit(){
      this.$emit('editStart')
    },
    changeNavByRoute(){
      console.log(this.$route.fullPath == '/')
      let checkRoute = this.$route.fullPath == '/'
      const LogoResponsive = document.querySelector('.divNav')

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
    },
    openMenuUser(){
      const menuUser = document.getElementsByClassName('menuUser')[0]
      console.log(menuUser)
      
      if(this.menuUserOpen == false){
        this.menuUserOpen = true;
      }else{
        this.menuUserOpen = false;
      }
    }

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  direction: rtl !important;
  box-sizing: border-box;
}

.signOut{
  cursor: pointer;
}

.signOut:hover{
  color: rgb(233, 32, 32);
}



@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
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
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

span.loginuser{
  border: 1px solid none;
  width: auto;
  height: auto;
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  direction: ltr !important;
  cursor: pointer;
}
span.loginuser h1{
  position: relative;
  right: 4%;
  margin-top: 3%;
  font-size: 1.3vw;
}
span.loginuser i{
  font-size: 2vw;
}

span.loginuser i:hover{
  color: #415e7a;
}

.menuUser{
  position: absolute;
  top: 70px;
  right:20px;
  z-index: 32132213;
  width: 190px;
  border: 1px solid none;
  display: flex;
  flex-direction: column;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.menuUser i.arrowUser{
  text-align: center;
  font-size: 30px;
}

.menuUser ul{
  border: 1px solid none;
  background-color: rgb(241, 182, 32);
  border-radius: 25px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
}

.menuUser ul li{
  width: 100%;
  border: 1px solid none;
  font-size: 19px;
}

.menuUser ul li:hover{
  color: blue !important;
  cursor: pointer;
  font-size: 21px;
}


#mainNavigation a {
      /* font-family: 'Cabin', sans-serif; */
      /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
      font-family: 'miriamLibre', sans-serif !important;
      font-weight: none;
      font-size:20px;
      text-transform:uppercase;
      letter-spacing:2px;
      text-shadow:1px 1px 2px rgba(0,0,0,0.4)
    }
    
    .dropdown-menu {
      background:#03727d
    }
    a.dropdown-toggle {
      color:black !important
    }
    a.dropdown-item:hover {
      color:#03727d !important
    }
    .nav-item a{
      color:rgb(28, 28, 129);
    }
    .nav-item a:hover {
      color:rgb(207, 161, 45)
    }
    .nav-item{
      min-width:12vw;
    }
    .nav-item:hover{
      background-color: rgb(173, 148, 7);
      transition: 0.2s ease-in;
    }
    .nav-item a:hover{
      color: white;
    }
    #mainNavigation {
      border: 1px solid none;
      position:relative;
      top:0;
      left:0;
      width:100%;
      z-index:123;
      padding-bottom:70px;
    }
    #navbarNavDropdown.collapsing .navbar-nav,
    #navbarNavDropdown.show .navbar-nav{
      background:#037582;
      padding:12px;
    }

    /* dsdssssss */

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


.navbar-links{
  border: 1px solid none;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);  
  width: 60%;
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
@media (max-width: 1420px) {
  #mainNavigation a {
      font-size:1.3vw;
    }
}

@media (max-width: 750px) {
  .navbar-links {
    background-color: rgb(209, 212, 215);
    position: absolute;
    top: 0;
    height: 500px;
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

  .toggle-button {
    display: flex;
    /* border: 1px solid transparent; */
    transition:  0.2s ease-out;
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
