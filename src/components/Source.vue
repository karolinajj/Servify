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
        <img class="source-partnership-image" src="/src/assets/ania_gotuje.jpeg" alt="Ania Gotuje">
        <img class="source-partnership-image" src="/src/assets/kwestia_smaku.png" alt="Kwestia Smaku">
        <img class="source-partnership-image" src="/src/assets/rozkoszny.jpeg" alt="Rozkoszny.pl">
        <img class="source-partnership-image" src="/src/assets/ania_starmach.jpeg" alt="Ania Starmach">
        
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 7vh;
}
.source{
    height: auto;
}
.source-photos{
    display: flex;
    justify-content: center;
}

.source-partnership-image {
    max-width: 12%;
    height: auto;
    padding: 1%;
    border-radius: 50%;
}
</style>
