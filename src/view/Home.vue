<template>
<NavBar/>

<div class="PosterHome">
  <div class="imgContainer">
    <img src="@/assets/photo/laywerWomen.png">
  </div>
  <div class="TitleContainer">
    <h1>עו"ד שרון נתח תמרי</h1>
    <br>
    <h3>משרד עורכי דין וגישור</h3>
    <br>
    <img src="@/assets/Logo/agreement.png">
  </div>
</div>

<div class="aboutMe">
    <h2>אודותי</h2>
</div>

<div class="empty">
</div>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'

// import axios from 'axios'


export default {
  name: 'Home',
  components: {
    NavBar,
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
  height: 2000px;
}

/* ---------------- PosterHome --------------- */

.PosterHome{
  position: relative;
  display: flex;
  top: 20px;
  width: 100%;
  height: 465px;
  background-color: rgb(231,231,231);
  border:1px solid none;
  direction: rtl;
}

.imgContainer{
  position: relative;
  border: 1px solid none;
  height: 100%;
  width: 35%;
  padding-right: 200px;
}

.imgContainer img{
  position: absolute;
  left: 0;
  height: auto;
  max-width: 311px;
}

.TitleContainer{
  border: 1px solid none;
  text-align: center;
  width: 65%;
  position: absolute;
  left: 0;
  padding: 3% 0% 0% 17%;
  height: 100%;
}

.TitleContainer img{
  padding-top: 2%;
  width: 80px;
}

.TitleContainer h1{
  font-size: 3.2rem;
  font-weight: bold;
}

.TitleContainer h3{
  font-size: 2.2rem;
  font-weight: bold;
  color: #666;
}
.aboutMe{
  position: relative;
  margin-top: 5%;
  border: 1px solid none;
}
</style>




