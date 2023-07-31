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

<div class="OurRecommend">
  <h1>מאמרים</h1>
  <div class="carousel">
    <div class="carousel-items" :style="{transform: 'translateX(' + translateValue + 'px)'}">
      <FormsHome v-for="(item, index) in FormsCards" :title="item.title" :info="item.info"  :key="index" />
    </div>
  </div>
  <div class="navigation">
    <i @click="prev" @mouseover="addClassFill('left')" @mouseleave="addClassFill('remove')" class="bi bi-arrow-left-circle"></i>
    <i @click="next" @mouseover="addClassFill('right')" @mouseleave="addClassFill('remove')" class="bi bi-arrow-right-circle"></i>
  </div>

</div>


<div class="empty">
</div>

<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import OptionsContainer from '@/components/OptionsContainer.vue'
import FormsHome from '@/components/FormsHome.vue'
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
    EditTool,
    FormsHome
},
  data(){
      return{
        carouselItems: 
        [
        {title:'ייפוי כוח',info:'דגשדגשד גשדג שדגשדגש דגש דגשדג שדגשד גשדג שדגשד גשדגשד גשדגש דגשדג שדגשד גשדגש דגשדג שדגשד גשדג שדגשד גשדג שגד שדגש דגש דג'},
        {title:'צוואות',info:' שדגשד גשדגשדג שדגשדגשד גשדגשדג שדגשדגש דגשדגד שגדשגדשגד שגשדגשדג שדגשדגשדג שד'},
        {title:'נזיקין',info:'גשדג שדגשדג שדגשדגשדג שדגשדג שדגשדגשד גדשגשדג שדגשדג שדגשדג שדגשד '},
        {title:'מקרקעין',info:'ג שדגש גשדג שדגש דגשדג שדגש דגשד גשדגש דגשדג שדגש דגש דג'},
        {title:'חובות',info:' דגשד גשד גשדג שד גשד גשד גשדגשדג שש גדשגד שגדשג דשגדשג דשגש גשג'},
        {title:'רכב',info:'שגשד גשגש דגשדג שגש דגש גד שךצ שך גךש גךשל גךשל גשךלד גש'}

        //{title:'',info:''},
        ],
        currentIndex: 0,
        //post
        Infoid:null,
        InfoHomePost:'',
        //post
        HomeData:[],
        InfoHome:'',
        editModeHomeInfo:false,
        Forms:[],
        FormsCards:[],
        FormsLength:null,
        user:null,
        OptionsWork:[],
        downloadData:
        [
        {name:'טופס למתן טיפול רפואי ראשוני לעובד עצמאי שנפגע בתאונת עבודה',date:'22/7/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg',numberFile:'283'},
          {name:'טופס תביעה להכרה במחלת מקצוע או ליקוי רפואי כתוצאה מתנאי עבודה',date:'10/7/2020',ImgDownload:'https://www.cisme.it/scrl/wp-content/uploads/2020/06/coronavirus-3d-vettoriale-realistico-in-sfondo-blu-scuro-cellula-virus-corona-malattia-del-virus-wuhan_8306-489.jpg',numberFile:'202'},
          {name:'טופס תביעה לתשלום דמי פגיעה והודעה על פגיעה בעבודה',date:'14/10/2022',ImgDownload:'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/0023E745736A923EE069FF92F8C9E9B6_800x392.20200825T180616.jpg',numberFile:'211'},
          {name:'כתב ויתור סודיות רפואית מי שנפגע בעבודה או במסגרת פעולת התנדבות',date:'4/5/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg',numberFile:'7101'},
          {name:'שאלון למעסיק על אירוע הדבקה בקורונה',date:'5/1/2022',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg',numberFile:'257'},
          {name:'שאלון לעובד שכיר על אירוע הדבקה בקורונה',date:'6/2/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg',numberFile:'258'},
          {name:'טופס למתן טיפול רפואי ראשוני לעובד עצמאי שנפגע בתאונת עבודה',date:'22/7/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg',numberFile:'283'},
          {name:'טופס תביעה להכרה במחלת מקצוע או ליקוי רפואי כתוצאה מתנאי עבודה',date:'10/7/2020',ImgDownload:'https://www.cisme.it/scrl/wp-content/uploads/2020/06/coronavirus-3d-vettoriale-realistico-in-sfondo-blu-scuro-cellula-virus-corona-malattia-del-virus-wuhan_8306-489.jpg',numberFile:'202'},
          {name:'טופס תביעה לתשלום דמי פגיעה והודעה על פגיעה בעבודה',date:'14/10/2022',ImgDownload:'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/0023E745736A923EE069FF92F8C9E9B6_800x392.20200825T180616.jpg',numberFile:'211'},
          {name:'כתב ויתור סודיות רפואית מי שנפגע בעבודה או במסגרת פעולת התנדבות',date:'4/5/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg',numberFile:'7101'},
          {name:'שאלון למעסיק על אירוע הדבקה בקורונה',date:'5/1/2022',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg',numberFile:'257'},
          {name:'שאלון לעובד שכיר על אירוע הדבקה בקורונה',date:'6/2/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg',numberFile:'258'},
        ]
      }
      
  },
  created(){

  },
  async mounted(){
    this.GetDataHome()
    this.GetForms()
    this.userData()
  },
  computed: {
    translateValue() {
      return this.currentIndex * -100;
    }
  },
  methods: {
    addClassFill(option){
      const arrowleft = document.getElementsByTagName('i')[0]
      const arrowright = document.getElementsByTagName('i')[1]
      console.log(arrowright.classList[1])
      
      if(arrowleft.classList[1] == 'bi-arrow-left-circle-fill' & option == 'remove'){
        arrowleft.classList.replace('bi-arrow-left-circle-fill' , 'bi-arrow-left-circle')
      }else if(arrowright.classList[1] == 'bi-arrow-right-circle-fill' & option == 'remove'){
        arrowright.classList.replace('bi-arrow-right-circle-fill' , 'bi-arrow-right-circle')
      }

      if(option == "left"){
        arrowleft.classList.replace('bi-arrow-left-circle' , 'bi-arrow-left-circle-fill')
      }else if(option == "right"){
        arrowright.classList.replace('bi-arrow-right-circle' , 'bi-arrow-right-circle-fill')
      }
    },
    prev() {
      const arrowleft = document.getElementsByTagName('i')[0]
      const arrowright = document.getElementsByTagName('i')[1]

      if(this.currentIndex > 0){
        this.currentIndex -= 3.2;
        arrowright.style.color="black";
        arrowright.style.userSelect="auto";
      }
      if(this.currentIndex == 0 ||this.currentIndex == 8.881784197001252e-16){
        arrowleft.style.userSelect="none";
        arrowleft.style.color="#777";
      }
      console.log(this.currentIndex)
    },
    next() {
      const arrowleft = document.getElementsByTagName('i')[0]
      const arrowright = document.getElementsByTagName('i')[1]

      if(parseInt(this.currentIndex) != parseInt(2 * 3.2)){
        this.currentIndex += 3.2;
        arrowleft.style.color="black";
        arrowleft.style.userSelect="auto";
      }
      if(parseInt(this.currentIndex) == parseInt(2 * 3.2)){
        arrowright.style.userSelect="none";
        arrowright.style.color="#777";

      }
      console.log(parseInt(this.currentIndex))
      console.log(parseInt(3.2 * this.carouselItems.length))
    },
    StartEdit(res){
      if(res == 'InfoOffice'){
        if(this.editModeHomeInfo == false){
          this.editModeHomeInfo = true
        }else{
          this.editModeHomeInfo = false
        }
      }
      
      
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
      const storedItems =  JSON.parse(sessionStorage.getItem('FormsItems'));
      if(storedItems){
        console.log("Forms already loaded")
        for(let i=0; i< Object.keys(storedItems).length; i++){
          this.Forms.push((storedItems)[i])
        }
        for(let i=0; i< 6; i++){
          this.FormsCards.push((storedItems)[i])
        }
        console.log(this.Forms)
        console.log(this.FormsCards)
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
  height: 60vh;
}

.OurRecommend h1{
  color: black;
  text-align: center;
  padding: 30px;
  font-size: 45px;
}

.carousel {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid none;
  width: 1300px;
  overflow: hidden;
  
}

.carousel-items {
  display: flex;
  width: 23123131321px;
  transition: transform 0.3s ease;
}

.item {
  flex: 0 0 100px;
  height: 100px;
  margin: 10px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation {
  border: 1px solid none;
  position: absolute;
  top: 45%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.navigation i:first-child{
  margin-left: 4%;
  user-select: none;
  color: #777;
}

.navigation i:last-child{
  margin-right: 4%;
}

i {
 font-size: 35px;
 color: black;
}

i:hover{
  cursor: pointer;
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




