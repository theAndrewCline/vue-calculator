const app = new Vue({
    el:'.root',
    data: {
        display: '100'
    },
    methods: {
        add: () => {

        },
        subract: () => {

        },
        multiply: () => {

        },
        divide: () => {

        },
        changeValue: (event) => {

            if ( this.display === '0') {
                this.display = event.target.id
            } else {
                this.display = this.display + event.target.id
            }
            console.log(this.display)
        }

    }

})