import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})


new Vue({
  el: '.board__nav',
  methods: {
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // теперь у нас есть доступ к нативному событию
        if (event){
          event.preventDefault();
          alert(message);
        } 
       }   
    }
});

