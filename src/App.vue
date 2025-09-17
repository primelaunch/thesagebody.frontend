<script setup>
import FooterBar from './components/FooterBar.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <NavBar/>
  <main>
  <router-view/>
  </main>
  <FooterBar/>
</template>

<style lang="scss">

 main {
  z-index: 2;
}

#app{  
  margin: 0;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden;
  padding: 0;
  box-sizing: border-box;
  text-rendering:geometricPrecision;
}

/* In your main.css or App.vue */
html {
  scroll-behavior: smooth;
}

body {  overflow-anchor: none; 
  margin: 0;
  max-width: 100vw;
  width: 100vw;
  padding: 0;
  box-sizing: border-box;
   overflow-x: hidden;
   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   background-color: #2e1402;
}

* {
  margin: 0;
  padding: 0;
  outline: none;
    box-sizing: border-box;
}
</style>
 