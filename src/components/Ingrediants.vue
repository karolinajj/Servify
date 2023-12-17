<script setup>
defineProps({
  ingrediants: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="box">
    <h1>Składniki</h1>
    <div class="text-box">{{ingrediants}}</div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 7vh;
}

.text-box{
  text-align: left;
}

.box {
  background-color: white;
  font-family: 'Open Sans', sans-serif;
  color: black;
  border-radius: 7px;
  height: 50vh;
  width: 50vh;
  align-self: center;
}
</style>
