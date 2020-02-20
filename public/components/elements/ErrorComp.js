Vue.component('error', {
    data(){
        return {
            text: ''
        }
    },
    methods: {
      setError(error){
          this.text = error
      }
    },
    computed: {
      isVisible(){
          return this.text !== ''
      }
    },
    template: `
    <div class="error-block" @click.self="setError('')" v-if="isVisible"> 
        <p class="error-msg">
            <button class="close-btn" @click="setError('')">&times;</button>
            {{ text }}
        </p>
    </div>
    `
});
