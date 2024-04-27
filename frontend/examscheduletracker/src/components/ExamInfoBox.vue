<template>
  <div v-for="exam of examDetails" :key="exam.course_id">
    <SingleExam :exam="exam" />
  </div>
</template>

<script>
import SingleExam from './SingleExam.vue'

export default {
  name: 'ExamInfoBox',
  props:{
      examDetails: Array
  },
  components:{
      SingleExam
  }
}
</script>

<style scoped></style>
