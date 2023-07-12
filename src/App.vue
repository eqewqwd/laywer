<template>
  <router-view></router-view>
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
  font-family: system-ui;
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
  background: rgb(242, 131, 194); 
  border-radius: 10px;
  transition: 0.4s ease-in;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(229, 67, 159);
}

body{
  margin: 0;
  padding: 0;
}
</style>
