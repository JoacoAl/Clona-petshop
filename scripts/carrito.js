const {createApp} = Vue

const app = createApp({
    data(){
        return{
            allEvents: [],
            seleccionadas: [],
            mostrarImagen: false,
            imagenBorrar: false,
        }
    },
    created(){
        this.seleccionadas = JSON.parse(localStorage.getItem('compras')) ?? []
    },
    methods: {
        comprar(){
            localStorage.removeItem('compras')
            this.seleccionadas = []
            this.mostrarImagen = true
        },
        deleteCompras(){
            localStorage.removeItem('compras')
            this.seleccionadas = []
            this.imagenBorrar = true
        }
    }

})

app.mount('#app')