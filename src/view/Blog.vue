<template>
<NavBar @editStart="StartEdit()"/>

<div class="TitleDiv">הבלוג של תמר <i class="bi bi-stars"></i></div>

<div class="backgroundBlog">
  <div class="VideoContainer">
    <VideoContainer v-for="(video,index) in videos" :key="index"
    :SrcVid="video.videoUrl" :paragrafh="video.paragrafh"
    :BlogId="video._id"/>

  </div>
</div>


<Footer/>

</template>

<script>
import NavBar from '@/components/NavBarcopy.vue'
import Footer from '@/components/Footer.vue'
import VideoContainer from '@/components/VideoContainer.vue'
// import EditTool from '@/components/EditTool.vue'
// import emailjs from '@emailjs/browser';


import axios from 'axios'


export default {
  name: 'Blog',
  components: {
    NavBar,
    Footer,
    VideoContainer
    // EditTool
},
  data(){
      return{
        videos: [],
      }
      
  },
  created(){
    this.GetData()
  },
  mounted(){
  },
  methods: {
    GetData(){
        axios.get('/.netlify/functions/GetDataVideos').then(response => {
          console.log(response.data);
          this.videos = response.data

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

.backgroundBlog{
  border: 1px solid none;
  background-image: url('@/assets/photo/BlogBackground.jpg');
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.TitleDiv{
  border: 1px solid none;
  width: 100%;
  height: auto;
  text-align: center;
  background-color: rgb(215, 186, 26);
  font-size: 2vw;
}

.VideoContainer{
  border: 1px solid none;
  display: flex;
  position: relative;
  right: 50%;
  transform: translate(50%);
  width: 90%;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
}


</style>




