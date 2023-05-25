const {createApp} = Vue

const app = createApp({
    data(){
        return{
            totalCompra: null,
        }
    },
    created(){
        this.totalCompra = JSON.parse(localStorage.getItem('resultado'))
    },

})
app.mount('#app')