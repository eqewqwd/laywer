<template>
  <FullCalendar 
  :options='calendarOptions'
  :header="{
    left:'title',
    center:'dayGridMonth,timeGridWeek, timeGridDay, listWeek',
    right:'prev today next'
  }"
  :buttonText="{
    today:'היום',
    month:'חודש',
    week:'שבוע',
    day:'יום',
    list:'רשימה',
  }"
  />
</template>

<script>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import listweek from '@fullcalendar/list'
import axios from 'axios'

export default {
  name: 'Calendar',
  data: function() {
    return {
      calendarOptions: {
        locale:"he",
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left:'title',
          center:'dayGridMonth,timeGridWeek, timeGridDay, listWeek',
          right:'prev today next'
        },
        events: []
      }
    }
  },
  components:{FullCalendar},
  mounted(){
    console.log(new Date())
    this.getdata()
  },
  methods:{
    async getdata(){
      await axios.get('/.netlify/functions/GetData').then(response => {
          console.log(response.data);
          let testTy = response.data
          for(let i=0; i<testTy.length; i++){
            this.events.push(testTy)
          }
      }).catch(error => {
          console.log(error);
      }); 
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
