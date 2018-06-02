const app = new Vue({
    el:'#root',
    data: {
        value: 0,
        equation: ''
    },
    methods: {
        add: function() {

        },
        subract: function() {

        },
        multiply: function() {

        },
        divide: function() {

        },
        changeValue: function(event) {

            if ( this.value === 0) {
                this.value = Number(event.target.id)
            } else {
                this.value= Number(this.value.toString() + event.target.id)
            }
            console.log(this.value)
        }

    }

})