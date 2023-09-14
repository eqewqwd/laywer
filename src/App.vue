<template>
  <router-view :key="$route.fullPath"></router-view>
  <div ref="draggableContainer" @mousedown="dragMouseDown($event)"  class="AccessibilityDiv" :key="$route.fullPath">
    <button class="btn buttonShowAccessibility space" @click="openAccessibility()"><i style="font-size: 35px;" class="bi bi-universal-access-circle"></i></button>
    <button v-if="this.accessibilityOptions == true" class="btn btn-primary space" @click="changeFontSize()"><i class="bi bi-fonts"></i>גופן טקסט</button>
    <button v-if="this.accessibilityOptions == true" class="btn btn-primary space" @click="this.changeContrast()"><i class="bi bi-palette"></i> צבעים</button>
    <button v-if="this.accessibilityOptions == true" class="btn btn-primary space" @click="this.backHistory()"><i class="bi bi-clock-history"></i> חזרה לאחור</button>
    <button v-if="this.accessibilityOptions == true" class="btn btn-primary space" @click="this.displayDocu()"><i class="bi bi-file-earmark-text"></i> הצהרת נגישות</button>
  </div>

  <dialog id="AccessibilityDialog" class="AccessibilityDialogClass">
    <div class="headerDialog">
      <button class="closeButton"><i class="bi bi-x" @click="this.dialogClose()"></i></button>
      <h1 class="dialogHeader">הצהרת נגישות</h1>
    </div>
    <div class="AccessibilityInfo">

      <h1>נגישות האתר</h1>
      <p>
        אתר זה הינו נגיש בהתאם להמלצת התקן הישראלי ולנגישות תכנים ברמת AA.
        <br>
        חלק מהנגישות שהאתר מציע : 
      </p>
      <ul>
        <li>הגדלת גופן הטקסט שנמצא באתר</li>
        <li>הקטנת גופן הטקסט שנמצא באתר</li>
        <li>הפעלה של עיצוב כהה והיפוך צבעים</li>
        <li>כפתור חזרה היסטוריה</li>
        <li>שורת ניווט שעוקב אחרי הגלילה</li>
        <li>שורת ניווט מהירה שנמצאת בחלק התחתון של האתר</li>
      </ul>

      <br>
      <br>

      <h1>חווית גלישה</h1>
      <p>
        על מנת לספק לצרכן חווית גלישה נעימה , אנו עיצבנו את האתר כך שיתאים לכל דפדף קיים
        <br>
        חלק מחווית הגלישה שהאתר מציע : 
      </p>
      <ul>
        <li>התאמת האתר לשימוש בכל מכשיר: טלפון נייד , מחשב ועוד..</li>
        <li>האתר הותאם למגוון רחב של דפדפנים שקיימים כיום בשוק</li>
        <li>באתר הונגש כפתור נגישות שכוללת מגוון אפשרויות נגישות לציבור הרחב.</li>
        <li>שורת ניווט שעוקב אחרי הגלילה</li>
        <li>שורת ניווט מהירה שנמצאת בחלק התחתון של האתר</li>
      </ul>


    </div>
    <div class="bottomDialog">
      <h4>פנייה בנושא נגישות האתר</h4>
      <p>אם ברשותך בקשה מיוחדת שתסייע לך בעת גלישה באתרנו , הינכם מוזמנים לפנות אלינו באמצעות הפרטים הבאים:</p>
      <ul>
        <li><span class="OptionInfoAccess">שם מלא: </span>דוד דבח </li>
        <li><span class="OptionInfoAccess">טלפון : </span>053-430-9113</li>
        <li><span class="OptionInfoAccess">אימייל : </span>daviddabah3@gmail.com</li>

      </ul>
    </div>
  </dialog>
</template>

<script>


