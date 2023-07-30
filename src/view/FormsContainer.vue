<template>
  <FormsContainerSkeleton v-if="this.LoadingCheck == true"/>
<NavBar/>

<div class="PosterHome" v-if="this.LoadingCheck == false">
  <div class="ImgDivPoster">
    <img :src=post.imgForm>
  </div>
  <div class="TitleDivPoster">
    <button @click="StartEdit()" class="editButton" v-if="user"><i class="bi bi-pencil-square"></i></button>
    <h1><span v-if="editMode == false">{{ post.title }}</span><span v-if="editMode == true">
      <input :value="post.title" @input="TitlePost = $event.target.value"/></span></h1>
    <div class="SmallText">
      <h4>מאת : שרון נתח תמרי</h4>
      <h4>פורסם : {{ post.postDate }}</h4>
    </div>
  </div>
</div>

<div class="aboutContainer" v-if="this.LoadingCheck == false">
  <h1><span v-if="editMode == false">{{ post.subTitle }}</span><span v-if="editMode == true">
  <input :value="post.subTitle" @input="subTitlePost = $event.target.value"/></span></h1>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
  <p>
    <span v-if="editMode == false">{{ post.info }}</span>
  <span v-if="editMode == true">
  <textarea class="infoUpdate" :value="post.info" @input="infoPost = $event.target.value" cols="30" rows="10"></textarea></span>
  </p>
  <EditTool v-if="editMode == true" @PostMongo="updateItemInMongoDB()" @EditEnd="StartEdit()"/>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
</div>

<div class="CaruselCardsDiv" v-if="this.LoadingCheck == false">
  <h1>עוד מאמרים</h1>
  <div class="CaruselContainer">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="test in test2" :key="test">
      <MoreOptions 
      :name="test.name" :imgForm="test.imgForm" :subTitle="test.subTitle" :PostDate="test.postDate" :key="test"
      />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
  </div>
</div>



<div class="empty">
</div>

<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FormsContainerSkeleton from '@/components/FormsContainerSkeleton.vue'
import EditTool from '@/components/EditTool.vue'
import Footer from '@/components/Footer.vue'
import MoreOptions from '@/components/MoreOptions.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


import axios from 'axios'


