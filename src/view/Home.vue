<template>
<NavBar :user="this.user"/>

<div class="PosterHome">
  <div class="TitleContainer">
    <h1>עו"ד שרון נתח תמרי</h1>
    <br>
    <h3>משרד עורכי דין וגישור</h3>
    <br>
    <img src="@/assets/Logo/agreement.png">
  </div>
  <div class="imgContainer">
    <img src="@/assets/photo/laywerWomen2.png">
  </div>
</div>

<div class="aboutContainer">
  <h1>אודות המשרד <button @click="StartEdit('InfoOffice')" class="editButton" v-if="user"><i class="bi bi-pencil-square"></i></button></h1>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
  <p>
    <span v-if="editModeHomeInfo == false">{{ this.InfoHome }}</span>
    <span v-if="editModeHomeInfo == true">
     <textarea class="infoUpdate" :value="this.InfoHome" @input="InfoHomePost = $event.target.value" cols="30" rows="10"></textarea></span>
  </p>
  <EditTool v-if="editModeHomeInfo == true" @PostMongo="updateItemInMongoDB()" @EditEnd="StartEdit('InfoOffice')"/>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
</div>

<div class="WorkOptions">
  <h1>עיסוקי המשרד</h1>
  <div class="OptionsContainer">
    <OptionsContainer v-for="Option in OptionsWork" :key="Option" :name='Option.name'/>
  </div>
</div>

<div class="OurReccomended">
  <div class="TextCenter">
    <h2><i class="bi bi-stars"></i> מאמרים </h2>
  </div>
  <div class="carousel">
    <div class="carousel-wrapper">
      <div class="card-container">
          <OptionsContainer v-for="(cake, index) in visibleCards" :key="index" class="card"
          :name='cake.name' @localAddProduct="addToCartLocal($event)"/> 
      </div>
    </div>
    <button class="carousel-button prev" @click="goToPrevSlide" :disabled="currentSlide === 0">&#10094;</button>
    <button class="carousel-button next" @click="goToNextSlide" :disabled="currentSlide >= this.cakesLength - slidesToShow">&#10095;</button>
  </div>
</div>

<div class="empty">
</div>

<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import OptionsContainer from '@/components/OptionsContainer.vue'
import Footer from '@/components/Footer.vue'
import EditTool from '@/components/EditTool.vue'



import axios from 'axios'
import bcrypt from 'bcryptjs';


