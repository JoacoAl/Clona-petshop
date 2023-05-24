const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      allEvents: [],
      farmacia: [],
      busqueda: "",
      filtroTitulo: [],
    };
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/petshop")
      .then((res) => res.json())
      .then((data) => {
        this.allEvents = data;
        this.farmacia = this.allEvents.filter((fil) => fil.categoria == "farmacia");
        
        console.log(this.farmacia);
      })
      .catch((error) => console.error(error));
  },
  
  methods: {
    filtrarPorTitulo() {
      return this.farmacia.filter((e) =>
        e.producto.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    },
    
  },
  
  
});

app.mount("#app");