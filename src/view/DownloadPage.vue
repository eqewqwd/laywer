<template>
<NavBar/>

<div class="PosterHome">
  <div class="TitleDivPoster">
    <h1>טפסים להורדה</h1>
  </div>
</div>

<div class="searchDiv">
  <label>חיפוש : </label>
    <input type="text" @input="this.checkIfNot()" v-model="search" placeholder="חיפוש על ידי שם.."/>
  </div>

<div class="BoxContainerDownload">
  <DownloadBox v-for="download in filteredList" :key="download" :name="download.name" :date="download.date"
  :ImgDownload="download.ImgDownload" :numberFile="download.numberFile"/>
  <div class="notFound" v-show="this.allowNotFind == true">
    <h1> לא נמצא טופס בשם : "{{ this.search }}"</h1>
  </div>
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
  name: 'DownloadPage',
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
  height: 200px;
}

/* ---------------- PosterHome --------------- */

.PosterHome{
  position: relative;
  top: 20px;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/photo/DownloadBackground.png');
  background-size: 100%;
  background-repeat: no-repeat;
  border:1px solid none;
  direction: ltr;
}

.PosterHome .TitleDivPoster{
  border: 1px solid none;
  position: relative;
  width: 100%;
  height: 31vw;
}

.PosterHome .TitleDivPoster h1{
  position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%);
    font-size: 3vw;
    color: #f5f5f5;
    font-family: Segoe UI,Tahoma,Geneva,Verdana,sans-serif;
    text-shadow: 0 2px 1px #34424b, -1px 3px 1px #34424b, -3px 6px 2px #34424b;
}

/* ---------------- searchDiv --------------- */

.searchDiv{
  position: relative;
  display: flex;
  right: 50%;
  transform: translate(50%);
  top: 80px;
  border: 1px solid none;
  width: 470px;
  height: 50px;
}

.searchDiv input{
  position: absolute;
  outline: none;
  border:1px solid black;
  /* border-bottom: 1px solid black; */
  width: 78%;
  height: 100%;
  left: 0;
  /* border-radius: 25px; */
  padding-right: 20px;
}

.searchDiv label{
  border: 1px solid none;
  position: relative;
  font-size: 28px;
  width: 20%;
}




/* ---------------- BoxContainerDownload --------------- */


.BoxContainerDownload{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  right: 50%;
  transform: translate(50%);
  top: 150px;
  border: 1px solid none;
  width: 80%;
  height: auto;
}

/* ------------------- notFound -------------- */

.notFound{
  border: 1px solid none;
  width: 100%;
  text-align: center;
}

@media (max-width: 800px) {
  .searchDiv{
  position: relative;
  display: flex;
  right: 50%;
  transform: translate(50%);
  top: 80px;
  border: 1px solid none;
  width: 90%;
  height: 50px;
}

.searchDiv input{
  position: absolute;
  outline: none;
  /* border-bottom: 1px solid black; */
  width: 80%;
  height: 100%;
  left: 0;
  /* border-radius: 25px; */
  padding-right: 20px;
}

.searchDiv label{
  border: 1px solid none;
  position: relative;
  font-size: 20px;
  width: 20%;
}
}

</style>




