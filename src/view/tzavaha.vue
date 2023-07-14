<template>
<NavBar/>

<div class="PosterHome">
  <div class="ImgDivPoster">
    <img src="@/assets/photo/DownloadBackground.png">
  </div>
  <div class="TitleDivPoster">
    <h1>צוואות</h1>
    <div class="SmallText">
      <h4>מאת : שרון נתח תמרי</h4>
      <h4>פורסם : 2/2/2021</h4>
    </div>
  </div>
</div>

<div class="aboutContainer">
  <h1>מהי צוואה?</h1>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
  <p>
המטרה העיקרית של עריכת צוואה היא לאפשר לאדם להחליט מה ייעשה ברכושו לאחר מותו. אם אדם נפטר ולא הותיר אחריו צוואה אזי חוק הירושה יורה כיצד יש לנהוג בעיזבונו. החוק מגדיר מיהם היורשים במצבים שונים: במקרה בו הנפטר היה נשוי במותו, במצב בו הותיר אחריו ילדים, במצב בו הנפטר היה רווק ולא היו לו ילדים ואף במצב בו מדובר בנפטר ערירי שכלל לא הותיר משפחה קרובה או רחוקה אחריו.
<br>
<br>
מי שאינו מכיר את הוראות חוק הירושה, עלול להיות מופתע מהגילוי כיצד מורה החוק לחלק את עזבונו, ולאן יכול להגיע רכושו בהעדר צוואה. הוראות חוק הירושה הן בלתי צפויות בייחוד במקרים בהם מדובר בנפטר צעיר יחסית, או במערכות יחסים אלטרנטיביות. ניתן מספר דוגמאות למקרים כאלו:
<br>
<br>
הורשה חלקית לילדיו של הנפטר
לפי החוק, גם אם הנפטר היה נשוי בעת מותו ולו ילדים קטינים, אזי עזבונו לא יעבור במלואו לבן הזוג שנותר בחיים אלא מחצית ממנו יעבור לידי ילדיו הקטינים. המשמעות הנה שבן הזוג שנותר בחיים, לא יוכל לנהל את הרכוש המשותף כראות עיניו- נניח שמדובר בהורים צעירים לילד בן 4, ולאחר פטירת אחד ההורים רוצה ההורה שנותר בחיים לעבור דירה. רצון לגיטימי? ובכן, לא במצב בו רבע מהזכויות בדירת ההורים אמורה לעבור לידי הקטין. במצב זה לא תתאפשר מכירת הדירה מבלי לעבור הליך משפטי שיקנה להורה הנותר את הזכות לעשות בדירה המשותפת כרצונו. היות שרבע מהדירה המשותפת אמור לעבור לקטין בן ה- 4, אזי על אף שההיגיון מורה שלהורים בחייהם היה חופש מוחלט לעשות ברכושם כרצונם מבלי שיש לקטין כל זכות בכנס, לאחר מות הורה החוק מקנה לקטין זכות בנכס, זכות שמטרפדת את יכולת ההורה הנותר לפעול ברכוש כרצונו.
<br>
<br>
זהו מקרה קלאסי בו חשוב לערוך צוואה במידה שבני הזוג רוצים במקרה של מות אחד מהם לתת לבן הזוג הנותר שליטה מלאה ברכוש המשותף וחופש למכור את נכסיהם או למשוך ולעשות שימוש בכספים משותפים לפי בחירתו המלאה.
  </p>
  <img class="lineGold" src="@/assets/photo/line-gold.png">
</div>



<div class="empty">
</div>

<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import DownloadBox from '@/components/DownloadBox.vue'


// import axios from 'axios'


export default {
  name: 'tzavaha',
  components: {
    NavBar,
    DownloadBox,
    Footer
},
  data(){
      return{
        search:'',
        allowNotFind:false,
        downloadData:
        [
        {name:'טופס למתן טיפול רפואי ראשוני לעובד עצמאי שנפגע בתאונת עבודה - 283',date:'22/7/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg'},
          {name:'טופס תביעה להכרה במחלת מקצוע או ליקוי רפואי כתוצאה מתנאי עבודה - 202',date:'10/7/2020',ImgDownload:'https://www.cisme.it/scrl/wp-content/uploads/2020/06/coronavirus-3d-vettoriale-realistico-in-sfondo-blu-scuro-cellula-virus-corona-malattia-del-virus-wuhan_8306-489.jpg'},
          {name:'טופס תביעה לתשלום דמי פגיעה והודעה על פגיעה בעבודה - 211',date:'14/10/2022',ImgDownload:'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/0023E745736A923EE069FF92F8C9E9B6_800x392.20200825T180616.jpg'},
          {name:'כתב ויתור סודיות רפואית מי שנפגע בעבודה או במסגרת פעולת התנדבות - 7101',date:'4/5/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg'},
          {name:'שאלון למעסיק על אירוע הדבקה בקורונה - 257',date:'5/1/2022',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg'},
          {name:'שאלון לעובד שכיר על אירוע הדבקה בקורונה - 258',date:'6/2/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg'},
          {name:'טופס למתן טיפול רפואי ראשוני לעובד עצמאי שנפגע בתאונת עבודה - 283',date:'22/7/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg'},
          {name:'טופס תביעה להכרה במחלת מקצוע או ליקוי רפואי כתוצאה מתנאי עבודה - 202',date:'10/7/2020',ImgDownload:'https://www.cisme.it/scrl/wp-content/uploads/2020/06/coronavirus-3d-vettoriale-realistico-in-sfondo-blu-scuro-cellula-virus-corona-malattia-del-virus-wuhan_8306-489.jpg'},
          {name:'טופס תביעה לתשלום דמי פגיעה והודעה על פגיעה בעבודה - 211',date:'14/10/2022',ImgDownload:'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/0023E745736A923EE069FF92F8C9E9B6_800x392.20200825T180616.jpg'},
          {name:'כתב ויתור סודיות רפואית מי שנפגע בעבודה או במסגרת פעולת התנדבות - 7101',date:'4/5/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg'},
          {name:'שאלון למעסיק על אירוע הדבקה בקורונה - 257',date:'5/1/2022',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg'},
          {name:'שאלון לעובד שכיר על אירוע הדבקה בקורונה - 258',date:'6/2/2023',ImgDownload:'https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/corona-virus-2019-1.jpg'},
        ]
      }
      
  },
  created(){

  },
  mounted(){
  },
  computed: {
    filteredList() {
      return this.downloadData.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {

    checkIfNot(){
      if(this.filteredList.length == 0){
        this.allowNotFind = true
      }else{
        this.allowNotFind = false

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
  height: 400px;
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

</style>




