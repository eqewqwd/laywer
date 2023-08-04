<template>
<NavBar/>

<form @submit.prevent="uploadPhoto()" class="FormDiv" id="my-form" v-if="!user">
  <label>תמונה:</label>
  <input type="file" ref="file" @change="handleFileChange" />
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
  <button type="submit" :disabled="this.selectedFileLength < 1">הוספת מאמר</button>
</form>


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
        PostName:'',
        PostTitle:'',
        PostSubTitle:'',
        PostInfo:'',
        user:null,

        selectedFile: null,
        selectedFileLength:null,
        formData:null,
        result:null,



      }
  },
  created(){

  },
  async mounted(){
    await this.userData()
  },
  methods: {
    handleFileChange() {
      this.selectedFile = this.$refs.file.files[0];
      this.selectedFileLength = this.$refs.file.files.length;
    },
    async uploadPhoto() {
        
       let reader = new FileReader();
       reader.readAsDataURL(this.selectedFile);
       console.log("start !")

       reader.onload = async () => {
        const fileContents = reader.result;
        const cloudName = 'ds13xlamk';
        const formData = new FormData();
        formData.append("api_key", "316151265885439");
        formData.append("api_secret", "MjbIR0Jje-q4FJyfzDCdky-WVHQ");
        formData.append("file", fileContents);
        formData.append("cloud_name", cloudName);
        formData.append("upload_preset", "test");

        console.log(formData)
        const cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${cloudName}/upload/`
        // let requestObj = {
        //   url: cloudinaryUploadURL,
        //   methods: "POST",
        //   data: this.formData,
        //   onUploadProgress: function(progressEvent){
        //     console.log("progress",progressEvent);
        //     this.progress = Math.round(
        //       (progressEvent.loaded * 100.0) / progressEvent.total
        //     );
        //     console.log(this.progress)

        //   }.bind(this)
        // };

        const headerPost = {
          headers: {
              "X-Requested-With": "XMLHttpRequest",
              "Allow-Control-Allow-Origin": "*" 
          },
        }
        console.log("finish settings !")
         await axios.post('/.netlify/functions/CloudinaryPost',cloudinaryUploadURL,formData,headerPost)
         .then(res =>{
          const result = res.data;
          console.log(result)
          console.log("public_id",result.public_id)

         })
         .catch(err =>{
          console.log(err)
         })

         console.log("finish post !")
        };
    

        // const response = await axios.post('/.netlify/functions/postImg', formData);
        // console.log(response)

        
          // await this.PostForm(base64String)
          this.selectedFile = null;
      
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
    async PostForm(imgProp){
      
      sessionStorage.clear()
      
      let imgForm = imgProp
      let name = this.PostName
      let title = this.PostTitle
      let subTitle = this.PostSubTitle
      let info = this.PostInfo
      
      const d = new Date();
      let day = d.getDate()
      let month = d.getMonth() + 1
      let year = d.getFullYear()

      let postDate = day + "/" + month + "/" + year


      await axios.post('/.netlify/functions/PostForm',{ imgForm,name,title,subTitle,info,postDate }).then(response => {
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




