const app = Vue.createApp({

    
    data(){
        return{
            firstName: 'Andre',
            lastName: 'Nguyen',
            email: 'suckxion@gmail.com',
            gender: 'male',
            picture: 'https://media.makeameme.org/created/i-smell-something-bp0smu.jpg', 
        }
    },
    methods: {
        getUser() {
            console.log
        }
    }
})

app.mount('#app')