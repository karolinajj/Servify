<script setup>
defineProps({
  source: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="source">
    <h1>Wybierz stronę</h1>
    <div class="source-photos">
      <button type="button" class="source-partnership-button" style="background-image: url('/src/assets/ania_gotuje.jpeg')"></button>

      <button type="button" class="source-partnership-button" style="background-image: url('/src/assets/kwestia_smaku.png')"></button>

      <button type="button" class="source-partnership-button" style="background-image: url('/src/assets/rozkoszny.jpeg')"></button>

      <button type="button" class="source-partnership-button" style="background-image: url('/src/assets/ania_starmach.jpeg')"></button>

      <button type="button" class="source-partnership-button" style="background-image: url('/src/assets/chat.webp')"></button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 7vh;
}

.source {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
}

.source-photos {
  display: flex;
  justify-content: center;
  gap: 2vh;
}

.source-partnership-button {
  border: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
}

.source-partnership-button:hover {

}
</style>
