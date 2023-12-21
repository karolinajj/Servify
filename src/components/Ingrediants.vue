<script setup>
defineProps({
  ingrediants: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="ingrediants-box">
    <h1>Składniki</h1>
    <div class="ingrediants-text-box">{{ingrediants}}</div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 7vh;
}

.ingrediants-text-box{
  text-align: left;
}

.ingrediants-box {
  background-color: white;
  font-family: 'Open Sans', sans-serif;
  color: black;
  border-radius: 7px;
  height: auto;
  width: 50vh;
  justify-content: center;
  align-self: center;
  align-items: center;
}
</style>
