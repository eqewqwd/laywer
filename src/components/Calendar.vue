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
        events: [],
        // events: [
        // { title: 'Meeting', start: Date.parse('07 02 2023 22:27'), end:Date.parse('08 02 2023 22:27')},
        // { title: 'Meeting', start: Date.parse('07 02 2023 22:27'), end:Date.parse('08 02 2023 22:27'),},
        // { title: 'Meeting', start: Date.parse('07 02 2023 22:27'), end:Date.parse('08 02 2023 22:27'), color:'red'}
        // ]
      },
    }
  },
  components:{FullCalendar},
  mounted(){
    console.log(new Date())
    console.log(this.calendarOptions.events)
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
            this.calendarOptions.events.push(this.test[i])
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
