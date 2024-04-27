<template>
  <div>
    <h1>{{header}}</h1>
  </div>
</template>

<script>

export default{ // Exporting Default Object
    name: 'AppHeader',
    props:{

        header:String
    }
}
</script>

<style scoped>

div{
    text-align: center;
}
</style>
