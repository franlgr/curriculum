
<template>
    <div>
        <div class="flex justify-center" v-if="value">
            <div class="mb-3 xl:w-96">
                <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700">Send me a
                    message:</label>
                <br>
                <div style="margin-bottom:3px;">
                    <input id="name" class="rounded" type="name" placeholder="Name" v-model="name">
                </div>
                <textarea class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " id="exampleFormControlTextarea1" rows="3" placeholder="Your message" v-model="mensaje"></textarea>
                <button @click="sendMsg()" type="button"
                    class="text-white bg-gradient-to-r my-2 from-teal-400 via-teal-500 to-teal-600  hover:bg-gray-700  shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-6 py-2 text-center mr-2 mb-2">Send</button>
            </div>
        </div>
    </div>

</template>

<script>
// import { ValidationProvider } from 'vee-validate';
// Vue.component('ValidationProvider', ValidationProvider);
import 'vuejs-noty/dist/vuejs-noty.css'
export default {
    // components: {
    //     ValidationProvider
    // },
    data() {
        return {
            chat_id: "-778791005",
            mensaje: "",
            name: "",
            value: true
            
        }
    }, methods: {

        sendMsg() {
            document.getElementById("exampleFormControlTextarea1").value = "";
            document.getElementById("name").value = "";
            this.axios.post('https://api.telegram.org/bot5475454785:AAE-wix9C4qRg57VMvCm7hP9aBr9J3-vVls/sendMessage?chat_id=-778791005', {
                chat_id: this.chat_id,
                text:"Nombre: " + this.name + " <|> Mensaje: " + this.mensaje
            }).then((response) => {
                this.$noty.success("Gracias " + this.name +"! " + "Mensaje enviado!");
                console.log("Success!");
            }).catch(function (error) {
                this.$noty.error("Los siento " + this.name + " Error al enviar!");
                console.log("Error!");
            });
        }
    }
}
</script>