export default {
  name: 'App',
  components: {
  
  },
  data(){
    return{
      accessibilityOptions:false,
      sizeNum: 7,
      changeFont:"regular",
      changeContrastCheck:false,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      }
    }
  },
  mounted(){
  },
  methods:{
    test(){
      alert("ds")
    },
    dragMouseDown(e) {
      console.log(e)
      this.positions.movementX = this.positions.clientX - e.clientX
      this.positions.movementY = this.positions.clientY - e.clientY
      this.positions.clientX = e.clientX
      this.positions.clientY = e.clientY
      console.log(this.positions)

      // set the element's new position:
      this.$refs.draggableContainer.style.position = "absolute"
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
    },
    backHistory(){
      history.back()
    },
    dialogClose(){
      const AccessibilityDialog = document.getElementById("AccessibilityDialog");
      AccessibilityDialog.close()
    },
    displayDocu(){
      const AccessibilityDialog = document.getElementById("AccessibilityDialog");
      AccessibilityDialog.showModal()
    },
    biggerText(){

      let h1text = document.querySelectorAll('h1')
  let h3text = document.querySelectorAll('h3')
  let h4text = document.querySelectorAll('h4')
  let ptext = document.querySelectorAll('p')
  let spantext = document.querySelectorAll('span')
      
      //h1
      for (let i = 0; i < h1text.length; i++) {
        let style = window.getComputedStyle(h1text[i], null).getPropertyValue('font-size');
        let fontSizeH1 = parseFloat(style) + this.sizeNum; 
        h1text[i].style.fontSize=`${fontSizeH1}px`;
      }

      // h3
      for (let i = 0; i < h3text.length; i++) {
        let style = window.getComputedStyle(h3text[i], null).getPropertyValue('font-size');
        let fontSizeH1 = parseFloat(style) + this.sizeNum; 
        console.log(fontSizeH1)

        h3text[i].style.fontSize=`${fontSizeH1}px`;     
      }

      // h4
      for (let i = 0; i < h4text.length; i++) {
        let style = window.getComputedStyle(h4text[i], null).getPropertyValue('font-size');
        let fontSizeH1 = parseFloat(style) + this.sizeNum; 
        h4text[i].style.fontSize=`${fontSizeH1}px`;
      }

      //p
      for (let i = 0; i < ptext.length; i++) {
        let style = window.getComputedStyle(ptext[i], null).getPropertyValue('font-size');
        let fontSizeH1 = parseFloat(style) + this.sizeNum; 
        ptext[i].style.fontSize=`${fontSizeH1}px`;
      }

      //span
      for (let i = 0; i < spantext.length; i++) {
        let style = window.getComputedStyle(spantext[i], null).getPropertyValue('font-size');
        let fontSizeH1 = parseFloat(style) + this.sizeNum; 
        spantext[i].style.fontSize=`${fontSizeH1}px`;
      }
    },
    downText(){

      let h1text = document.querySelectorAll('h1')
  let h3text = document.querySelectorAll('h3')
  let h4text = document.querySelectorAll('h4')
  let ptext = document.querySelectorAll('p')
  let spantext = document.querySelectorAll('span')
      
      //h1
      for (let i = 0; i < h1text.length; i++) {
        let style = window.getComputedStyle(h1text[i], null).getPropertyValue('font-size');
        let fontSizeH1 = parseFloat(style) - this.sizeNum; 
        h1text[i].style.fontSize=`${fontSizeH1}px`;
      }

      // h3
      for (let i = 0; i < h3text.length; i++) {

        let style = window.getComputedStyle(h3text[i], null).getPropertyValue('font-size');
          let fontSizeH1 = parseFloat(style) - this.sizeNum; 
          console.log(fontSizeH1)
          
          h3text[i].style.fontSize=`${fontSizeH1}px`;
      }

      // h4
      for (let i = 0; i < h4text.length; i++) {
        let style = window.getComputedStyle(h4text[i], null).getPropertyValue('font-size');
        let fontSizeH1 = parseFloat(style) - this.sizeNum; 
        h4text[i].style.fontSize=`${fontSizeH1}px`;
      }

      //p
      for (let i = 0; i < ptext.length; i++) {
        let style = window.getComputedStyle(ptext[i], null).getPropertyValue('font-size');
        let fontSizeH1 = parseFloat(style) - this.sizeNum; 
        ptext[i].style.fontSize=`${fontSizeH1}px`;
      }

      //span
      for (let i = 0; i < spantext.length; i++) {
        let style = window.getComputedStyle(spantext[i], null).getPropertyValue('font-size');
        let fontSizeH1 = parseFloat(style) - this.sizeNum; 
        spantext[i].style.fontSize=`${fontSizeH1}px`;
      }
    },
    changeColor(){

      let h1text = document.querySelectorAll('h1')
      let h3text = document.querySelectorAll('h3')
      let h4text = document.querySelectorAll('h4')
      let atext = document.querySelectorAll('a')
      let ptext = document.querySelectorAll('p')
      let spantext = document.querySelectorAll('span')
      // h3

      

      for (let i = 0; i < h1text.length; i++) {
        
        if(h1text[i].classList.value != "titleHome" && h1text[i].classList.value != 'FormsHomeH1'
        && h1text[i].classList.value != 'contactH1' && h1text[i].classList.value != 'FormH1'){
          if(this.changeContrastCheck == true){
           h1text[i].style.color="white"
          }
          if(this.changeContrastCheck == false){
            h1text[i].style.color="black"
          }
        }      
      }

    for (let i = 0; i < h3text.length; i++) {        
        if(h3text[i].classList.value == "H3contras"){
          h3text[i].style.color="black"
        }
        
    }

      for (let i = 0; i < atext.length; i++) {
        let style = window.getComputedStyle(atext[i], null).getPropertyValue('color');
          // console.log(style)

          if(atext[i].classList.value != "copyrightA" && atext[i].classList.value != "contrasA"){
            if(this.changeContrastCheck == true){
              atext[i].style.color="white"
            }
            if(this.changeContrastCheck == false){
              atext[i].style.color="black"
            }
          }
          
      }

      for (let i = 0; i < ptext.length; i++) {
        // let style = window.getComputedStyle(atext[i], null).getPropertyValue('color');
        //   console.log(style)

        if(ptext[i].classList.value != "nameDownload"){

          if(this.changeContrastCheck == true){
            ptext[i].style.color="white"
          }
          if(this.changeContrastCheck == false){
            ptext[i].style.color="black"
          }
        }
      }

      for (let i = 0; i < spantext.length; i++) {
        // let style = window.getComputedStyle(atext[i], null).getPropertyValue('color');
        //   console.log(style)

        if(spantext[i].classList.value == "SpanContras"){
            spantext[i].style.color="black"
        }
      }
    },
    changeFontSize(){
      if(this.changeFont == "regular"){
        this.changeFont = "bigger"
        this.biggerText()
      }else if(this.changeFont == "bigger"){
        this.changeFont = "regular"
        this.downText()
      }
    },
    changeContrast(){
      if(this.changeContrastCheck == false){
        this.changeContrastCheck = true
        this.changeColor()
        document.querySelector('#app').style.backgroundColor = "black";
        document.querySelector('#mainNavigation').style.backgroundColor = "black";
      }else if(this.changeContrastCheck == true){
        this.changeContrastCheck = false
        this.changeColor()
        document.querySelector('#app').style.backgroundColor = "white";
        document.querySelector('#mainNavigation').style.backgroundColor = "white";

      }
    },
    openAccessibility(){
      if(this.accessibilityOptions == true){
        this.accessibilityOptions = false
      }else{
        this.accessibilityOptions = true
      }
    }
  },
}
</script>

