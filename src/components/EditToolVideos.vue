<template>
    <span class="ButtonEdit">
      <i @click="updateItemInMongoDB()" class="bi bi-check updateItem"></i>
      <i @click="RemoveItem()" class="bi bi-trash removeItem"></i>
    </span>
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
      RemoveItem(){
        this.$emit('RemoveItem')
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
  display: flex;
  justify-content: space-between;
}
.ButtonEdit i{
  font-size: 30px;
  transition: ease 0.2s;
  border-radius: 80px;
  padding: 10px 15px 10px 15px;
  font-weight: bold;
}

.ButtonEdit i.removeItem{
  background-color: rgb(240, 41, 41);
}

.ButtonEdit i.updateItem{
  background-color: rgb(65, 226, 65);

}

.ButtonEdit i.closeEdit{
  background-color: rgb(240, 41, 41);
}

.ButtonEdit i.removeItem:hover{
  background-color: rgb(168, 29, 29);
  color: white;
}

.ButtonEdit i.updateItem:hover{
  background-color: rgb(44, 161, 44);
  color: white;
}

.ButtonEdit i.updateItem:hover{
  background-color: rgb(44, 161, 44);
  color: white;
}

</style>
