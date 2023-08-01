<template>
<NavBar/>

<form @submit.prevent="PostForm()" class="FormDiv" id="my-form" v-if="user">
  <label>תמונה:</label>
  <input type="text" v-model="PostImg" required>
  <input type="file" @change="handleFileChange" />
  <br>
  <label>שם URL :</label>
  <input type="text" v-model="PostName" required>
  <br>
  <label>כותרת:</label>
  <input type="text" v-model="PostTitle" required>
  <br>
  <label>תת כותרת:</label>
  <input type="text" v-model="PostSubTitle" required>
  <br>
  <label>תיאור:</label>
  <textarea type="text" v-model="PostInfo" required></textarea>
  <br>
  <button type="submit">הוספת מאמר</button>
</form>

<div v-for="photo in photos" :key="photo._id">
    <img :src="photo.url" alt="Uploaded photo" style="max-width: 200px;" />
  </div>


<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
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
        PostImg:'',
        PostName:'',
        PostTitle:'',
        PostSubTitle:'',
        PostInfo:'',
        user:null,

        selectedFile: null,
        photos: [],
      }
  },
  created(){

  },
  async mounted(){
    await this.userData()
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadPhoto() {
      try {
        const formData = new FormData();
        formData.append("photo", this.selectedFile);

        const response = await axios.post("/.netlify/functions/uploadPhoto", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(response.data.message);
        this.selectedFile = null;
        this.fetchPhotos();
      } catch (error) {
        console.error("Error:", error);
      }
    },
    async fetchPhotos() {
      try {
        const response = await axios.get("/.netlify/functions/uploadPhoto");
        this.photos = response.data;
      } catch (error) {
        console.error("Error:", error);
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
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
    },
    async PostForm(){

      await this.uploadPhoto()

      // sessionStorage.clear()
      
      // let imgForm = this.PostImg
      // let name = this.PostName
      // let title = this.PostTitle
      // let subTitle = this.PostSubTitle
      // let info = this.PostInfo
      
      // const d = new Date();
      // let day = d.getDate()
      // let month = d.getMonth() + 1
      // let year = d.getFullYear()

      // let postDate = day + "/" + month + "/" + year


      // await axios.post('/.netlify/functions/PostForm',{ imgForm,name,title,subTitle,info,postDate }).then(response => {
      //     console.log(name);

      // }).catch(error => {
      //     console.log(error);
      // });

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

.FormDiv button{
  border: none;
  border-radius: 25px;
  height: 50px;
  width: 100%;
  background-color: rgb(210, 183, 30);
  transition: ease 0.2s;
}

.FormDiv button:hover{
  color: white;
  background-color: rgb(243, 213, 45);
}


</style>




