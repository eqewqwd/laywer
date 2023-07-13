<template>
<NavBar/>

<div class="PosterHome">
  <div class="imgContainer">
    <img src="@/assets/photo/laywerWomen.png">
  </div>
  <div class="TitleContainer">
    <h1>עו"ד שרון נתח תמרי</h1>
    <br>
    <h3>משרד עורכי דין וגישור</h3>
    <br>
    <img src="@/assets/Logo/agreement.png">
  </div>
</div>

<div class="aboutContainer">
  <h1>אודות המשרד</h1>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
  <p>
    עורכת דין רחל שחר, עוסקת מזה שנים רבות בתחום דיני משפחה ועומדת בראש משרד עו"ד רחל שחר הנחשב לאחד ממשרדי הבוטיק בצמרת משרדי עורכי הדין בדיני משפחה.
    <br>
    <br>
      משרד שנוסד על ידה בשנת 2004 ומאז צמח והתפתח וכיום מעניק מגוון שירותים ומעסיק עורכי דין לענייני משפחה לצורך מתן ייעוץ מקיף ומעמיק. עורכת דין רחל שחר, העוסקת מזה שנים בתחום דיני המשפחה צברה הסמכות כמגשרת מוסמכת וכמוסמכת ייפוי כוח מתמשך וזאת בנוסף לשירותי נוטריון המוענקים במשרד.
    <br>
    <br>
    מאז הסמכתה ייצגה עורכת הדין שחר מאות תיקים סבוכים בתחום דיני המשפחה על כל היבטיו לרבות חלוקת רכוש, ביטול הסכמי ממון, סרבנות גט ועוד… המשרד חרט על דגלו יחס אישי מקצועיות ומסירות ללקוח וזאת באיכות ללא פשרות.
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

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import OptionsContainer from '@/components/OptionsContainer.vue'


// import axios from 'axios'


export default {
  name: 'Home',
  components: {
    NavBar,
    OptionsContainer
},
  data(){
      return{
        OptionsWork:
        [
          {name:'גירושין'},
          {name:'ידועים בציבור'},
          {name:'צוואות וירושות'},
          {name:'אפוטרופסות'},
          {name:'הסכמי ממון'},
          {name:'יפויי כוח מתמשך'},
        ]
      }
      
  },
  created(){

  },
  mounted(){
  },
  methods: {

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
  height: 2000px;
}

/* ---------------- PosterHome --------------- */

.PosterHome{
  position: relative;
  display: flex;
  top: 20px;
  width: 100%;
  height: 465px;
  background-color: rgb(231,231,231);
  border:1px solid none;
  direction: rtl;
}

.imgContainer{
  position: relative;
  border: 1px solid none;
  height: 100%;
  width: 35%;
  padding-right: 200px;
}

.imgContainer img{
  position: absolute;
  left: 0;
  height: auto;
  max-width: 311px;
}

.TitleContainer{
  border: 1px solid none;
  text-align: center;
  width: 65%;
  position: absolute;
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
</style>




