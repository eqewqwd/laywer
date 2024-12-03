<template>
<NavBar />
<div class="FormContainer">
  <label>העלאת סרטון :</label>
  <button class="photoAdd" @click="openWigit()"><i class="bi bi-cloud-arrow-up"></i></button>
  <form @submit.prevent="PostForm()" class="FormDiv" id="my-form" v-if="user">
  <div style="display: flex;" class="uploadImgDiv">
    <video v-if="this.PostVideo != null"  class="uploadedImg" width="100%" height="100%" controls >

    <source :src=this.PostVideo>
    </video>
  </div>
  <br>
  <label>תיאור:</label>
  <textarea type="text" v-model="PostInfo"></textarea>
  <br>
  <button class="addButton" type="submit">הוספת בלוג</button>
</form>
</div>




<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBarcopy.vue'
import Footer from '@/components/Footer.vue'


import axios from 'axios'


export default {
  name: 'PostBlogs',
  components: {
    NavBar,
    Footer
},
  data(){
      return{
        PostInfo:'',
        PostVideo:null,
        user:null,

      }
  },
  created(){

  },
  async mounted(){
    await this.userData()

  },
  methods: {
    openWigit(){

      const widget = window.cloudinary.createUploadWidget(
        {cloud_name:"drb3a55va", upload_preset: "Blogs-Videos"},
        (error,result)=>{
          if(!error && result && result.event == "success"){
            console.log("Done uploading ....",result.info.url)
            this.PostVideo = result.info.url      
          }
        }
      )
      widget.open()
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
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    },
    async PostForm(){  
      let videoUrl = this.PostVideo
      let paragrafh = this.PostInfo
      
      const data = { 
        videoUrl,
        paragrafh,
       }


      await axios.post('/.netlify/functions/PostBlog',data).then(response => {
          alert("בלוג פורסם")

      }).catch(error => {
          console.log(error);
      });

    },
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

/* ------------- FormDiv ------------- */

.FormContainer{
  position: relative;
  border: 1px solid none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  right: 50%;
  transform: translate(50%);
  margin-top: 3%;
}

.FormDiv input{
  height: 35px;
  width: 100%;
}

.FormDiv textarea{
  height: 150px;
  width: 100%;
}

.FormDiv button.addButton{
  border: none;
  border-radius: 25px;
  height: 50px;
  width: 100%;
  background-color: rgb(210, 183, 30);
  transition: ease 0.2s;
}

.FormDiv button.addButton:hover{
  color: white;
  background-color: rgb(243, 213, 45);
}

button.photoAdd{
  width: 100px;
  border: none;
  border-radius: 25px;
  background-color: rgb(221, 197, 38);
  transition: ease 0.2s;
  height: fit-content;
}

button.photoAdd i{
  font-size: 30px;
}

button.photoAdd:hover{
  background-color: rgb(254, 223, 21);
}

video.uploadedImg{
  position: relative;
  border: 1px solid black;
  right: 5%;
  width: 250px;
  height: 200px;
}

video.uploadedImg source{
  width:100%;
  height: 100%;
}


</style>