<style>
#app {
  margin-top: 270px;
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  font-family: 'miriamLibre', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50 !important;
  direction: rtl !important;
}

@font-face {
  font-family: "miriamLibre";
  src: url('./assets/Fonts/MiriamLibre-Bold.ttf');
}

/* ------------- dialog -------------- */

#AccessibilityDialog{
  padding: 0px;
}

.AccessibilityDialogClass{
  position: fixed;
  border: 1px solid black;
  width: 60%;
  height: 90%;
  padding: 0px;
  border-radius: 20px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.AccessibilityDialogClass .headerDialog{
  position: relative;
  width: 100%;
  height: 20%;
  background-color: #2b4162;
background-image: linear-gradient(315deg, #2b4162 0%, #12100e 74%);
}

.AccessibilityDialogClass button.closeButton{
  border: none;
  outline: none;
  position: absolute;
  top: 3%;
  left: 1%;
  background: transparent;
}

.AccessibilityDialogClass button.closeButton i{
  font-size: 45px;
  color: #DFB951;
  transition: ease 0.2s;
}

.AccessibilityDialogClass button.closeButton i:hover{
  color: #a0812b;

}

.AccessibilityDialogClass .dialogHeader{
  position: absolute;
  right: 50%;
  transform: translate(50%);
  top: 30%;
  width: fit-content;
  color: #DFB951;
}

.AccessibilityDialogClass .bottomDialog{
  position: relative;
  border: 1px solid none;
  background-color: rgb(230, 230, 230);
  height: 20%;
  width: 100%;
  text-align: center;
  padding-top: 3%;
}

.AccessibilityDialogClass .bottomDialog p{
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid none;
}


.AccessibilityDialogClass .bottomDialog ul{
  position: absolute;
  /* bottom: 2%; */
  right: 50%;
  width: 80%;
  transform: translate(50%);
  display: flex;
  justify-content: space-evenly;
  border: 1px solid none;
  font-size: 1vw;
}

.AccessibilityDialogClass .AccessibilityInfo{
  padding: 40px;
  position: relative;
  border: 1px solid none;
  overflow: scroll;
  height: 60%;
  width: 100%;
}

.AccessibilityDialogClass .AccessibilityInfo h1{
  color: navy;
}

.AccessibilityDialogClass .AccessibilityInfo p{
  font-size: 20px;
}

.AccessibilityDialogClass .AccessibilityInfo ul{
  font-size: 19px;
  list-style-type: decimal;
}



/* ------------- dialog end -------------- */


.AccessibilityDiv{
  border: 1px solid none;
  padding: 10px;
  width: 65px;
  height: 65px;
  display: flex;
  flex-direction: column;
  cursor: move;
  position: fixed;
  top: 40%;
  right: 0.5%;
  z-index: auto;
  background-color: rgb(12, 76, 171);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.AccessibilityDiv button.space{
  margin-top: 3px;
}

button.buttonShowAccessibility{
  position: absolute;
  text-align: center;
}

button.buttonShowAccessibility i{
  width: fit-content;
  height: fit-content;
  color: white;
}

/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: whitesmoke;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(28, 25, 90); 
  border-radius: 10px;
  transition: 0.4s ease-in;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 41, 169);
}

.carousel__icon{
  color: white;
  background-color: #2e2c2c;
  border: 1px solid none;
  border-radius: 25px;
}

@media (max-width: 1200px) {

  .AccessibilityDialogClass .dialogHeader{
    width: 100%;
    text-align: center;
  }
  .AccessibilityDialogClass{
    width: 95%;
    height: 95%;
    padding: 0px;
    border-radius: 20px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .AccessibilityDialogClass .bottomDialog h4{
    font-size: 15px;
    font-weight: bold
    ;
  }

  .AccessibilityDialogClass .bottomDialog p{
    font-size: 11px;
  }

  .AccessibilityDialogClass .bottomDialog ul{
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    width: 100%;
    list-style-type: none;
    border: 1px solid none;
  }

  .OptionInfoAccess{
    display: none;
  }

  .AccessibilityDialogClass .headerDialog{
    height: 12%;
  }

  .AccessibilityDialogClass .bottomDialog{
  height: 28%;
  width: 100%;
  text-align: center;
  padding-top: 3%;
}

.AccessibilityDialogClass .AccessibilityInfo h1{
  color: navy;
}

.AccessibilityDialogClass .AccessibilityInfo p{
  font-size: 16px;
}

.AccessibilityDialogClass .AccessibilityInfo ul{
  font-size: 15px;
  list-style-type: decimal;
}
}

@media (max-width: 700px) {
  .AccessibilityDialogClass .bottomDialog ul{
    width: 100%;
  }
}

body{
  margin: 0;
  padding: 0;
}

</style>
