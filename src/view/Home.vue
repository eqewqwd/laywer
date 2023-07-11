<template>
<NavBar/>
<poster :PicName="photo1"/>
<ContactContainer/>

<div class="aboutContainer">
  <h1>אודות המשרד</h1>
  <br>
  <p>
    עורכת דין רחל שחר, עוסקת מזה שנים רבות בתחום דיני משפחה ועומדת בראש משרד עו"ד רחל שחר הנחשב לאחד ממשרדי הבוטיק בצמרת משרדי עורכי הדין בדיני משפחה.
    <br>
    <br>
      משרד שנוסד על ידה בשנת 2004 ומאז צמח והתפתח וכיום מעניק מגוון שירותים ומעסיק עורכי דין לענייני משפחה לצורך מתן ייעוץ מקיף ומעמיק. עורכת דין רחל שחר, העוסקת מזה שנים בתחום דיני המשפחה צברה הסמכות כמגשרת מוסמכת וכמוסמכת ייפוי כוח מתמשך וזאת בנוסף לשירותי נוטריון המוענקים במשרד.
    <br>
    <br>
    מאז הסמכתה ייצגה עורכת הדין שחר מאות תיקים סבוכים בתחום דיני המשפחה על כל היבטיו לרבות חלוקת רכוש, ביטול הסכמי ממון, סרבנות גט ועוד… המשרד חרט על דגלו יחס אישי מקצועיות ומסירות ללקוח וזאת באיכות ללא פשרות.
  </p>
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
import Poster from '@/components/poster.vue'
import ContactContainer from '@/components/ContactContainer.vue'
import OptionsContainer from '@/components/OptionsContainer.vue'

// import axios from 'axios'


export default {
  name: 'Home',
  components: {
    NavBar,
    Poster,
    ContactContainer,
    OptionsContainer
},
  data(){
      return{
        photo1:"bgcoverHome.jpg", 
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
    // addEventListener('scroll',this.reveal());

  },
  mounted(){
    
      this.revealHome()
  },
  methods: {
    revealHome(){
      var Homereveals = document.getElementsByClassName('Homereveal');
      
      if(window.screenY == 0){
        setTimeout(() => {
          Homereveals[0].classList.add('active')
          Homereveals[1].classList.add('active')
          Homereveals[2].classList.add('active')
        },100)
      }
    }
    // reveal(){
    //     var reaveals = document.getElementsByClassName('reveal');
    //     console.log(reaveals)
    //     // console.log(reaveals[2].getBoundingClientRect().top)
    //     for(var i=0; i < reaveals.length; i++){
          
    //       var windowheight = window.innerHeight;
    //       var revealTop = reaveals[i].getBoundingClientRect().top;
    //       var reavealpoint = 150;
    //       console.log(revealTop)

    //       if(revealTop < windowheight - reavealpoint){
    //         reaveals[i].classList.add('active')
    //         console.log("dsaasd")
    //       }else{
    //         reaveals[i].classList.remove('active')
    //       }
    //     }
    //   }
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

/* ---------------- aboutContainer --------------- */

.aboutContainer{
  position: relative;
  padding-top: 50px;
  direction: rtl;
  border: 1px solid none;
  width: 50%;
  left: 50%;
  transform: translate(-50%);
  text-align: right;
}
.aboutContainer h1{
  font-size: 45px;
}

.aboutContainer p{
  font-size: 22px;
}

/* ------------------ WorkOptions -------------------- */

.WorkOptions{
  position: relative;
  background-image: linear-gradient(to bottom, purple, black);
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




