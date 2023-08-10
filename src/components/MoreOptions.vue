<template>
  <router-link @click="scrollUp()" style="text-decoration: none;color: black; !important" :to="({ name: 'FormsContainer', params: { name: this.name } })">
  <div class="BoxDownload">
    <div class="imgDiv"><img :src="imgForm"></div>
    <div class="TitleDiv">
      <h3 class="H3contras">{{ subTitle }}</h3>
      
    </div>
    <div class="DateDiv"><span class="SpanContras">עודכן בתאריך : {{ PostDate }}</span></div>
  </div>
</router-link>
</template>

<script>


export default {
    name: "MoreOptions",
    props:['name','imgForm','subTitle','PostDate'],
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

/* -------------- BoxDownload -------------- */

.BoxDownload{
  border: 1px solid none;
  position: relative;
  height: 250px;
  width: 350px;
  margin-top: 50px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  border-radius: 15px 15px 25px 25px;
  background-color: #F3F3F1;
}
.BoxDownload .imgDiv{
  border: 1px solid none;
  position: absolute;
  height: 60%;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
}

.BoxDownload .imgDiv img{
  border-radius: 15px 15px 0px 0px;
  width: 100%;
  height: 100%;
}

.BoxDownload .TitleDiv{
  border: 1px solid none;
  position: absolute;
  height: 40%;
  width: 100%;
  padding: 15px;
  text-align: right;
  bottom:0;
}
.BoxDownload .TitleDiv h3{
  font-size: 22px;
}

.BoxDownload .ButtonDiv{
  border: 1px solid none;
  position: absolute;
  width: fit-content;
  left: 0;
  bottom: 0;
  padding: 0px 18px 6px 18px;
  border-radius: 0px 0px 0px 25px;
}

.BoxDownload .ButtonDiv i{
  color: black;
  font-size: 26px;
  transition: ease 0.2s;
  cursor: pointer;
}

.BoxDownload .ButtonDiv i:hover{
  color: rgb(15, 15, 172);
}

.BoxDownload .DateDiv{
  border: 1px solid none;
  position: absolute;
  width: fit-content;
  right: 0;
  bottom: 0;
  padding: 0px 18px 6px 18px;
  border-radius: 0px 0px 25px 0px;
}

</style>
