<template>
  <div class="ContactContainer">
    <div class="TitleContainer">
      <h1>לייעוץ ראשוני ללא התחייבות​</h1>
      <h5>לקבלת שיחת ייעוץ באפשרותך להשאיר פרטים בטופס המצורף, או לחייג אלינו למספר 03-7949755</h5>
    </div>
    <div class="formContainer">
      <form action="">
        <input type="text" name="" placeholder="שם">
        <input type="text" name="" placeholder="אימייל">
        <button type="submit">אשמח לייעוץ איתך</button>
      </form>
    </div>

  </div>
</template>

<script>


export default {
    name: "ContactContainer",
    data() {
        return {
        }
    },
    created () {
  },
    mounted(){
    }, 
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ContactContainer{
  position: relative;
  direction: rtl;
  border: 3px solid gold;
  /* background-color: rgb(111, 20, 111); */

  /* background-color: rgb(128, 0, 128); */
  background-color: rgb(24,44,79);
  /* background-color: #588fb3; */
  height: 250px;
  width: 1100px;
  top: -50px;
  margin-right: auto;
  margin-left: auto;
  padding: 25px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.TitleContainer{
  color: #f1f1f1;
}

.formContainer{
  width: 100%;
  height: 100px;
  padding-top: 20px;
}

.formContainer form{
  border: 1px solid none;
  display: flex;
  justify-content: space-evenly;
}

.formContainer form button[type="submit"]{
 background-color: gold;
 border: 1px solid white !important;
 color: white;
 font-weight: 600;
 font-size: 20px;
 text-shadow: 1px 1px 2px pink; /* text-shadow: 30px 40px 50px rgba(0,0,0,0.3); */
 transition: ease 0.2s;
}

.formContainer form button[type="submit"]:hover{
  border: none;
  font-size: 22px;
  color: black;
}

.formContainer form input[type="text"],.formContainer form button[type="submit"]{
  width: 32%;
  padding: 10px;
  height: 70px;
  border-radius: 10px;
  border: none;
  outline: none;
}

/* ----------- animation revael -------------- */

.Homereveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: all 1s ease;
}

.Homereveal.active{
  transform: translateY(0px);
  opacity: 1;
}

@media (max-width: 1112px) {
  .ContactContainer{
    width: 100% !important;
  }
}

@media (max-width: 800px) {
  .ContactContainer{
    position: relative;
    margin-top:25%;
  }
}

@media (max-width: 730px) {

  .formContainer form{
    display: flex;
    flex-direction: column;
    height: fit-content;
  }

  .formContainer form input[type="text"],.formContainer form button[type="submit"]{
    margin-top: 8px;
    width: 100%;
  }

  .ContactContainer{
    text-align: center;
    height: 460px;
    
  }


}

</style>
