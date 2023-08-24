<template>
  <router-view :key="$route.fullPath"></router-view>
  <div class="AccessibilityDiv" :key="$route.fullPath">
    <button class="btn btn-primary buttonShowAccessibility space" @click="openAccessibility()"><i style="font-size: 35px;" class="bi bi-universal-access-circle"></i></button>
    <button v-if="this.accessibilityOptions == true" class="btn btn-primary space" @click="changeFontSize()"><i class="bi bi-fonts"></i>גופן טקסט</button>
    <button v-if="this.accessibilityOptions == true" class="btn btn-primary space" @click="this.changeContrast()"><i class="bi bi-palette"></i> צבעים</button>
  </div>
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
    }
  },
  methods:{
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
      }else if(this.changeContrastCheck == true){
        this.changeContrastCheck = false
        this.changeColor()
        document.querySelector('#app').style.backgroundColor = "white";
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
  margin-top: 275px;
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


.AccessibilityDiv{
  border: 1px solid none;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 40%;
  right: 0.5%;
}

.AccessibilityDiv button.space{
  margin-top: 3px;
}

button.buttonShowAccessibility{
  position: relative;
  padding: 5px 12px 5px 12px;
  text-align: center;
  border-radius: 50%;
}

button.buttonShowAccessibility i{
  width: fit-content;
  height: fit-content;
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

body{
  margin: 0;
  padding: 0;
}

</style>
