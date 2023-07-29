<template>
    <span class="ButtonEdit"><i @click="endEditMode()" class="bi bi-x"></i><i @click="updateItemInMongoDB()" class="bi bi-check"></i></span>
</template>

<script>


export default {
    name: "EditTool",
    data() {
        return {
        }
    },
    created () {
  },
    mounted(){
    }, 
    methods:{
      updateItemInMongoDB(){
        this.$emit('PostMongo')
      },
      endEditMode(){
        this.$emit('EditEnd')
      }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* -------------- ButtonEdit -------------- */


.ButtonEdit{
  position: relative;
  cursor: pointer;
  float: left;
}
.ButtonEdit i{
  font-size: 30px;
  transition: ease 0.2s;
  border-radius: 80px;
  padding: 10px 15px 10px 15px;
  font-weight: bold;
}

.ButtonEdit i:first-child{
  background-color: rgb(240, 41, 41);
}

.ButtonEdit i:last-child{
  background-color: rgb(65, 226, 65);
}

.ButtonEdit i:first-child:hover{
  background-color: rgb(168, 29, 29);
  color: white;
}

.ButtonEdit i:last-child:hover{
  background-color: rgb(44, 161, 44);
  color: white;
}

</style>
