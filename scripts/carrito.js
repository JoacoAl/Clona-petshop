const {createApp} = Vue

const app = createApp({
    data() {
      return {
        allEvents: [],
        seleccionadas: [],
        mostrarImagen: false,
        imagenBorrar: false,
      };
    },
    created() {
      this.seleccionadas = JSON.parse(localStorage.getItem('compras')) ?? [];
    },
    methods: {
      comprar() {
        localStorage.removeItem('compras');
        this.seleccionadas = [];
        this.mostrarImagen = true;
      },
      deleteCompras() {
        localStorage.removeItem('compras');
        this.seleccionadas = [];
        this.imagenBorrar = true;
      },
      restar(articulo) {
        if (articulo.__v > 0) {
          articulo.__v--;
        }
      },
      sumar(articulo) {
        if (articulo.__v < articulo.disponibles) {
          articulo.__v++;
        }
      },
    },
  });
  
  app.mount('#app');
  