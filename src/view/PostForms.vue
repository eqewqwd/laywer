<template>
<NavBar />

<form @submit.prevent="PostForm()" class="FormDiv" id="my-form" v-if="user">
  <label>העלאת תמונה :</label>
  <div style="display: flex;" class="uploadImgDiv">
    <button class="photoAdd" @click="openWigit()"><i class="bi bi-cloud-arrow-up"></i></button>
    <img class="uploadedImg" v-if="this.PostImg != null" :src=this.PostImg>
  </div>
  <br>
  <label>שם URL :</label>
  <input type="text" v-model="PostName">
  <br>
  <label>כותרת:</label>
  <input type="text" v-model="PostTitle">
  <br>
  <label>תת כותרת:</label>
  <input type="text" v-model="PostSubTitle">
  <br>
  <label>תיאור:</label>
  <textarea type="text" v-model="PostInfo"></textarea>
  <br>
  <button class="addButton" type="submit">הוספת מאמר</button>
</form>


<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBarcopy.vue'
import Footer from '@/components/Footer.vue'


import axios from 'axios'


export default {
  name: 'PostForms',
  components: {
    NavBar,
    Footer
},
  data(){
      return{
        PostName:'',
        PostTitle:'',
        PostSubTitle:'',
        PostInfo:'',
        PostImg:null,
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
        {cloud_name:"dqxeeegst", upload_preset: "Forms-img"},
        (error,result)=>{
          if(!error && result && result.event == "success"){
            console.log("Done uploading ....",result.info.url)
            this.PostImg = result.info.url      
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
      console.log(this.PostImg)
      sessionStorage.clear()
      
      let FormImg = this.PostImg
      let name = this.PostName
      let title = this.PostTitle
      let subTitle = this.PostSubTitle
      let info = this.PostInfo
      
      const d = new Date();
      let day = d.getDate()
      let month = d.getMonth() + 1
      let year = d.getFullYear()

      let postDate = day + "/" + month + "/" + year

      const data = { 
        FormImg,
        name,
        title,
        subTitle,
        info,
        postDate
       }


      await axios.post('/.netlify/functions/PostForm',data).then(response => {
          console.log(name);

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

.FormDiv{
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

img.uploadedImg{
  position: relative;
  border: 1px solid black;
  right: 5%;
  width: 250px;
  height: 200px;
}


</style>




