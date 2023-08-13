<template>
  <div class="BoxDownload">
    <div class="imgDiv">
      <img v-if="editMode == false" :src=this.downloadImg >
      <img v-if="editMode == true" :src=this.imgPost >
      <i @click="this.openWigit()" v-if="editMode == true && user" class="bi bi-cloud-upload"></i>
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
    props:['name','date','ImgDownload','numberFile','fileName'],
    data() {
        return {
          editMode:false,
          downloadImg:'',
          user:null,
        }
    },
    created () {
  },
    mounted(){
      this.GetData()
    }, 
    methods:{
      getFileUrl(fileName) {
        return process.env.BASE_URL + 'files/' + fileName;
    },
    openWigit(){

const widget = window.cloudinary.createUploadWidget(
  {cloud_name:"drb3a55va", upload_preset: "download-img"},
  (error,result)=>{
    if(!error && result && result.event == "success"){
      console.log("Done uploading ....",result.info.url)
      this.downloadImg = result.info.url      
    }
  }
)
widget.open()
},
GetData(){
        axios.get('/.netlify/functions/GetDataDownload').then(response => {
          console.log(response.data);
          let resres = response.data
          for (let i = 0; i<resres.length; i++){
            this.id = resres[i]._id
            this.downloadImg = resres[i].downloadImg
          }

        }).catch(error => {
            console.log(error);
        }); 
    },
    async updateItemInMongoDB() {

if(this.downloadImg != this.downloadImg){
  const id = this.id; 
  const updatedData = {
    downloadImg : this.downloadImg
  };

  try {
    const response = await axios.post('/.netlify/functions/UpdateItemDownload', {
      id,
      updatedData,
    });

    // Handle the response, display success message, etc.
    this.GetData()
    this.editMode = false
    alert(" !תמונה עודכנה בהצלחה")
  } catch (error) {
    console.error('Error:', error);
    // Handle error
  }
}else{
  this.editMode = false
}

},
async userData(){

 
var token = localStorage.getItem("token"); // Replace this with the actual token

await axios
.get('/.netlify/functions/user-data', {
headers: {
Authorization: `Bearer ${token}`
}
})
.then(response => {
console.log(response.data)
this.user = response.data
this.editMode = true
})
.catch(error => {
console.error('Error fetching user data:', error);
});
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
