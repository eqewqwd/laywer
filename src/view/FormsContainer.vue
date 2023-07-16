<template>
<NavBar/>

<div class="PosterHome">
  <div class="ImgDivPoster">
    <img :src=post.imgForm>
  </div>
  <div class="TitleDivPoster">
    <h1>{{ post.title }}</h1>
    <div class="SmallText">
      <h4>מאת : שרון נתח תמרי</h4>
      <h4>פורסם : {{ post.PostDate }}</h4>
    </div>
  </div>
</div>

<div class="aboutContainer">
  <h1>{{ post.subTitle }}</h1>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
  <p>
    {{ post.info }}
  </p>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
</div>

<div class="CaruselCardsDiv">
  <h1>עוד מאמרים</h1>
  <div class="CaruselContainer">
    <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="test in test2" :key="test">
      <MoreOptions 
      :name="test.name" :imgForm="test.imgForm" :subTitle="test.subTitle" :PostDate="test.PostDate" :key="test"
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
import Footer from '@/components/Footer.vue'
import MoreOptions from '@/components/MoreOptions.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


// import axios from 'axios'


export default {
  name: 'FormsContainer',
  components: {
    NavBar,
    Footer,
    Carousel,
    Slide,
    Navigation,
    MoreOptions
},
  data(){
      return{
        name:this.$route.params.name,
        test2:[],
        test:
        [
        {id:1,name:"yipuy-Koach",imgForm:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg',
        title:"ייפוי כוח",PostDate:'2/4/2020',subTitle:"מהו ייפוי כוח מתמשך?",info:`    ייפוי כוח מתמשך הוא ייפוי כוח אשר נכנס לתוקף כאשר אדם מאבד את צלילות דעתו ואינו מסוגל להחליט עבור עצמו בנושאים רפואיים ו/או רכושיים.

מייפה כוח מתמשך נקרא בחוק:"הממנה" והאדם שהוא בוחר ידאג לענייניו הרפואיים ו/או הרכושיים נקרא בחוק: "הממונה".

ייפוי כוח מתמשך שם במרכז את זכותו של האדם לחיות את חייו בהתאם לבחירותיו ורצונותיו, גם אם יכולותיו או כשרותו המשפטית הוגבלה מסיבה כזו או אחרת, באופן זמני או קבוע.

ייפוי כוח מתמשך הינו הסדר משפטי אשר הוסף במסגרת תיקון לחוק הכשרות המשפטית והאפוטרופסות.

אנו לא יודעים מתי יכולה להילקח מאיתנו – עקב מגבלה פיזית או קוגניטיבית – היכולת לקבל החלטות עצמאיות הקשורות לעתידנו. זה יכול לקרות לכל אחד ואחת מאיתנו, בכל זמן. זו הסיבה שייפוי כוח מתמשך מתאים לכל בגיר מעל גיל 18, ולא רק למי שצופה שכשרותו הפיזית או הקוגניטיבית תיפגע בעתיד הלא רחוק.

על מנת שבבוא העת הממונה (מיופה הכוח) יוכל לפעול בהתאם לציפיות הממנה, על הממנה לרשום הנחיות פרטניות הן בנושא הרכושי והן בנושא הרפואי.`},
{id:2,name:"tzavahot",imgForm:'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/0023E745736A923EE069FF92F8C9E9B6_800x392.20200825T180616.jpg',
        title:"צוואות",PostDate:'14/7/2022',subTitle:"מהי צוואה ?",info:`
        "צוואה", במובן הכללי, היא כל אמרה, אמירה, ציווי, אשר מבקש ומצפה אדם שיעשה למענו או בענייניו לאחר מותו. במובן המשפטי, 

         "צוואה" היא מסמך משפטי בו מורה אדם מה ייעשה ברכושו לאחר מותו, אשר יהא בר-תוקף - אם נעשה באחת הדרכים הקבועות בדין, ולא נפל בו פגם שלא ניתן לתיקון.
        `},  

        ],
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
    this.AddToCarusel()
  },
  mounted(){
  },
  computed: {
    post(){
      return this.test.find((test) => test.name == this.name)
    }
  },
  methods: {
    AddToCarusel(){
      for(let i=0; i<this.test.length; i++){
        if(this.test[i].name != this.name){
          this.test2.push(this.test[i])
        }
      }
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
  height: 1000px;
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




