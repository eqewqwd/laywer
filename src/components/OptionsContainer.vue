<template>
  <div class="OptionsContainerComponent">
    <img class="iconScale" src="@/assets/photo/scaleIcon.png">
    <h5>{{ name  }}</h5>
  </div>
</template>

<script>


export default {
    name: "OptionsContainer",
    props:['name'],
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

/* -------------- OptionsContainerComponent -------------- */

.OptionsContainerComponent{
  border:1px solid none;
  width: 32%;
  height: 150px;
  text-align: center;
}


.iconScale{
  width: 50px;
}

.OptionsContainerComponent h5{
  color: white;
  font-size: 25px;
  margin-top: 10px;
}

@media (max-width: 800px) {
  .OptionsContainerComponent{
    border: 1px solid none;
    width: 50%;
    padding: 20px;
  }
}

</style>
