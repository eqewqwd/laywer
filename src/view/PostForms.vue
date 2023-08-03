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
  <button type="submit">הוספת מאמר</button>
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
    },
    async uploadPhoto() {
        const formData = new FormData();
        formData.append('file', this.selectedFile);

        console.log(this.selectedFile)

        const signResponse = await axios.get('https://api.cloudinary.com/v1_1/"ds13xlamk"/image/upload');
        const signData = await signResponse.json();

        console.log(signData)

          
        // // Construct the Cloudinary upload URL
    
        // // Append parameters to the form data. The parameters that are signed using 
        // // the signing function (signuploadform) need to match these.
        //   let file = this.selectedFile;
        //   formData.append("file", file);
        //   formData.append("api_key", signData.apikey);
        //   formData.append("timestamp", signData.timestamp);
        //   formData.append("signature", signData.signature);
        //   formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
        //   formData.append("folder", "signed_upload_demo_form");
    

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




