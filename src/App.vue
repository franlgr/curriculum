<template>
  <div id="app">
    <nav class="bg-blue-300 shadow-lg shadow-teal-500/50">
      <router-link to="/"><button type="button"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-12 py-3 text-center mr-2 mb-2 hover:bg-green-200">Perfil
          1</button>
      </router-link>
      <router-link to="/about"><button type="button"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-12 py-3 text-center mr-2 mb-2 hover:bg-green-200">Perfil
          2</button>
      </router-link>
    </nav>
    <div>
      <p>Ads:</p>
      <Adsense 
      data-ad-client="ca-pub-8627466046363756"
       data-ad-slot="">
      </Adsense>
    </div>
    <router-view />
    <footer class="bg-gray-200 text-center lg:text-left">
      <div class="text-gray-700 text-center p-4 bg-blue-600">
        <BotComponent />
        © 2022 Copyright:
        <a class="text-gray-800" href="https://tailwind-elements.com/">Francisco Grillo</a>
      </div>
    </footer>
  </div>
</template>

<script>
import Adsense from 'vue-google-adsense/dist/Adsense.min.js'
// import { ValidationProvider } from 'vee-validate';
// Vue.component('ValidationProvider', ValidationProvider);
import BotComponent from "./components/botComponent.vue";

// "build": "vue-cli-service build",
export default {
  
  metaInfo: {
    title: 'CV-Fran.G'
  },
    components: {
      BotComponent,
      // ValidationProvider
    }
  // , mounted: {
  //   document:onkeydown = function (e) {
  //     if (e.keyCode === 123) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
  //       return false;
  //     }
  //     if (e.crlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
  //       return false;
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
  //       return false;
  //     }
  //   }
  // }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: url(./assets/fondo.png);
  background-position: center;
    background-repeat: repeat; */
    
    
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
