<script setup>
defineProps({
  servings: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="servings-portions">
    <h1>Wybierz liczbę porcji</h1>
    <div class="servings-buttons">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">4</button>
        <input type="text" id="fLink" placeholder="Wpisz liczbę porcji" />

    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 5vh;
}

.servings-portions {
  font-family: 'Open Sans', sans-serif;
  color: black;
  border-radius: 20%;
  align-self: center;
  align-items: center;
  justify-content: center;
}

.servings-buttons{
    display: flex;
    align-items: center;
  justify-content: center;
  gap: 3vh;
}

.servings-buttons button{
    font-family: 'Open Sans', sans-serif;
    font-size: 7vh;
    color:black;
    border-radius: 50%;
    height: 20vh;
    width: 20vh;
    background-color: white;
}

.servings-buttons input{
  font-family: 'Open Sans', sans-serif;
  font-size: 2vh;
  color:black;
  border-radius: 50%;
  height: 20vh;
  width: 20vh;
  background-color: white;
  text-align: center;
}


</style>
