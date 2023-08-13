<template>
  <div class="BoxDownload">
    <div class="imgDiv">
      <img :src=this.downloadImg >
    </div>
    <div class="TitleDiv">
      <h3>טופס מס'  {{ numberFile }}</h3>
      <p class="nameDownload">
        {{ name }}
      </p>
      
    </div>
    <div class="ButtonDiv"><a :href="getFileUrl(fileName)" :download="fileName"><i class="bi bi-download"></i></a></div>
    <div class="DateDiv">עודכן בתאריך : {{ date }}</div>
  </div>
</template>

<script>


export default {
    name: "DownloadBox",
    props:['name','date','ImgDownload','numberFile','fileName','downloadImg'],
    data() {
        return {
        }
    },
    created () {
  },
    mounted(){
    }, 
    methods:{
      getFileUrl(fileName) {
        return process.env.BASE_URL + 'files/' + fileName;
    },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* -------------- BoxDownload -------------- */

.BoxDownload{
  border: 1px solid none;
  position: relative;
  height: 400px;
  width: 450px;
  margin-top: 50px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  border-radius: 15px 15px 25px 25px;
  background-color: #F3F3F1;
}
.BoxDownload .imgDiv{
  border: 1px solid none;
  position: absolute;
  height: 55%;
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
  overflow: auto;
  width: 100%;
  height: 37%;
  position: absolute;
  padding: 15px;
  top: 55%;
  font-size: 20px;
}


.BoxDownload .TitleDiv p{
  position: relative;
  border: 1px solid none;
  width: 90%;
  font-size: 18px;
  white-space: pre-line;
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
