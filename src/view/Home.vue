<template>
<NavBar @editStart="StartEdit('InfoOffice')"/>


<div class="PosterHome">
  <div class="TitleContainer">
    <h1 class="titleHome">עו"ד שרון נתח תמרי</h1>
    <br>
    <h3>משרד עורכי דין וגישור</h3>
    <br>
    <br>
    <br>
    <h3 class="h1two" style="color: #DFB951;-webkit-font-smoothing: antialiased;">
      <span v-if="editMode == false">{{ this.TitleFirst }}</span>
      <span v-if="editMode == true">
      <input class="TitleFirstInput" :value="this.TitleFirst" @input="TitleFirstPost = $event.target.value"/></span>
    </h3>
  </div>
  <div class="imgContainer">
    <img src="@/assets/photo/laywerWomen2.png">
  </div>
 
</div>

<div class="aboutContainer">
  <h1 class="officeInfo">אודות המשרד</h1>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
  <p>
    <span v-if="editMode == false">{{ this.InfoHome }}</span>
    <span v-if="editMode == true">
     <textarea class="infoUpdate" :value="this.InfoHome" @input="InfoHomePost = $event.target.value" cols="30" rows="10"></textarea></span>
  </p>
  <EditTool v-if="editMode == true" @PostMongo="updateItemInMongoDB()" @EditEnd="StartEdit('InfoOffice')"/>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
</div>

<div class="WorkOptions">
  <h1 class="titleHome">עיסוקי המשרד</h1>
  <div class="OptionsContainer">
    <OptionsContainer v-if="editMode == false" v-for="Option in OptionsWork" :key="Option" :name='Option.name'/>
    <ul v-if="editMode == true">
      <li v-for="(Option,index) in OptionsWork" :key="index">
        <input :value="Option.name" @beforeinput="this.optionsCheck()" @input="OptionsWorkPost[index].name = $event.target.value"/>
      </li>
    </ul>
  </div>
</div>

<div class="OurRecommend">
  <h1 class="FormsHomeH1"><i class="bi bi-stars"></i>מאמרים</h1>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
  <div class="FormDivHome">
      <FormsHome v-for="(form, index) in FormsCards" :name="form.name" :title="form.title" :info="form.info" :img="form.FormImg"  :key="index" />
  </div>

</div>


<div class="empty">
</div>

<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBarcopy.vue'
import OptionsContainer from '@/components/OptionsContainer.vue'
import FormsHome from '@/components/FormsHome.vue'
import Footer from '@/components/Footer.vue'
import EditTool from '@/components/EditTool.vue'





import axios from 'axios'



