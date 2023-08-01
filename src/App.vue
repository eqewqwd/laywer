<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  },
  
}
</script>

<style>
#app {
  /* margin-top: 100px; */
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* font-family: system-ui; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50 !important;
  direction: rtl !important;

}


/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: whitesmoke;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(28, 25, 90); 
  border-radius: 10px;
  transition: 0.4s ease-in;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 41, 169);
}

.carousel__icon{
  color: white;
  background-color: #2e2c2c;
  border: 1px solid none;
  border-radius: 25px;
}

body{
  margin: 0;
  padding: 0;
}
</style>
