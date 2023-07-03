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
import listWeek from '@fullcalendar/list'

export default {
  name: 'Calendar',
  data: function() {
    return {
      calendarOptions: {
        locale:"he",
        plugins: [listWeek,dayGridPlugin],
        initialView: 'dayGridPlugin',
        headerToolbar: {
          left:'title',
          center:'dayGridMonth,timeGridWeek, timeGridDay, listWeek',
          right:'prev today next'
        },
        events: [
        { title: 'Meeting', start: Date.parse('07 02 2023 22:27'), end:Date.parse('08 02 2023 22:27')},
        { title: 'Meeting', start: Date.parse('07 02 2023 22:27'), end:Date.parse('08 02 2023 22:27'),},
        { title: 'Meeting', start: Date.parse('07 02 2023 22:27'), end:Date.parse('08 02 2023 22:27'), color:'red'}
        ]
      }
    }
  },
  components:{FullCalendar},
  mounted(){
    console.log(new Date())
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
