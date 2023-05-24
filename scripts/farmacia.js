const {createApp} = Vue

const app = createApp ({
    data(){
        return{
            allEvents: [],
            farmacia: []
        }
    },
    created(){
        fetch('https://mindhub-xj03.onrender.com/api/petshop')
        .then(res => res.json())
        .then(data =>{
           this.allEvents = data
           this.farmacia = this.allEvents.filter(fil => fil.categoria == 'farmacia')
           console.log(this.farmacia)
        })
    },
    computed:{

    }
})
app.mount('#app')