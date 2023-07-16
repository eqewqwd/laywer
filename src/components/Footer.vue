<template>
  <div class="empty">

  </div>
  <div class="footer-Container">
    <div class="LogoContainer">
      <img src="@/assets/Logo/logo2.png" alt="">
    </div>
    <div class="navbarbottom">
      <div class="ContactUsContainer">
      <h4>שדרות מוריה 8, חיפה</h4>
      <hr>
      <h4>מיקוד : 346160</h4>
      <hr>
      <h4>טלפון: 052-635-3423</h4>
      <hr>
      <h4>אימייל: sharon@snt-law.co.il</h4>

    </div>
      <div class="mapsSection">
        <iframe class="mapsGoogle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53659.51697219783!2d35.057975529346166!3d32.79968780329649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba4c750de845%3A0xc35d23982a81529a!2z15fXmdek15Q!5e0!3m2!1siw!2sil!4v1689283619707!5m2!1siw!2sil" width="600" height="450" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

  </div>
  <div class="footer-copyRight">
    <i class="bi bi-c-circle copyright"></i>
    <span class="copyRightText">אתר זה עוצב ונבנה על ידי דוד דבח</span>
    <a href="https://www.instagram.com/david_dabach/"><i class="bi bi-instagram icons-footer insta"></i></a>
    <a href="https://www.facebook.com/david.benzohar"><i class="bi bi-facebook icons-footer"></i></a>
    <a href="https://wa.link/t0lyzc"><i class="bi bi-whatsapp icons-footer"></i></a>
    <a href="https://www.instagram.com/david_dabach/"><i class="bi bi-twitter icons-footer"></i></a>
    <a href="https://www.instagram.com/david_dabach/"><i class="bi bi-snapchat icons-footer"></i></a>

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}

.empty{
  display: flex;
  direction: rtl !important;
  align-items: center;
  background-color: transparent;
  height: 300px;
  width: 100%;
}

.LogoContainer{
  width: 35%;
  height: 100%;
  border: 1px solid none;
  position: relative;
}

.mapsGoogle{
  float: left;
  width: 100%;
}

.LogoContainer img{
  position: absolute;
  top: 10%;
  transform: translateX(-20%);
  width: 28vw;
}
.footer-Container{
  position: relative;
  display: flex;
  direction: rtl !important;
  align-items: center;
  background-color: rgb(231,231,231);
  height: 500px;
  width: 100%;
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

.navbarbottom{
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  width: 65%;
  height: 100%;
  border: 1px solid none;
}


.mapsSection{
  border: 1px solid none;
  position: relative;
  width: 50%;
  height: 100%;
}

.ContactUsContainer{
  border:1px solid none;
  position: relative;
  width: 50%;
  height: 100%;
}

.ContactUsContainer h4{
  padding: 10px;
}
.ContactUsContainer hr{
  width: 40%;
  color: black;
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


@media (max-width: 725px) {

  .LogoContainer{
    position: absolute;
    top: 0;
    transform: translateX(0,50%);
    width: 100%;
    height: 100%;
  }

  .LogoContainer img{
    position: absolute;
    top: 5%;
    right: 5%;
    width: 60vw;
  }

  .copyRightText,.copyright{
    font-size: 13px;
  }

  
  .footer-Container{
    height: 600px;
  }


  .icons-footer{
    font-size: 20px;
    padding-left: 1.6vw;
  }

  .navbarbottom{
    display: none;
  }
}



</style>
