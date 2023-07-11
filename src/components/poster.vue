<template>
    <div class="ContainerPoster">
      <img class="laywerWomen Homereveal" src="@/assets/photo/laywerWomen.png">
      <div class="allContainer Homereveal">
        <div class="TitlePoster">
          <h1>
            עורכת דין
            <br>
            לענייני משפחה
            <br>
            שרון תמרי
          </h1>
        </div>
        <div class="SubTitlePoster">
          <ul v-for="i in laywerOptionsSort" :key="i">
            <li><span><i class="bi bi-bookmark-check"></i></span><span class="dataSpan">{{ i }}</span></li>
          </ul>
        </div>
      </div>
    </div>
    
</template>

<script>


export default {
    name: "poster",
    props: ["PicName"],
    data() {
        return {
          laywerOptions:'גירושין,יודעים בציבור,צוואות וירושות,הסכמי ממון,אפוטרופסות',
          laywerOptionsSort:null
        }
    },
    created () {
      // window.addEventListener('click', this.toggleButton);
      // console.log(document.getElementById("itemNum").ariaValueText)
  },
    mounted(){
      this.checkData()
    }, 
    methods:{
      checkData(){
        let optionsLaywer = this.laywerOptions
        let ResultLaywer = optionsLaywer.split(",")
        this.laywerOptionsSort = ResultLaywer
        console.log(this.laywerOptionsSort)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.allContainer{
  border: 1px solid none;
  direction: rtl;
  position: relative;
  right: 20%;
  top: 22%;
  width: 400px;
  height: 550px;
  transform: translate(50%);
}

.ContainerPoster{
  top: 0 !important;
  position: relative;
  display: flex;
  height: 85vh;
  width: 100%;
  background-image: url('@/assets/photo/bgcoverHome.jpg');
  background-size: 100% 100%;
}

img.laywerWomen{
  border: 1px solid none;
  position: absolute;
  bottom: 1%;
  left: 20%;
  transform: translate(-50%);
  width: 400px;
}

.TitlePoster{
  border: 1px solid none;
  direction: rtl;
  width: 100%;
}

.SubTitlePoster{
  border: 1px solid none;
  direction: rtl;
  position: absolute;
  right: 17%;
  width: 100%;
  bottom: 0%;
}

.SubTitlePoster ul span.dataSpan{
  padding-right: 15px;
}

.SubTitlePoster ul li{
  list-style-type: none;
  font-size: 24px;
  font-weight: 500;
}

.TitlePoster h1{
  color: var(--e-global-color-454b3e8 );
  font-size: 67px;
  font-weight: 800;
  text-shadow: 0px 0px 25px rgba(0,0,0,0.3);
  text-align: center;
}


/* ----------- animation revael -------------- */

.Homereveal{
  position: absolute;
  transform: translateY(150px);
  opacity: 0;
  transition: all 2s ease;
}

.Homereveal.active{
  transform: translateY(0px);
  opacity: 1;
}

@media (max-width: 1400px) {
  img.laywerWomen{
    border: 1px solid none;
    position: absolute;
    bottom: 1%;
    left: 3%;
  }

  .allContainer{
    border: 1px solid none;
    direction: rtl;
    position: absolute;
    right: 5%;
    top: 22%;
    width: 400px;
    height: 550px;
    transform: translate(50%);
  }

}

@media (max-width: 800px) {
  .ContainerPoster{
    height: 110vh;
  }

  .allContainer{
    border: 1px solid none;
    direction: rtl;
    position: absolute;
    margin-right: auto;
    margin-left: auto;
    right: 0;
    left: 0;
    top: 12%;
    width: 100%;
    height: 550px;
  }
  
  .TitlePoster{
    position: absolute;
    width: fit-content;
    margin-right: auto;
    margin-left: auto;
    right: 0;
    left: 0;
  }

  .SubTitlePoster{

    position: absolute;
    bottom:3%;
    width: fit-content;

  }
  .TitlePoster h1{
    border: 1px solid none;
    font-size: 60px;
  }
  img.laywerWomen{
    position: absolute;
    bottom: -10%;
    left: 3%;
    transform: translate(-50%);
    width: 250px;
  }
}

@media (max-width: 550px) {

  .TitlePoster h1{
    border: 1px solid none;
    font-size: 40px;
  }

  .SubTitlePoster{

    position: absolute;
    bottom:20%;
    width: fit-content;

  }

}


</style>
