Vue.component('message', {
    data(){
        return {
            text: '',
        }
    },
    methods: {
      setMessage(message){
          this.text = message;
      }
    },
    computed: {
      isVisible(){
          return this.text !== ''
      }
    },
    template: `
    <div class="message-wrapper" v-if="isVisible" @click="setMessage('')">         
        <div class="message-block" v-html="text"></div>
    </div>
    `
});
