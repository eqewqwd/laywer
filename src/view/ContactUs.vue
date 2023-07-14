<template>
<NavBar/>

<div class="ContainerContact">
  <div class="formDiv">

  </div>
  <div class="MapDiv">
    <div class="mapContainer">
      <iframe class="mapsGoogle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53659.51697219783!2d35.057975529346166!3d32.79968780329649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba4c750de845%3A0xc35d23982a81529a!2z15fXmdek15Q!5e0!3m2!1siw!2sil!4v1689283619707!5m2!1siw!2sil" width="600" height="450" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="ContactContainer">
      <h4>המייסדים 56, זכרון יעקב</h4>
      <hr>
      <h4>טלפון: 074-7019771</h4>
      <hr>
      <h4>אימייל: Office@ggh-law.co.il</h4>
      <hr>
      <h4>פקס : 077-3279255</h4>

    </div>
  </div>

</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'ContactUs',
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
  height: 500px;
}

/* ---------------- PosterHome --------------- */

.ContainerContact{
  border: 1px solid none;
  display: flex;
  height: 77vh;
}

.formDiv{
  border: 1px solid none;
  width: 60%;
}
.MapDiv{
  border: 1px solid none;
  position: relative;
  width: 40%;
}

.mapContainer{
  border: 1px solid none;
  position: absolute;
  top: 30%;
  width: 80%;
  height: 30%;
}

iframe{
  width: 100%;
  height: 100%;
}

.ContactContainer{
  border: 1px solid none;
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 30%;
  text-align: center;
}


</style>




