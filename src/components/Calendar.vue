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
      test:[],
      calendarOptions: {
        locale:"he",
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left:'title',
          center:'dayGridMonth,timeGridWeek, timeGridDay, listWeek',
          right:'prev today next'
        },
        events: this.test
      },
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
          this.test = response.data
          for(let i=0; i<this.test.length; i++){
            this.test[i].start = Date.parse(this.test[i].start)
            this.test[i].end = Date.parse(this.test[i].end)
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
