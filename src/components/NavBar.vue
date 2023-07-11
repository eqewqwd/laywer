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
        <router-link style="text-decoration: none;" to="/"><li><a>עמוד הבית</a></li></router-link>
        <router-link style="text-decoration: none;" to="/"><li><a>תיקי עבודה</a></li></router-link>
        <router-link style="text-decoration: none;" to="/"><li><a>אודות</a></li></router-link>
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
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgb(111, 20, 111); */
  /* background-color: #588fb3; */
  background-color: rgb(24,44,79);
  color: white;
  z-index: 999999;
  transition: 0s ease-out;
}

.sticky{
  background-color: transparent;
  background-image: linear-gradient(#020202, #1c1d1e 40%, transparent);
  transition: 0.4s ease-in;
}

.brand-title{
  font-size: 2.5rem;
  margin-left: 3%;
  margin-top: 0.4%;
}

.brand-title img{
  width: 100%;
  height: 80px;
}

.navbar-links{
  margin-right: 2%;
  
}

.navbar-links ul{
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row-reverse ;
}

.navbar-links li{
  list-style: none;
}

.navbar-links li a{
  text-decoration: none;
  color: white;
  padding: 1rem;
  display: block;
  font-size: 1.3rem;
  transition: 0.2s ease-out;

}

.navbar-links li a:hover{
  color: #ff80c3;
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
  background-color: white;
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
    display: none;
    width: 100%;
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
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
    background-color: #333;
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
