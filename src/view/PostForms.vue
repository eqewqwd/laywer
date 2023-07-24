<template>
<NavBar/>

<form class="FormDiv" id="my-form">
  <label>תמונה:</label>
  <input type="text" v-model="PostImg" required>
  <br>
  <label>שם:</label>
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
  <button type="submit" @click="PostForm()">Submit</button>
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
        PostImg:'',
        PostName:'',
        PostTitle:'',
        PostSubTitle:'',
        PostInfo:'',
      }
  },
  created(){

  },
  mounted(){
  },
  methods: {
    async PostForm(){

      sessionStorage.clear()
      
      let imgForm = this.PostImg
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
          console.log("work post");
      }).catch(error => {
          console.log(error);
      });
    }
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
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  right: 50%;
  transform: translate(50%);
  margin-top: 5%;
}


</style>




