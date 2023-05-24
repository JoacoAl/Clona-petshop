const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      allEvents: [],
      jugueteria: [],
      busqueda: "",
      productosFiltrados: [],
    };
  },
  created() {
    fetch("https://mindhub-xj03.onrender.com/api/petshop")
      .then((res) => res.json())
      .then((data) => {
        this.allEvents = data;
        console.log(this.allEvents);
        this.jugueteria = this.allEvents.filter(
          (fil) => fil.categoria == "jugueteria"
        );
        console.log(this.jugueteria);
      });
  },
  computed: {
    filtrarPorTitulo() {
      this.productosFiltrados = this.jugueteria.filter((e) =>
        e.producto.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    },
  },
});
app.mount("#app");
