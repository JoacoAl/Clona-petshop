

const {createApp} = Vue


const app = createApp( {

  //en data se encuentran las propiedades reactivas
  data(){

    return {

        arrayProductos:[],
        arrayProductos:[],
        detail: [],



      

    }

  },


  //Lo que queremos que se ejecute una sola vez creada nuestra funcion
  created (){

    const url = "https://mindhub-xj03.onrender.com/api/petshop"
    fetch(url)
    .then ( response => response.json ())
    .then ( data => {
      console.log(data)

      this.arrayProductos=data
      console.log(this.arrayProductos)

      this.arrayNombreProducto = this.arrayProductos.map (elemento => elemento.producto)
      console.log(this.arrayNombreProducto)

      console.log(document.location)
      console.log(location.search)

      const locationSearch = location.search
      console.log(locationSearch)

      const params = new URLSearchParams (locationSearch)
      console.log(params)

      const id = params.get ('id')
      console.log(id)

      this.detail = this.arrayProductos.find (elemento => elemento._id == id)
      console.log (this.detail)
      
      
      document.title = `Detalle | ${this.detail.producto }`




    })
    .catch( error => console.log (error))


    },

  
} ) 



app.mount("#app")