<template>
    <router-link @click="scrollUp()" style="text-decoration: none;color: black;" :to="({ name: 'FormsContainer', params: { name: this.name } })">
  <div class="FormContainerHome">
    <!-- <img :src=post.imgForm> -->
    <div class="imgDiv">
      <img :src=img>
    </div>
    <!-- <h1>{{ title }}</h1> -->
    <h1 class="titleHome">{{ title }}</h1>
    <hr>
    <p class="nameDownload">
      {{ info }}
    </p>
  </div>
</router-link>

</template>

<script>


export default {
    name: "OptionsContainer",
    props:['name','title','info','img'],
    data() {
        return {
        }
    },
    created () {
  },
    mounted(){
    }, 
    methods:{
      scrollUp(){
        window.scrollTo(0,0)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* -------------- FormContainerHome -------------- */

.FormContainerHome{
  position: relative;
  /* margin-left: 20px;*/
  margin-top: 60px; 
  border:1px solid none;
  width: 330px;
  height: 600px;
  text-align: center;
  background-color: whitesmoke;
  border-radius: 5px 5px 12px 12px;
}

.FormContainerHome:hover{
  cursor: pointer;
}

.FormContainerHome:hover .imgDiv img{
  transform: scale(1.2);
}

.FormContainerHome:hover h1{
  font-weight: bold;
}

.FormContainerHome:hover hr{
  color: goldenrod;
}

.imgDiv{
  border: 1px solid none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 35%;
  border-radius: 5px 5px 0px 0px;
  overflow: hidden;
}

.imgDiv img{
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0px 0px;
  transition: ease 0.3s;
}

.FormContainerHome h1{
  position: absolute;
  top: 40%;
  font-size: 25px;
  text-align: center;
  width: 100%;
  color: black;
  transition: ease 0.1s;
}
.FormContainerHome p{
  direction: rtl;
  border: 1px solid none;
  position: absolute;
  bottom: 10%;
  font-size: 15px;
  text-align: center;
  left: 50%;
  transform: translate(-50%);
  width: 70%;
  height: 27%;
  color: black;
  display: -webkit-box;
   -webkit-line-clamp: 7;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
}

.FormContainerHome hr{
  position: absolute;
  top: 50%;
  font-size: 15px;
  left: 50%;
  transform: translate(-50%);
  width: 70%;
  color: black;
}


</style>
