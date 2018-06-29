
const app = new Vue({
  el: '#root',
  data: {
    value: 0,
    equation: ''
  },
  methods: {
    math: math,
    changeValue: function(event) {
      if (this.value === 0) {
        this.value = Number(event.target.id)
      } else {
        this.value = Number(this.value.toString() + event.target.id)
      }
    },
    clearLine: function() {
      this.value = 0
    },
    clearEverything: function() {
      this.value = 0
      this.equation = ''
    },
    enter: function() {
      let finalEquation = `${this.equation} ${this.value}`
      this.value = eval(finalEquation)
      this.equation = ''
    }
  }
})
