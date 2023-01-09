import React,{useState,useEffect} from 'react'
import  '../../styles/nuestrosProductos.css'
import Producto2 from '../../components/productos/Producto2'
import  '../../styles/cards.css'
import Producto from '../../components/productos/Producto'

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

let productosG=[
  {
    id : 1,
    imagen :  'royal-canin-Gato-kitten--removebg-preview.png',
    nombre :'Royal Canin Kitten 10kg',
    descuento :20,
    precio:  15000
    },
    {
    id : 2,
    imagen :  'gk-agility-Gato-kitten-removebg-preview.png',
    nombre :'Agility Kitten 5kg',
    descuento :20,
    precio:  8000
    },
    {
    id : 3,
    imagen :  'gk-balanced-Gato-kitten-75kg-removebg-preview.png',
    nombre :'VitalCan Balanced Kitten 7.5kg',
    descuento :10,
    precio:  7500
    },
    {
    id : 4,
    imagen :  'gk-excellent-gatito-kitten-75kg-removebg-preview.png',
    nombre :'Excellent Kitten 7.5kg',
    descuento :20,
    precio:  7800
    }
]

let productosP=[
  
  {
    id : 12,
  imagen :'infinity-Perro-cachorro-10kg-removebg-preview.png',
  nombre :'Infinity Cachorro 10kg',
  descuento :20,
  precio:  8000
  },
  {
  id : 13,
  imagen :'pc-complete-Perro-junior--removebg-preview.png',
  nombre :'VitalCan Complete Junior 7.5kg',
  descuento :10,
  precio:  7500
  },
  {
  id : 14,
  imagen : 'pc-dog-selection-Perro-cachorro-x-10kg-removebg-preview.png',
  nombre :'Dog Selection Cachorro 10kg',
  descuento :20,
  precio:  7800
  },
  {
  id : 15,
  imagen :'pc-eukanuba-puppy-large-removebg-preview.png',
  nombre :'Eukanuba Puppy Large 7.5kg',
  descuento :20,
  precio:  8000
  }
]





return (
  <body>

    <main className="productos">
      <h1>NUESTROS PRODUCTOS</h1>
      <div className="posicion1">
        <section className="allProductos">
          {productosG.map((producto, index) =>

            <Producto
              key={index}
              id={producto.id}
              imagen={producto.imagen}
              nombre={producto.nombre}
              descuento={producto.descuento}
              precio={producto.precio}
            />
          )}
          {productosP.map((producto, index) =>

            <Producto
              key={index}
              id={producto.id}
              imagen={producto.imagen}
              nombre={producto.nombre}
              descuento={producto.descuento}
              precio={producto.precio}
            />
          )}
          
          {productosG.map((producto,index) => 
               <Producto2
               key={index}
               id={producto.id}
               imagen={producto.imagen}
               nombre={producto.nombre}
               descuento={producto.descuento}
               precio={producto.precio}
             />
          )}
          {productosP.map((producto,index) => 
               <Producto2
               key={index}
               id={producto.id}
               imagen={producto.imagen}
               nombre={producto.nombre}
               descuento={producto.descuento}
               precio={producto.precio}
             />
          )}

        </section>
      </div>
    </main>

  </body>
)
}

export default NuestrosProductos