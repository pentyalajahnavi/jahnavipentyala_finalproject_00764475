<template>
  <!--Step 3 use the component-->
  <AppHeader header="Exam Schedule Tracker" />
  <ExamInfoBox :examDetails="examDetails" />
</template>

<script>
// Step: 1 Import the components
import AppHeader from './components/AppHeader.vue';
import ExamInfoBox from './components/ExamInfoBox.vue';

export default{
  name: 'App',
  // Step 2: Register the components
  components:{
    AppHeader,
    ExamInfoBox
  },
  data(){
    return {
      examDetails: []
    }
  },
  methods:{
    //promises
    async fetchExamDetails(){
      const res = await fetch('https://exam-wbnl.onrender.com/api');
      const data = await res.json();
      console.log(data);
      return data[0].ExamData;
    }
  },
  async created(){
      this.examDetails = await this.fetchExamDetails();
  }

  // data() => this.data examDetails
  // method => this.method => fetchExamDetails
  // life cycle hooks created() => call our method here

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  /* font-family: 'Montserrat', sans-serif; */
}

.container {
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 0.3em solid black;
  padding: 30px;
  border-radius: 5px;
}

div{
  margin-bottom: 1em;
}
</style>
