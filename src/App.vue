<script setup>
import Ingrediants from './components/Ingrediants.vue'
</script>

<template>
    <header>
      <a href="#"
         style="text-decoration: none; color: #303236; font-weight: bold; font-style: italic;">O nas</a>
    </header>
    <div class="main">
        <h1>Servify</h1>
        <p>Idealna porcja dla Ciebie</p>
        <h2>
            <input type="text" id="fLink" placeholder="Wklej link do przepisu...">
        </h2>
      
        <!-- <div id="wrapper" style="width: 800px; height:400px; margin-left: auto; margin-right: auto;">
            <div id="result_1" style="width: 400px; float:left;"></div>
            <div id="result_2" style="width: 400px; float:left;"></div>
        </div> -->

      <div>
        <Ingrediants ingrediants="Składniki przpisu" />
      </div>
    
    </div>
  
    <div class="links">
        <h1>Współpracujemy z:</h1>
        <div class="photos">
            <a href="https://aniagotuje.pl" target="_blank"><img class="partnership-image" src="/src/assets/ania_gotuje.jpeg" alt="Ania Gotuje"></a>
            <a href="https://www.kwestiasmaku.com" target="_blank"><img class="partnership-image" src="/src/assets/kwestia_smaku.png" alt="Kwestia Smaku"></a>
            <a href="https://www.rozkoszny.pl" target="_blank"><img class="partnership-image" src="/src/assets/rozkoszny.jpeg" alt="Rozkoszny.pl"></a>
            <a href="https://aniastarmach.pl" target="_blank"><img class="partnership-image" src="/src/assets/ania_starmach.jpeg" alt="Ania Starmach"></a>
        </div>
    
    </div>

    <div class="contact">
        <h1> Skontaktuj się z nami: </h1>
        <h2> contact@servify.pl </h2>
    </div>

</template>
