import React,{useState,useEffect} from 'react'
import  '../../styles/nuestrosProductos.css'
import Producto2 from '../../components/productos/Producto2'
import  '../../styles/cards.css'

function NuestrosProductos() {

const[nuestrosProductos,setNuestrosProductos]=useState(null)
const[loading,setLoading]=useState(true)

useEffect(()=>{
  fetch("http://localhost:3000/api/nuestrosProductos")
  .then((response) => response.json())
    .then(valores =>{
   setNuestrosProductos(valores.data);
    setLoading(false)
  })
  .catch(error => console.log(error))
 },[loading])

if (loading) {
  return(
    <div>
      ...Loading
    </div>
  )
}

  return (
    <body>
    
        <main className="productos">
            <h1>NUESTROS PRODUCTOS</h1>
            <div className="posicion1">
            <section className="allProductos">
         {/*    {
          productos.map(producto => 
            <Producto2 
            nombre = {producto.nombre}
            descuento = {producto.descuento}
            precio = {producto.precio}
            />
          )
        } */}


            </section>
        </div>
        </main>
       
</body>
  )
}

export default NuestrosProductos