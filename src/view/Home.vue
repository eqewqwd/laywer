<template>
<NavBar/>

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
  <h1>אודות המשרד</h1>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
  <p>
    {{ this.titleOffice }}
  </p>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
</div>

<div class="WorkOptions">
  <h1>עיסוקי המשרד</h1>
  <div class="OptionsContainer">
    <OptionsContainer v-for="Option in OptionsWork" :key="Option" :name='Option.name'/>
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


import axios from 'axios'
import bcrypt from 'bcryptjs';


export default {
  name: 'Home',
  components: {
    NavBar,
    OptionsContainer,
    Footer
},
  data(){
      return{
        Forms:[],
        FormsLength:null,
        OptionsWork:
        [
          {name:'גירושין'},
          {name:'ידועים בציבור'},
          {name:'צוואות וירושות'},
          {name:'אפוטרופסות'},
          {name:'הסכמי ממון'},
          {name:'יפויי כוח מתמשך'},
        ],
        titleOffice:`עורכת דין שרון נתח תמרי, עוסקת מזה שנים רבות בתחום דיני משפחה ועומדת בראש משרד עו"ד שרון נתח תמרי הנחשב לאחד ממשרדי הבוטיק בצמרת משרדי עורכי הדין בדיני משפחה.

משרד שנוסד על ידה בשנת 2004 ומאז צמח והתפתח וכיום מעניק מגוון שירותים ומעסיק עורכי דין לענייני משפחה לצורך מתן ייעוץ מקיף ומעמיק. עורכת דין רחל שחר, העוסקת מזה שנים בתחום דיני המשפחה צברה הסמכות כמגשרת מוסמכת וכמוסמכת ייפוי כוח מתמשך וזאת בנוסף לשירותי נוטריון המוענקים במשרד.

מאז הסמכתה ייצגה עורכת הדין שחר מאות תיקים סבוכים בתחום דיני המשפחה על כל היבטיו לרבות חלוקת רכוש, ביטול הסכמי ממון, סרבנות גט ועוד… המשרד חרט על דגלו יחס אישי מקצועיות ומסירות ללקוח וזאת באיכות ללא פשרות.`
      }
      
  },
  created(){

  },
  async mounted(){
    this.GetData()
    console.log(localStorage.getItem("token"))
    const token = localStorage.getItem("token"); // Replace this with the actual token

    axios
      .get('/.netlify/functions/user-data', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  },
  methods: {
    async GetData(){
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