export default {
  name: 'Home',
  components: {
    NavBar,
    OptionsContainer,
    Footer,
    EditTool,
    FormsHome,
},
  data(){
      return{
        //post
        Infoid:null,
        InfoHome:'',
        InfoHomePost:'',
        OptionsWorkPost:[],
        optionsCheckBollean:false,

        TitleFirstId:null,
        TitleFirst:'',
        TitleFirstPost:'',

        //post
        HomeData:[],
        editMode:false,
        Forms:[],
        FormsCards:[],
        FormsLength:null,
        user:null,
        OptionsWork:[],
      }
      
  },
  created(){
  },
  async mounted(){
    this.GetDataHome()
    this.GetForms()
    this.userData()
  },
  methods: {
    StartEdit(res){
      if(res == 'InfoOffice'){
        if(this.editMode == false){
          this.editMode = true
        }else{
          this.editMode = false
        }
      }  
    },

    async updateItemInMongoDB() {

      if(this.InfoHomePost != this.InfoHome){

        const id = this.Infoid; 
        const updatedData = {
          InfoHome: this.InfoHomePost,
        };

        try {
          const response = await axios.post('/.netlify/functions/UpdateItem', {
            id,
            updatedData,
          });

          // Handle the response, display success message, etc.
          alert('תיאור אודות משרד עודכן')
        } catch (error) {
          console.error('Error:', error);
          // Handle error
        }
      }

      if(this.TitleFirstPost != this.TitleFirst){

        const id = this.TitleFirstId; 
        const updatedData = {
          TitleFirst: this.TitleFirstPost,
        };

        try {
          const response = await axios.post('/.netlify/functions/UpdateItem', {
            id,
            updatedData,
          });

          // Handle the response, display success message, etc.
          alert('תיאור משפט פתיחה עודכן')
        } catch (error) {
          console.error('Error:', error);
          // Handle error
        }
      }

      if (this.optionsCheckBollean == true){

        const id = this.OptionsWorkId; 
        const updatedData = {
          OptionsWork: this.OptionsWorkPost,
        };

        try {
          const response = await axios.post('/.netlify/functions/UpdateItem', {
            id,
            updatedData,
          });

          // Handle the response, display success message, etc.
          alert('תיאור עיסוקי המשרד עודכן')
        } catch (error) {
          console.error('Error:', error);
          // Handle error
        }
      }
      window.location.reload()
      
    },
    optionsCheck(){

      this.optionsCheckBollean = true

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
            this.OptionsWorkId = this.HomeData[i]._id
            this.OptionsWork = this.HomeData[i].OptionsWork
            this.OptionsWorkPost = this.HomeData[i].OptionsWork
            
          }
          if(this.HomeData[i].name == 'TitleFirst'){
            this.TitleFirstId = this.HomeData[i]._id
            this.TitleFirst = this.HomeData[i].TitleFirst
            this.TitleFirstPost = this.HomeData[i].TitleFirst
          }
        }

      }).catch(error => {
          console.log(error);
      }); 

    },
    async GetForms(){
      const storedItems =  JSON.parse(sessionStorage.getItem('FormsItems'));
      if(storedItems){
        console.log("Forms already loaded")
        for(let i=0; i< Object.keys(storedItems).length; i++){
          this.Forms.push((storedItems)[i])
        }
        for(let i=0; i< 4; i++){
          this.FormsCards.push((storedItems)[i])
        }
        console.log(this.Forms)
        console.log(this.FormsCards)
      }else{
        await axios.get(`/.netlify/functions/GetData`).then(response => {
          console.log(response.data);
          this.Forms = response.data

          for (let i = 0; i<this.Forms.length; i++){
            this.setItemsSession(this.Forms[i],i)
          }
          for(let i=0; i< 4; i++){
            this.FormsCards.push(this.Forms[i])
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

input.TitleFirstInput{
  width: 100%;
  direction: rtl !important;
}

/* ---------------- PosterHome --------------- */

.PosterHome{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  top: 0;
  width: 100%;
  height: 500px;
  /* background-color: rgb(231,231,231); */
  /* background-color: rgb(242, 239, 239); */
  /* background-color: #333; */
  background-color: #2b4162;
background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
 
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
  left: 10%;
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
  color: rgb(22, 22, 107);
  text-shadow: 0 3px 1px #34424b, -1px 2px 1px #34424b, -3px 4px 3px #34424b;
}

.TitleContainer h3{
  font-size: 2.2rem;
  font-weight: bold;
  color: #DFB951;
  text-shadow: 0 2px 1px #34424b, -1px 2px 1px #34424b, -3px 3px 2px #34424b;

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


/* ------------------ OurRecommend -------------------- */

.OurRecommend{
  position: relative;
  direction: ltr !important;
  background-image: linear-gradient(to bottom, white, gray);
background-position: center;
background-repeat: no-repeat;
  top: 200px;
  border: 1px solid none;
  width: 100%;
  height: auto;
  padding-bottom: 200px;
}

.OurRecommend .lineGold{
  padding: 30px;
  width: 40%;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

.OurRecommend h1{
  border: 1px solid none;
  position: relative;
  color: black;
  width: fit-content;
  left: 50%;
  transform: translate(-50%);
  padding: 30px;
  font-size: 55px;
}

.OurRecommend .FormDivHome{
  position: relative;
  border: 1px solid none;
  left: 50%;
  transform: translate(-50%);
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


@media (max-width: 1200px) {
  .TitleContainer h3.h1two{
    font-size: 3vw;
  }

  .OurRecommend .lineGold{
    width: 70%;
  }
}


@media (max-width: 800px) {
  .aboutContainer{
    width: 80%;
  }

  .h1two{
    display: none;
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
    left: 0;
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




