const {createApp} = Vue

const app = createApp({
    data(){
        return{
            allEvents: [],
            seleccionadas: [],
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/petshop")
        .then((res) => res.json())
        .then((data) => {
          this.allEvents = data;
        })
        .catch((error) => console.error(error)); 
    },
    methods: {
        toggleSeleccion(id){
            if(this.seleccionadas.find(e => e._id == _id)){
                console.log("ya esta")
            }else{
                const aux = this.allEvents.find(e => e._id == _id)
                this.seleccionadas.push( aux )
            }
        }
    }
})