<template>
<NavBar @editStart="StartEdit()"/>

<div class="PosterHome">
  <div class="TitleDivPoster">
    <h1 class="titleHome">טפסים להורדה</h1>
  </div>
  <i @click="this.openWigit()" style="position: absolute;right: 2%;top: 0;background-color: red;" v-if="this.editMode == true" class="bi bi-cloud-upload"></i>
</div>

<div class="searchDiv">
  <label>חיפוש : </label>
    <input type="text" @input="this.checkIfNot()" v-model="search" placeholder="חיפוש על ידי שם.."/>
  </div>

<div class="BoxContainerDownload">
  <DownloadBox v-for="download in filteredList" :key="download" :name="download.name" :date="download.date"
  :ImgDownload="download.ImgDownload" :numberFile="download.numberFile" :fileName="download.fileName" 
  :downloadImg="this.downloadImg"/>
  

  <div class="notFound" v-show="this.allowNotFind == true">
    <h1> לא נמצא טופס בשם : "{{ this.search }}"</h1>
  </div>
</div>



<div class="empty">
</div>

<Footer/>

  
</template>

<script>
import NavBar from '@/components/NavBarcopy.vue'
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
        id:null,
        editmode:false,
        downloadImg:'',
        downloadData:
        [
        {name:"טופס למתן טיפול רפואי ראשוני לאחר תאונת עבודה" ,date:"10.8.2023",numberFile:"283" ,fileName:"283.pdf"},
        {name:"טופס תביעה להכרה במחלת מקצוע או ליקוי רפואי כתוצאה מתנאי עבודה" ,date:"10.8.2023",numberFile:"202" ,fileName:"202.pdf"},
        {name:"טופס תביעה לתשלום דמי פגיעה והודעה על פגיעה בעבודה" ,date:"10.8.2023",numberFile:"211" ,fileName:"211.pdf"},
        {name:"כתב ויתור סודיות רפואית מי שנפגע בעבודה או במסגרת פעולת התנדבות" ,date:"10.8.2023",numberFile:"7101" ,fileName:"7101.pdf"},
        {name:"למתן טיפול רפואי ראשוני לעובד שכיר שנפגע בתאונת עבודה" ,date:"10.8.2023",numberFile:"250" ,fileName:"250.pdf"},
        {name:"תביעה לדיון מחודש בדרגת נכות לנכה מעבודה עקב החמרת מצב" ,date:"10.8.2023",numberFile:"228" ,fileName:"228.pdf"},
        {name:"תביעה לדמי מחיה של ילד המקבל קצבת תלויים" ,date:"10.8.2023",numberFile:"230" ,fileName:"230.pdf"},
        {name:"תביעה לנכה עבודה שוועדה רפואית קבעה לו דרגת נכות זמנית" ,date:"10.8.2023",numberFile:"279" ,fileName:"279.pdf"},
        {name:"תביעה לצירוף דרגות נכות עקב כמה פגיעות בעבודה" ,date:"10.8.2023",numberFile:"210" ,fileName:"210.pdf"},      
        {name:"תביעה לקביעת דיון מחדש בדרגת נכות עקב ירידה בהכנסות" ,date:"10.8.2023",numberFile:"215" ,fileName:"215.pdf"},
        {name:"תביעה לקביעת דרגת נכות מעבודה" ,date:"10.8.2023",numberFile:"200" ,fileName:"200.pdf"},
        {name:"תביעה לתשלום גמלה לבני משפחה של מי שנפטר מפגיעה בעבודה" ,date:"10.8.2023",numberFile:"213" ,fileName:"213.pdf"},
        ]
      }
      
  },
  created(){
    this.GetData()
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
    },
    async StartEdit(){
      this.editmode = true
    },
    openWigit(){

      const widget = window.cloudinary.createUploadWidget(
        {cloud_name:"drb3a55va", upload_preset: "download-img"},
        (error,result)=>{
          if(!error && result && result.event == "success"){
            console.log("Done uploading ....",result.info.url)
            this.downloadImg = result.info.url      
            this.updateItemInMongoDB()
          }
        }
      )
      widget.open()
    },
GetData(){
        axios.get('/.netlify/functions/GetDataDownload').then(response => {
          console.log(response.data);
          let resres = response.data
          for (let i = 0; i<resres.length; i++){
            this.id = resres[i]._id
            this.downloadImg = resres[i].downloadImg
          }

        }).catch(error => {
            console.log(error);
        }); 
    },
    async updateItemInMongoDB() {

if(this.downloadImg != this.downloadImg){
  const id = this.id; 
  const updatedData = {
    downloadImg : this.downloadImg
  };

  try {
    const response = await axios.post('/.netlify/functions/UpdateItemDownload', {
      id,
      updatedData,
    });

    // Handle the response, display success message, etc.
    this.GetData()
    alert(" !תמונה עודכנה בהצלחה")
  } catch (error) {
    console.error('Error:', error);
    // Handle error
  }
}

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




