<template>
  <div
    class="examdetails"
    :style="{backgroundColor: this.getBackgroundColor(exam.course_id)}"
  >
    <h4>{{ exam.exam_time }}</h4>
    <h4>{{ exam.exam_venue }}</h4>
    <h4>{{ exam.exam_duration }}</h4>
  </div>
</template>

<script>
export default {
  name: 'ExamDetailsModal',
  props: {
    exam: Object
  },
  methods:{
    getBackgroundColor(course_id){
      switch(course_id){
        case 1: return "#cdb4db";
        case 2: return "#ffd97d";
        case 3: return "#ffcad4";
        case 4: return "#bde0fe";
        case 5: return "#ccd5ae";
      }
    }
  }
}
</script>

<style>
.examdetails{
  padding: 1em;
  width: 80%;
  margin: auto;
  border:none;
}
</style>
