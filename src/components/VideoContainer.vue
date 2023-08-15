<template>
  <div class="FormContainerHome" >
    <video width="100%" height="100%" controls >

      <source :src=this.SrcVid>
    </video>
    <div class="textHover">
      <i v-if="user" @click="StartEdit()" style="position: absolute;top: 1%;right: 2%;font-size: 30px;color: white;" class="bi bi-three-dots"></i>
      <h1>אודות הסרטון :</h1>
      <p v-if="EditMode == false">{{ paragrafh }}</p>
      <textarea v-if="EditMode == true" :value="paragrafh" @input="paragrafhPost = $event.target.value"></textarea>
      <EditToolVideos v-if="EditMode == true" @PostMongo="updateItemInMongoDB(this.BlogId)" @RemoveItem="RemoveItem(this.BlogId)"/>
    </div>
  </div>

</template>

<script>
import EditToolVideos from '@/components/EditToolVideos.vue'
import axios from 'axios';


export default {
    name: "OptionsContainer",
    props:['SrcVid','paragrafh','BlogId'],
    components:{
      EditToolVideos
    },
    data() {
        return {
          user:null,
          EditMode: false,
          paragrafhCheck:'',
          paragrafhPost:'',
        }
    },
    created () {
      this.userData()
      this.paragrafhCheck = this.paragrafh;
      this.paragrafhPost = this.paragrafh;

  },
    mounted(){
    }, 
    methods:{
      async updateItemInMongoDB(res){
        if(this.paragrafhCheck != this.paragrafhPost){
          const id = res;
          const updatedData = {
            paragrafh: this.paragrafhPost,
          };

          try {
            const response = await axios.post('/.netlify/functions/UpdateItembBlogs', {
              id,
              updatedData,
            });

            // Handle the response, display success message, etc.
            alert('תיאור בלוג עודכן')
            window.location.reload()
          } catch (error) {
            console.error('Error:', error);
            // Handle error
          }
        }else{
          this.EditMode = false
        }
          
      },
      async RemoveItem(itemId){
        try {
        const response = await axios.delete(`/.netlify/functions/deleteItem?id=${itemId}`);
        alert("בלוג נמחק");
        window.location.reload()
      } catch (error) {
        console.error('Error deleting item:', error);
      }
      },
      async userData(){

              
        var token = localStorage.getItem("token"); // Replace this with the actual token

        await axios
          .get('/.netlify/functions/user-data', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => {
            console.log(response.data)
            this.user = response.data
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      },
      StartEdit(){
        if(this.EditMode == true){
          this.EditMode = false
        }else if(this.EditMode == false){
          this.EditMode = true
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* -------------- FormContainerHome -------------- */

.FormContainerHome{
  position: relative;
  /* margin-left: 20px;*/
  margin-top: 60px; 
  border:1px solid none;
  width: 400px;
  height: 500px;
  text-align: center;
  background-color: goldenrod;
  padding: 10px;
  border-radius: 5px 5px 12px 12px;
  cursor: pointer;
}

.FormContainerHome video{
  width: 100%;
  height: 100%;
}
.FormContainerHome video source{
  width: 100%;
  height: 100%;
}

.textHover{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 85%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: ease 0.2s;
}

.textHover h1{
  color: white;
  font-size: 1.3vw;
}

.textHover p{
  color: white;
  width: 85%;
  font-size: 1vw;
}

.FormContainerHome:hover .textHover{
  opacity: 1;
}


.textHover > *{
  transform: translateY(25px);
  transition: ease 0.6s;
}

.textHover:hover > *{
  transform: translateY(0px);
}


</style>
