<template>
    <div class="empty">

    </div>
    <div class="AllContainer">
      <div class="MapAndLogoDiv">
        <div class="LogoDiv">
          <img class="LogoImg" src="@/assets/Logo/logo.png" alt="">
        </div>
        <div class="MapDiv">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.958007994288!2d34.98337947617228!3d32.793372683149066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dbb0505030a15%3A0x37022d3ae3fc188c!2sMoriah%20Ave%2081%2C%20Haifa!5e0!3m2!1sen!2sil!4v1691942052115!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>
        <div class="LocationDiv">
          <h5><i style="color: orangered;" class="bi bi-geo-alt-fill"></i>  שדרות מוריה 81, חיפה</h5>
        </div>
      </div>
      <div class="NavBottomDiv">
        <h2>ניווט מהיר</h2>
        <div class="NavListDiv">
          <ul>
            <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/"><li><a class="contrasA">בית</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'mekarkein' } })"><li><a class="contrasA">מקרקעין</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'nezikin' } })"><li><a class="contrasA">נזיקין</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'tzavahot-yipuy-Koach' } })"><li><a class="contrasA">צוואות</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" :to="({ name: 'FormsContainer', params: { name: 'tzavahot-yipuy-Koach' } })"><li><a class="contrasA">ייפוי כוח מתמשך</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/ContactUs"><li><a class="contrasA">צור קשר</a></li></router-link>
        <router-link @click="this.changeNavByRoute()" style="text-decoration: none;" to="/Files-Download"><li><a class="contrasA">טפסים להורדה</a></li></router-link>
          </ul>
        </div>
      </div>
      <div class="ContactDiv">
        <ContactComponent/>

      </div>
    </div>


  <div class="footer-copyRight">
    <i class="bi bi-c-circle copyright"></i>
    <span class="copyRightText"><a class="copyrightA" href="https://techlinx.co.il/">אתר זה עוצב ונבנה על ידי <span class="nameCopyRight">דוד דבח</span></a></span>
    <a href="/"><i class="bi bi-instagram icons-footer insta"></i></a>
    <a href="/"><i class="bi bi-facebook icons-footer"></i></a>
    <a href="/"><i class="bi bi-whatsapp icons-footer"></i></a>
    <a href="/"><i class="bi bi-twitter icons-footer"></i></a>
    <a href="/"><i class="bi bi-snapchat icons-footer"></i></a>

  </div>
  <footer>
    
  </footer>
</template>

<script>

import ContactComponent from '@/components/ContactContainer.vue'


export default {
  name: 'Footer',
  components:{
    ContactComponent
  },
  methods:{
    changeNavByRoute(){
      console.log(this.$route.fullPath == '/')
      let checkRoute = this.$route.fullPath == '/'
      const LogoResponsive = document.querySelector('.navbar')

      if(checkRoute == true & innerWidth <= 750){
        LogoResponsive.style.display = 'none'
      }else{
      }
      this.scrollUp()
    },
    scrollUp(){
      window.scrollTo(0,0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}

.empty{
  height: 300px;
}

.AllContainer{
  height: 60vh;
  background-color: rgb(231,231,231);
  display: flex;
  width: 100%;
  flex-direction: row;
}

/* ----------------- MapAndLogoDiv --------------- */

.AllContainer .MapAndLogoDiv{
  border: 1px solid none;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 40%;
}
.AllContainer .MapAndLogoDiv .LogoDiv{
  position: relative;
  border: 1px solid none;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35%;
}

.AllContainer .MapAndLogoDiv .LogoDiv img{
  position: absolute;
  bottom: 0;
  widows: 100%;
  height: 85%;
}

.AllContainer .MapAndLogoDiv .MapDiv{
  position: relative;
  border: 1px solid none;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
}
.AllContainer .MapAndLogoDiv .MapDiv iframe{
  position: absolute;
  bottom: 5%;
  width: 60%;
  height: 90%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;}

.AllContainer .MapAndLogoDiv .LocationDiv{
  text-align: center;
  width: 100%;
  height: 15%;
}

/* ------------------- end MapAndLogoDiv -------------------- */

/* ----------------- NavBottomDiv --------------- */


.NavBottomDiv{
  border: 1px solid none;
  width: 20%;
  height: 100%;
}
.NavBottomDiv h2{
  position: relative;
  top: 20%;
  text-align: center;
}

.NavListDiv{
  position: relative;
  text-align: right;
  width: fit-content;
  right: 50%;
  transform: translate(50%);
  top: 30%;
  border: 1px solid none;
}

.NavListDiv ul li a.contrasA{
  color: black;
  text-decoration-line: none;
}

.NavListDiv ul li:hover{
  font-weight: bold;
}

/* ------------------- end NavBottomDiv -------------------- */

/* ----------------- ContactDiv --------------- */

.ContactDiv{
  border: 1px solid none;
  width: 40%;
  height: 100%;
}


.insta:hover {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  -webkit-background-clip: text;
          /* Also define standard property for compatibility */
          background-clip: text;
  -webkit-text-fill-color: transparent;
}


.bi-facebook:hover{
  color: #4267B2
;
}

.bi-whatsapp:hover{
  color: green;
}

.bi-twitter:hover{
  color:rgb(0, 191, 255);
}
.bi-snapchat:hover{
  color: yellow;
}

footer{
  width: 100%;
  height: 2vh;
  background-image: linear-gradient(139deg, rgb(194, 171, 43), gray);
}

.footer-copyRight{
  direction: ltr;
  align-items: center;
  background-color: rgb(42, 42, 42);
  height: 40px;
  width: 100%;
}

.copyright , .copyRightText{
  position: relative;
  color: white;
  float: right;
  right: 1%;
  top: 21%;
}
.copyRightText a{
  color: white;
  text-decoration: none;
}

.copyRightText a:hover .nameCopyRight{
  text-decoration-line: underline;

}

.copyright{
  right: 0.5%;
}

.icons-footer{
  position: relative;
  font-size: 22px;
  padding-left: 1vw;
  top: 8%;
  transition: 0.2s ease-in-out;
  color: whitesmoke;
}

@media (max-width: 1100px) {
  .NavBottomDiv{
    display: none;
  }
  .ContactDiv{
    width: 60%;
  }
}


@media (max-width: 725px) {

  .copyRightText,.copyright{
    font-size: 13px;
  }
  .icons-footer{
    font-size: 20px;
    padding-left: 1.6vw;
  }
  .ContactDiv{
    display: none;
  }

  .AllContainer .MapAndLogoDiv{
    border: 1px solid none;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}



</style>