export default {
  name: 'Home',
  components: {
    NavBar,
    OptionsContainer,
    Footer,
    EditTool
},
  data(){
      return{

        //post
        Infoid:null,
        InfoHomePost:'',
        //post
        HomeData:[],
        InfoHome:'',
        editModeHomeInfo:false,
        Forms:[],
        FormsLength:null,
        user:null,
        OptionsWork:[],
        currentSlide: 0,
        slidesToShow: 3,
        slideWidth: 0,
      }
      
  },
  created(){

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlideWidth);
  },
  computed: {
    visibleCards() {
      return this.OptionsWork.slice(this.currentSlide, this.currentSlide + this.slidesToShow);
    }
  },
  async mounted(){
    this.GetDataHome()
    this.GetForms()
    this.userData()
    this.slideWidth = this.$el.offsetWidth / this.slidesToShow;
    window.addEventListener('resize', this.updateSlideWidth);
   
  },
  methods: {
    StartEdit(res){
      if(res == 'InfoOffice'){
        if(this.editModeHomeInfo == false){
          this.editModeHomeInfo = true
        }else{
          this.editModeHomeInfo = false
        }
      }
      
    },
    goToPrevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    goToNextSlide() {
      if (this.currentSlide < this.cakesLength - this.slidesToShow) {
        this.currentSlide++;
      }
    },
    updateSlideWidth() {
      this.slideWidth = this.$el.offsetWidth / this.slidesToShow;
    },
    async updateItemInMongoDB() {
      const id = this.Infoid; 
      const updatedData = {
        InfoHome: this.InfoHomePost,
      };
      console.log(updatedData)

      try {
        const response = await axios.post('/.netlify/functions/UpdateItem', {
          id,
          updatedData,
        });

        // Handle the response, display success message, etc.
        alert('תיאור אודות משרד עודכן')
        window.location.reload()
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    },
    async GetDataHome(){

      await axios.get('/.netlify/functions/GetDataHome').then(response => {
        console.log(response.data);
        this.HomeData = response.data

        for (let i = 0; i<this.HomeData.length; i++){
          if(this.HomeData[i].name == 'InfoHome'){
            this.Infoid = this.HomeData[i]._id
            this.InfoHome = this.HomeData[i].InfoHome
            this.InfoHomePost = this.HomeData[i].InfoHome
          }
          if(this.HomeData[i].name == 'OptionsWork'){
            this.OptionsWork = this.HomeData[i].OptionsWork
          }
        }

      }).catch(error => {
          console.log(error);
      }); 

    },
    async GetForms(){
      const storedItems =  sessionStorage.getItem('FormsItems');
      if(storedItems){
        console.log("Forms already loaded")
      }else{
        await axios.get('/.netlify/functions/GetData').then(response => {
          console.log(response.data);
          this.Forms = response.data

          for (let i = 0; i<this.Forms.length; i++){
            this.setItemsSession(this.Forms[i],i)
          }
          sessionStorage.setItem("LoadingCheck", false);
        }).catch(error => {
            console.log(error);
        }); 
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
    newGetData(){
      const storedItems =  sessionStorage.getItem('FormsItems');
      let FormsRes = JSON.parse(storedItems)

      for (let i = 0; i<Object.keys(FormsRes).length; i++){
        this.setItemsSession(FormsRes[i],i)
      }
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

/* ---------------- PosterHome --------------- */

.PosterHome{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  top: 20px;
  width: 100%;
  height: 465px;
  background-color: rgb(231,231,231);
  border:1px solid none;
  direction: ltr;
}

.imgContainer{
  position: relative;
  border: 1px solid none;
  height: 100%;
  width: 35%;
  padding-right: 200px;
  /* overflow: hidden; */
}

.imgContainer img{
  position: absolute;
  left: 0;
  bottom: 0;
  height: auto;
  max-width: 250px;
}

.TitleContainer{
  border: 1px solid none;
  text-align: center;
  width: 65%;
  position: relative;
  left: 0;
  padding: 3% 0% 0% 17%;
  height: 100%;
}

.TitleContainer img{
  padding-top: 2%;
  width: 80px;
}

.TitleContainer h1{
  font-size: 3.2rem;
  font-weight: bold;
}

.TitleContainer h3{
  font-size: 2.2rem;
  font-weight: bold;
  color: #666;
}

.editButton{
  position:relative;
  right: 2%;
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
  border: 1px solid none;
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
  font-size: 22px;
  white-space: pre-line;
}

/* ------------------ WorkOptions -------------------- */

.WorkOptions{
  position: relative;
  direction: ltr !important;
  background-image: linear-gradient(to bottom, rgb(14, 21, 84), black);
background-position: center;
background-repeat: no-repeat;
  top: 80px;
  border: 1px solid none;
  width: 100%;
  height: 50vh;
}

.WorkOptions h1{
  color: white;
  text-align: center;
  padding: 30px;
  font-size: 45px;
}

.WorkOptions .OptionsContainer{
  position: relative;
  top: 30px;
  direction: rtl;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid none;
  width: 70%;
  height: 32vh;
  left: 50%;
  transform: translate(-50%);
}


  /* ------------ OurReccomended ---------------- */
.OurReccomended{
  position: relative;
  top: 10vh;
  width: 100%;
  height: 85vh;
  background-color: rgb(229, 224, 225);
}
.TextCenter{
  border: 1px solid none;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 7%;
  z-index: 23123213321321;
}
.TextCenter h2{
  font-size: 45px;
}

.TextCenter h2 i{
  color: rgb(210, 178, 2);
}

.carousel {
  border: 1px solid none;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-wrapper {
  border: 1px solid none;
  display: flex;
  transition: transform 0.9s;
}

.card-container {
  border: 1px solid none;
  width: 100%;
  position: absolute;
  padding-left: 20px;
  top: 50%; right: 50%;
  transform: translate(50%,-50%);
  display: flex;
  justify-content: center;
}

.card {
  flex: 0 0 auto;
  margin-right: 20px;
  height: auto;
  width: calc(70%/3);
  box-sizing: border-box;
}

.card-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.card-description {
  font-size: 14px;
  color: #777;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 30px;
  color: #777;
  cursor: pointer;
  padding: 10px;
}

.carousel-button.next {
  left: 80px;
}

.carousel-button.prev {
  right: 80px;
}



@media (max-width: 800px) {
  .aboutContainer{
    width: 80%;
  }

  .WorkOptions{
    height: 750px;
  }
}

@media (max-width: 750px) {

  .PosterHome{
    display: flex;
    flex-direction: row;
    position: relative;
    top: 0;
    height: 940px;
  }
  .TitleContainer{
    border: 1px solid none;
    width: 100%;
    height: 33%;
    padding: 12% 0% 0% 3%;
  }

  .TitleContainer h1{
    font-size: 10vw;
    font-weight: bold;
  }

  .TitleContainer h3{
    font-size: 7vw;
    font-weight: bold;
    color: #666;
  }
  .TitleContainer img{
    padding-top: 2%;
    width: 70px;
  }

  .imgContainer{
    position: relative;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid none;
    height: 68.35%;
    width: 310px;
  }
  .imgContainer img{
    bottom: 2%;
    max-width: 100%;
  }

}

@media (max-width: 560px) {
  .aboutContainer .lineGold{
    padding: 30px;
    width: 100%;
    position: relative;
    right: 50%;
    transform: translate(50%);
  }
  .imgContainer{
    width: 335px;
  }
}

</style>




