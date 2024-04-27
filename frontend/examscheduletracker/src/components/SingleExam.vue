<template>
  <div
    class="singleexamdiv"
    :style="{backgroundColor: this.getBackgroundColor(exam.course_id),border: '1px solid '+this.getBackgroundColor(exam.course_id)}"
    @click="showDetailsModal(exam)"
  >
    <div>
      <h2>{{exam.course_name}}</h2>
      <h4>{{exam.exam_date}}</h4>
    </div>
    <div>
      <img
        src="https://img.icons8.com/?size=30&id=101314&format=png"
        v-if="selectedExam"
      />
      <img src="https://img.icons8.com/?size=30&id=60662&format=png" v-else />
    </div>
  </div>
  <ExamDetailsModal :exam="exam" v-if="selectedExam" />
</template>

<script>
import ExamDetailsModal from './ExamDetailsModal.vue';

export default{
  name: 'SingleExam',
  components:{
    ExamDetailsModal
  },
  data(){
    return{
      selectedExam: false
    }
  },
  props:{
      exam: Object,
  },
  methods: {
    showDetailsModal(exam) {
      this.$emit('show-details-modal', exam);
      this.selectedExam = !this.selectedExam;
    },
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

<style scoped>

h4{
  margin: 2px;
}

.singleexamdiv{
  display: flex;
  justify-content:space-between;
  align-content:center;
  padding: 1em;
  width: 80%;
  margin: auto;
  border-radius: 5px;
}
</style>
