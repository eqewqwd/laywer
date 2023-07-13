<template>
  <nav class="navbar">
    <div class="brand-title"><img src="@/assets/Logo/logo.png" alt="" width="300px"></div>
    <a @click="OpenMenu" class="toggle-button">
      <span class="bar" id="first"></span>
      <span class="bar" id="two"></span>
      <span class="bar" id="three"></span>
    </a>
    <div class="navbar-links">
      <ul>
        <router-link style="text-decoration: none;" to="/"><li><a>בית</a></li></router-link>
        <router-link style="text-decoration: none;" to="/"><li><a>תחומי התמחות</a></li></router-link>
        <router-link style="text-decoration: none;" to="/"><li><a>פסקי דין</a></li></router-link>
        <router-link style="text-decoration: none;" to="/"><li><a>צור קשר</a></li></router-link>
        <router-link style="text-decoration: none;" to="/"><li><a>טפסים להורדה</a></li></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>

import axios from 'axios'


export default {
  

  name: 'Navbar',
  mounted() {
    // addEventListener.this.OpenMenu()
  },
  data(){
    return{
    }
  },
  props:{
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    // window.addEventListener('click', this.toggleButton);
    // console.log(document.getElementById("itemNum").ariaValueText)
    
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    // window.removeEventListener('click', this.OpenMenu);
  },
  methods: {
    handleScroll (event) {
      var navbar = document.getElementsByClassName('navbar')[0]
      navbar.classList.toggle("sticky",window.scrollY > 0)
    },
    OpenMenu(event) {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      
      navbarLinks.classList.toggle('active')
      toggleButton.classList.toggle('rotate')
    },
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
  height: 20vh;
  align-items: center;
  background-color: transparent;
  z-index: 999999;
  transition: 0s ease-out;
}

.sticky{
  background-color: transparent;
  background-image: linear-gradient(#020202, #1c1d1e 40%, transparent);
  transition: 0.4s ease-in;
}

.brand-title{
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid none;
}

.brand-title img{
  width: 100%;
  height: 80px;
}

.navbar-links{
  /* border: 1px solid green; */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);  
  width: 65%;
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

@media (max-width: 725px) {

  .toggle-button {
    display: flex;
    /* border: 1px solid transparent; */
    transition:  0.2s ease-out;
  }

  .navbar-links {
    background-color: rgb(209, 212, 215);
    position: relative;
    top: 120px;
    display: none;
    width: 100%;
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
    background-color: rgb(209, 212, 215);
  }

  .navbar-links ul{
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

  #itemNum{
  position: relative;
  left: 52%;
  bottom: 24%;
  
}

  
  


}


</style>
