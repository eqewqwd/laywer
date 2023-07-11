<template>
<NavBar/>

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

/* ---------------- aboutContainer --------------- */
</style>