export default {
  name: 'FormsContainer',
  components: {
    NavBar,
    FormsContainerSkeleton,
    Footer,
    Carousel,
    Slide,
    Navigation,
    EditTool,
    MoreOptions
},
  data(){
      return{

        // post
        TitlePost:'',
        subTitlePost:'',
        infoPost:'',
        // post

        name:this.$route.params.name,
        id:null,
        user:null,
        test2:[],
        FormsData:[],
        editMode:false,
        LoadingCheck:true,

        // carusel
        settings: {
          itemsToShow: 1,
          snapAlign: 'center',
          dir:'rtl'
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
          // 700px and up
          700: {
            itemsToShow: 3.5,
            snapAlign: 'center',
          },
          // 1024 and up
          1024: {
            itemsToShow: 5,
            snapAlign: 'start',
          },
        },
      }
      
  },
  created(){  
    
  },
  async mounted(){
   await this.userData()
  },
  beforeMount(){
    this.GetData()
    
  },
  beforeUnmount(){
    this.GetData()  
  },
  beforeDestroy(){
    if(this.editMode == true){
      this.editMode = false
    }
  },
  computed: {
    post(){
      return this.FormsData.find((form) => form.name == this.name)
    }
  },
  methods: {
    StartEdit(){
      if(this.editMode == false){
        this.editMode = true
      }else{
        this.editMode = false
      }
    },
    async updateItemInMongoDB() {
      const id = this.id; 
      const updatedData = {
        title : this.TitlePost,
        subTitle : this.subTitlePost,
        info : this.infoPost
      };
      console.log(updatedData)

      try {
        const response = await axios.post('/.netlify/functions/UpdateItemForms', {
          id,
          updatedData,
        });

        // Handle the response, display success message, etc.
        sessionStorage.clear()
        this.GetData()
        this.editMode = false
        alert(this.name + " עודכנה בהצלחה")
      } catch (error) {
        console.error('Error:', error);
        // Handle error
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
    AddToCarusel(){
      
      for(let i=0; i<this.FormsData.length; i++){
        if(this.FormsData[i].name != this.name){
          this.test2.push(this.FormsData[i])
        }
      }
    },
    GetData(){
      const storedItems =  sessionStorage.getItem('FormsItems');
      if(storedItems){
        console.log("Forms already loaded")
        this.newGetData()
      }else{
        axios.get('/.netlify/functions/GetData').then(response => {
          console.log(response.data);
          this.FormsData = response.data

          for (let i = 0; i<this.FormsData.length; i++){
            this.setItemsSession(this.FormsData[i],i)
          }
          sessionStorage.setItem("LoadingCheck", false);
          window.location.reload()
        }).catch(error => {
            console.log(error);
        }); 
      }
    },
    newGetData(){
      let FormItems = JSON.parse(sessionStorage.getItem('FormsItems'))
      let loadingCheckres = JSON.parse(sessionStorage.getItem('LoadingCheck'))
      this.LoadingCheck = loadingCheckres
      for (let i = 0; i<Object.keys(FormItems).length; i++){
        this.FormsData.push(FormItems[i])
        if(FormItems[i].name == this.name){
          this.TitlePost = FormItems[i].title
          this.subTitlePost = FormItems[i].subTitle
          this.infoPost = FormItems[i].info
          this.id = FormItems[i]._id
        }
      }
      this.AddToCarusel()
    },
    setItemsSession(product,index) {
      let cartItems = sessionStorage.getItem('FormsItems');
      cartItems = JSON.parse(cartItems)

      if (cartItems != null) {
              
          if(cartItems[index] == undefined){
              cartItems = {
                  ...cartItems,
                  [index]: product
              }
          }      
      } else {
          cartItems = {
              [index]: product
          }
      }
      sessionStorage.setItem("FormsItems", JSON.stringify(cartItems));
      console.warn('addes session')
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
  height: 150px;
}

/* ---------------- PosterHome --------------- */
.PosterHome{
  border: 1px solid none;
  position: relative;
  display: flex;
  right: 50%;
  transform: translate(50%);
  top: 20px;
  width: 80%;
  height: 25vw;
  background-repeat: no-repeat;
  border:1px solid none;
  direction: ltr;
}

.PosterHome .TitleDivPoster{
  border: 1px solid none;
  background-color: rgb(231,231,231);
  position: relative;
  width: 60%;
  height: 100%;
}

.PosterHome .TitleDivPoster h1{
  position: absolute;
  left: 50%;
  top: 30%;
  width: 100%;
  text-align: center;
  transform: translate(-50%);
  font-size: 2.5vw;
  font-weight: bold;
  color: #2c3e50 ;
}

.PosterHome .TitleDivPoster .SmallText{
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 60%;
  border: 1px solid none;
  width: fit-content;
  text-align: right;
}

.PosterHome .TitleDivPoster .SmallText h4{
  font-size: 1.2vw;
}

.PosterHome .ImgDivPoster{
  border: 1px solid none;
  position: relative;
  width: 40%;
  height: 100%;
}

.PosterHome .ImgDivPoster img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.editButton{
  position:absolute;
  right: 2%;
  top: 2%;
  border: none;
  background: none;
}

.editButton i{
  font-size: 35px;
  transition: ease 0.2s;
}

.editButton i:hover{
  color: rgb(61, 61, 233);
}

input{
  text-align: right;
}
.infoUpdate{
  text-align: right;
  width: 100%;
  height: 100%;
}

/* ---------------- aboutContainer --------------- */

.aboutContainer{
  position: relative;
  padding-top: 70px;
  direction: rtl;
  width: 50%;
  right: 50%;
  transform: translate(50%);
  text-align: right;
}
.aboutContainer h1{
  font-size: 45px;
}

.aboutContainer .lineGold{
  padding: 30px;
  width: 550px;
  position: relative;
  right: 50%;
  transform: translate(50%);
}

.aboutContainer p{
  border: 1px solid none;
  width: 100%;
  font-size: 22px;
  white-space: pre-line;
}

/* -------------- CaruselCardsDiv ------------- */

.CaruselCardsDiv{
  position: relative;
  width: 100%;
  border: 1px solid none;
  height: 400px;
  background-color: rgb(231,231,231);
}

.CaruselCardsDiv h1{
  border: 1px solid none;
  width: fit-content;
  position: absolute;
  right: 5%;
  top: 10%;
}

.CaruselCardsDiv .CaruselContainer{
  border: 1px solid none;
  position: absolute;
  width: 100%;
  bottom: 0;
}


@media (max-width: 800px) {

  .PosterHome{
    width: 100%;
    height: 200px;
  }

  .aboutContainer{
    width: 85%;
  }

  .aboutContainer .lineGold{
    padding: 30px;
    width: 90vw;
    position: relative;
    right: 50%;
    transform: translate(50%);
  }

.PosterHome .TitleDivPoster h1{
  border: 1px solid none;
  position: absolute;
  left: 50%;
  top: 30%;
  width: 100%;
  text-align: center;
  transform: translate(-50%);
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50 ;
}
.PosterHome .TitleDivPoster .SmallText h4{
  font-size: 12px;
}
}
</style>




