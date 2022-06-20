<template>

  <div class="home">
    <!-- component -->
    <div class="bg-gradient-to-b from-blue-200 to-blue-400">
      <section>
        <section class="text-gray-800 body-font ">
          <div class="container px-5 py-5 mx-auto ">
            <div
              class="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col bg-gradient-to-b from-blue-200 to-blue-400">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0 ">
                <img class="rounded-full border-double border-4 border-indigo-600 " src="../assets/perfil.jpg" />
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 class="text-black text-3xl title-font font-bold mb-2">Francisco Grillo</h1>
                <p class="leading-relaxed text-base text-2xl">Front-End Developer</p>
                <hr>
                <br>
                <div class="md:flex font-bold text-gray-800">
                  <div class="w-full md:w-1/2 flex space-x-3">
                    <div class="w-1/2 hover:bg-green-200 shadow-lg py-1 shadow-teal-500/50 rounded">
                      <a href="mailto:grilfran90@gmail.com">
                        <div class="flex justify-center items-center">
                          <img class="w-10 h-10 bg-none"
                            src="https://silly-jang-cee9aa.netlify.app/img/email.f7656824.png" alt="">
                        </div>
                        <p class="flex justify-center items-center">grilfran90@gmail.com
                        </p>
                      </a>
                    </div>
                    <div class="w-1/2 hover:bg-green-200 rounded py-2 shadow-lg shadow-teal-500/50">
                      <a href="https://wa.me/543548417898">
                        <div class="flex justify-center items-center">
                          <img class="w-10 h-10" src="https://silly-jang-cee9aa.netlify.app/img/smartphone.342a8238.png"
                            alt="">
                        </div>
                        <p class="flex justify-center items-center">+54(3548)417898</p>
                      </a>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 flex space-x-3">
                    <div class="w-1/2 hover:bg-green-200 rounded py-2 shadow-lg shadow-teal-500/50">
                      <div class="flex justify-center items-center">
                        <img class="w-10 h-10" src="https://silly-jang-cee9aa.netlify.app/img/location.82273d10.png"
                          alt="">
                      </div>
                      <p class="flex justify-center items-center">La Cumbre, Córdoba</p>
                    </div>
                    <div class="w-1/2 hover:bg-green-200 rounded py-2 shadow-lg shadow-teal-500/50">
                      <a href="https://github.com/franlgr">
                        <div class="flex justify-center items-center">
                          <img class="w-10 h-10" src="https://silly-jang-cee9aa.netlify.app/img/github.b37b05a7.png"
                            alt="">
                        </div>
                        <p class="flex justify-center items-center">github.com/franlgr</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Languages-->
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <p class="leading-relaxed text-base text-2xl flex justify-center items-center">Languages</p>
              <hr>
              <br>
              <div class="md:flex font-bold text-gray-800">
                <div class="w-full md:w-33 flex space-x-3">
                  <div v-on:click="value =!value"
                    class="w-full hover:bg-green-200 py-1 shadow-lg shadow-teal-500/50 rounded-full">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded" src="../assets/jslogo.jpg" alt="">
                    </div>
                    <p class="flex justify-center items-center" v-if="value">Javascript</p>
                  </div>
                  <div v-on:click="value =!value"
                    class="w-full hover:bg-green-200 py-1 shadow-lg shadow-teal-500/50 rounded-full">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded" src="../assets/htmllogo.jpg" alt="">
                    </div>
                    <p class="flex justify-center items-center" v-if="value">HTML</p>
                  </div>
                  <div v-on:click="value =!value"
                    class="w-full hover:bg-green-200 py-1 shadow-lg shadow-teal-500/50 rounded-full">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded" src="../assets/csslogo.png" alt="">
                    </div>
                    <p class="flex justify-center items-center" v-if="value">Css</p>
                  </div>
                </div>
              </div>
            </div>
            <!---->
            <!--Skills-->
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <p class="leading-relaxed text-base text-2xl flex justify-center items-center">Skills</p>
              <hr>
              <br>
              <div class="md:flex font-bold text-gray-800">
                <div class="w-full md:w-1/2 flex space-x-3">
                  <div v-on:click="value =!value"
                    class="w-1/2 hover:bg-green-200 shadow-lg py-1 shadow-teal-500/50 rounded-full">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded" src="../assets/logo.png" alt="">
                      <img class="w-10 h-10 rounded" src="../assets/nuxtlogo.png" alt="">
                    </div>
                    <p class="flex justify-center items-center" v-if="value">Vue.js & Nuxt.js</p>
                  </div>
                  <div v-on:click="value =!value"
                    class="w-1/2 hover:bg-green-200 py-1 shadow-lg shadow-teal-500/50 rounded-full">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded" src="../assets/tailwindlogo.png" alt="">
                    </div>
                    <p class="flex justify-center items-center" v-if="value">TailwindCss</p>
                  </div>
                </div>
                <div class="w-full md:w-1/2 flex space-x-3">
                  <div v-on:click="value =!value"
                    class="w-1/2 hover:bg-green-200 py-1 shadow-lg shadow-teal-500/50 rounded-full">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded" src="../assets/bootstraplogo.png" alt="">
                    </div>
                    <p class="flex justify-center items-center" v-if="value">Bootstrap</p>
                  </div>
                  <div v-on:click="value =!value"
                    class="w-1/2 hover:bg-green-200 py-1 shadow-lg shadow-teal-500/50 rounded-full">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded" src="../assets/gitlogo.png" alt="">
                    </div>
                    <p v-if="value" class="flex justify-center items-center">Git</p>
                  </div>
                </div>
              </div>
              <br>
            </div>
            <!---->
            <!--Online Works-->
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <p class="leading-relaxed text-2xl flex justify-center items-center">Online Works</p>
              <hr>
              <br>
              <div class=" w-full md:w-full space-x-3 flex justify-center items-center">
                <div v-on:click="congrats =!congrats"
                  class="bg-gradient-to-b from-blue-300 to-blue-600 w-1/2 hover:bg-green-200 py-1 shadow-lg shadow-teal-500/50 rounded-full">
                  <div class="flex justify-center items-center">
                    <p>Yendo.site</p>
                  </div>
                </div>
                <div v-on:click="success =!success"
                  class="bg-gradient-to-b from-blue-300 to-blue-600 w-1/2 hover:bg-green-200 py-1 shadow-lg shadow-teal-500/50 rounded-full">
                  <div class="flex justify-center items-center">
                    <p>Movimiento popular La Dignidad</p>
                  </div>
                </div>
              </div>
              <!---->
              <div class="w-full md:w-full space-x-3 flex justify-center items-center" style="margin-top: 10px">
                <div class="bg-gradient-to-b from-blue-300 to-blue-600 max-w-full rounded overflow-hidden shadow-lg"
                  v-if="congrats">
                  <div class="flex justify-center items-center">
                    <img class="w-40 py-4" src="../assets/yendo.png" alt="Sunset in the mountains">
                  </div>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 flex justify-center items-center">Yendo.site</div>
                    <div class="">
                      <p class="text-gray-700 text-base">
                        Yendo.site es una app para encontrar todos los eventos en un solo lugar. Diseñada y creada por
                        un amigo Senior.
                        Ayudo maquetando algunos componentes con vue.js & Nuxt.js. también usando Apis para conectar
                        datos. </p>
                    </div>
                  </div>
                  <div class="px-6 pt-4 pb-2 flex justify-center items-center">
                    <a href="http://yendo.site">
                      <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ir
                        a Yendo.site</span>
                    </a>
                  </div>
                </div>
                <!---->
                <div class="bg-gradient-to-b from-blue-300 py-3 to-blue-600 max-w-full rounded overflow-hidden shadow-lg"
                  v-if="success">
                  <div class="flex justify-center items-center">
                    <img class="w-40 rounded-full" src="../assets/dignidad.jpg" alt="Sunset in the mountains">
                  </div>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 flex justify-center items-center">Movimiento popular La Dignidad
                    </div>
                    <div class="flex justify-center items-center">
                      <a href="https://mp-rural-dignidad.herokuapp.com/">
                        <p class="text-gray-700 text-base">
                          MP-La Dignidad es un sitio para brindar información sobre las actividades y los hechos más
                          importantes de la organización social.
                          Creada y diseñada por mi. Usando Nuxt.js, TailwindCss y Axios entro otros. En producción.
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="px-6 pt-4 pb-2 flex justify-center items-center">
                    <div>
                      <a href="https://mp-rural-dignidad.herokuapp.com/">
                        <span
                          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ir
                          a MP-LD</span>
                      </a>
                    </div>
                    <br>
                    <div>
                      <a href="https://mp-ladignidad.herokuapp.com/">
                        <span
                          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ir
                          a (v1)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Skills(2)-->
            <!-- <div
              class="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col bg-gradient-to-b from-blue-200 to-blue-400">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 class="text-black text-3xl title-font font-bold mb-2 flex justify-center items-center">Skills
                  Front-End</h1>
                <div class="lg:w-full flex space-x-3">
                  
                  <div
                    class="w-full hover:bg-green-200 rounded max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100">
                    <div class="flex justify-center items-center ">
                      <img class="w-10 h-10" src="../assets/logo.png" alt="">
                    </div>
                    <p class="flex justify-center items-center">Vuejs</p>
                  </div>
                  <div class="w-full hover:bg-green-200 rounded">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded-full" src="../assets/jslogo.jpg" alt="">
                    </div>
                    <p class="flex justify-center items-center">Javascript</p>
                  </div>
                  <div class="w-full hover:bg-green-200 rounded">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded-full" src="../assets/htmllogo.jpg" alt="">
                    </div>
                    <p class="flex justify-center items-center">HTML-5</p>
                  </div>
                  <div class="w-full hover:bg-green-200 rounded">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10 rounded-full" src="../assets/csslogo.png" alt="">
                    </div>
                    <p class="flex justify-center items-center">CSS</p>
                  </div>
                  <div class="w-full hover:bg-green-200 rounded">
                    <div class="flex justify-center items-center">
                      <img class="w-10 h-10" src="../assets/tailwindlogo.png" alt="">
                    </div>
                    <p class="flex justify-center items-center">TailwindCss</p>
                  </div>
                  <div class="w-full hover:bg-green-200 rounded">
                    <div class="flex justify-center items-center bg-none">
                      <img class="w-10 h-10 rounded-full bg-none" src="../assets/bootstraplogo.png" alt="">
                    </div>
                    <p class="flex justify-center items-center">Bootstrap</p>
                  </div>
                  <div class="w-full hover:bg-green-200 rounded">
                    <div class="flex justify-center items-center ">
                      <img class="w-10 h-10 rounded-full" src="../assets/gitlogo.png" alt="">
                    </div>
                    <p class="flex justify-center items-center">Git</p>
                  </div>
                </div>
            </div>
            </div> -->
          </div>


        </section>
      </section>
    </div>



    <!-- <p v-for="item in mensajes">{{ item }}</p>
    {{mensajes}}
    <h1>CHAT SOCKET</h1>
    <p>tu mensaje es: {{mensajes}}</p>
    <br>
    <input type="text" v-model="mensaje">
    <button class="titulo" @click="disparar()">enviar mensaje</button> -->
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      value: false,
      success: false,
      congrats: false
     
  }
  },
//   methods: {
//     disparar() {
//       console.log(this.mensaje);
//       this.mensajes.push(this.mensaje)
//   }
//  }
  }

</script>

<style>

</style>