<template>
<NavBar/>

<div class="PosterHome">
  <div class="ImgDivPoster skeleton"></div>
  <div class="TitleDivPoster">
    <h1 class="skeleton-text"></h1>
    <div class="SmallText">
      <h4 class="skeleton-text"></h4>
      <h4 class="skeleton-text"></h4>
    </div>
  </div>
</div>

<div class="aboutContainer">
  <h1 class="skeleton-text"></h1>
  <br>
  <p class="skeleton-text"></p>
</div>


<div class="empty">
</div>

<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'FormsContainer',
  components: {
    NavBar,
    Footer,
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
  height: 1000px;
}

/* ---------------- PosterHome --------------- */

.PosterHome{
  border: 1px solid none;
  position: relative;
  display: flex;
  right: 50%;
  transform: translate(50%);
  top: 20px;
  width: 80%;
  height: 25vw;
  background-repeat: no-repeat;
  border:1px solid none;
  direction: ltr;
}

.PosterHome .TitleDivPoster{
  border: 1px solid none;
  background-color: rgb(231,231,231);
  position: relative;
  width: 60%;
  height: 100%;
}

.PosterHome .TitleDivPoster h1{
  position: absolute;
  left: 50%;
  top: 30%;
  width: 50%;
  height: 50px;
  text-align: center;
  transform: translate(-50%);
  font-size: 2.5vw;
  font-weight: bold;
  color: #2c3e50 ;
}

.PosterHome .TitleDivPoster .SmallText{
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 60%;
  border: 1px solid none;
  width: fit-content;
  text-align: right;
}

.PosterHome .TitleDivPoster .SmallText h4{
  font-size: 1.2vw;
  height: 20px;
  width: 300px;
}

.PosterHome .ImgDivPoster{
  border: 1px solid none;
  position: relative;
  width: 40%;
  height: 100%;
}

.PosterHome .ImgDivPoster img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ---------------- aboutContainer --------------- */

.aboutContainer{
  position: relative;
  padding-top: 70px;
  direction: rtl;
  width: 50%;
  right: 50%;
  transform: translate(50%);
  text-align: right;
}
.aboutContainer h1{
  font-size: 45px;
  width: 30%;
  height: 35px;
}

.aboutContainer .lineGold{
  padding: 30px;
  width: 550px;
  position: relative;
  right: 50%;
  transform: translate(50%);
}

.aboutContainer p{
  border: 1px solid none;
  width: 100%;
  height: 500px;
  font-size: 22px;
  white-space: pre-line;
}

/* -------------- CaruselCardsDiv ------------- */

.CaruselCardsDiv{
  position: relative;
  width: 100%;
  border: 1px solid none;
  height: 400px;
  background-color: rgb(231,231,231);
}

.CaruselCardsDiv h1{
  border: 1px solid none;
  width: fit-content;
  position: absolute;
  right: 5%;
  top: 10%;
}

.CaruselCardsDiv .CaruselContainer{
  border: 1px solid none;
  position: absolute;
  width: 100%;
  bottom: 0;
}

  /* -------------------   skeleton ---------------- */

  .skeleton{
    animation: skeleton-loading 2s linear infinite alternate;
  }
  .skeleton-text{
    width: 100%;
    height: .5rem;
    margin-bottom: .25rem;
    border-radius: .125rem ;
    border: 1px solid none;
    animation: skeleton-loading 2s linear infinite alternate;
  }

  @keyframes skeleton-loading{
    0%{
      background-color: hsl(200 ,20% , 70%)
    }
    100%{
      background-color: hsl(200,20%,95%);
    }
  }


@media (max-width: 800px) {

  .PosterHome{
    width: 100%;
    height: 200px;
  }

  .aboutContainer{
    width: 85%;
  }

  .aboutContainer .lineGold{
    padding: 30px;
    width: 90vw;
    position: relative;
    right: 50%;
    transform: translate(50%);
  }

.PosterHome .TitleDivPoster h1{
  border: 1px solid none;
  position: absolute;
  left: 50%;
  top: 30%;
  width: 100%;
  text-align: center;
  transform: translate(-50%);
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50 ;
}
.PosterHome .TitleDivPoster .SmallText h4{
  font-size: 12px;
}
}
</style>




