<template>
  <div class="slider">
    <img
    :src="require(`@/assets/photo/${PicName}`)"
      class="poster-img"
    />
    <h1 class="headerTitle">{{ TitlePoster }}</h1>
  </div>
  
</template>

<script>



export default {
  name: 'poster',
  props:['PicName','TitlePoster']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slider{
  top: 0 !important;
  position: relative;
  border: 1px solid none;
  width: 100%;
  height: 770px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

h1.headerTitle{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
}

.searchBar{
  border: 1px solid none;
  margin-right: auto;
  margin-left: auto;
  width: 35%;
  transform: translateY(-30rem);
  direction: rtl;
}

.searchBar form input[type="text"]{
  width: 80%;
  direction: rtl;
  border-radius: 0 25px 25px 0;
  padding-right: 3%;
}

.searchBar form button{
  position: relative;
  border-radius: 25px 0 0 25px;
  /* box-shadow: none !important; */
  background-color: #ff80c3;
  transition: 0.3s ease-out;
}
.searchBar form button:hover{
  background-color: #62c4e2;
  transition: 0.3s ease-in;
}

form{
  display: flex;
  flex-direction: row;
  direction: rtl;
  padding: 2px;
}

form input,button{
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: block;
  margin: 0 auto;
  direction: rtl;
  height: 5vh;
  flex-grow: 2;
}


input:focus{
  outline: none;
}

@media (max-width: 1050px){
  
  .searchBar{
    width: 75%;
  }
}


</style>
