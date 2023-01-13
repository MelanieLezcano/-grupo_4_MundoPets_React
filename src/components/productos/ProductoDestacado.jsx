import React from 'react'
import Producto2 from '../../components/productos/Producto2'
import productos from './ProductosDestacados.json'
import '../../styles/glider.css'
import '../../styles/cards.css'





function ProductoDestacado() {

  
    return (
        <div className="glider">
            {productos.map((producto, index) =>

                <Producto2
                    key={index}
                    id={producto.id}
                    imagen={producto.imagen}
                    titulo={producto.titulo}
                    descuento={producto.descuento}
                    precio={producto.precio}
                />
            )
            }
            <button aria-label="Previous" className="glider-prev"><i className="fas fa-chevron-left"></i></button>
            <button aria-label="Next" className="glider-next"><i className="fas fa-chevron-right"></i></button>
            <div role="tablist" className="dots"></div>
        </div>
    )
}

export default ProductoDestacado


{/* <div  className = "glider" >
    {
        productosDestacados.map((producto, index) =>

            <Producto
                key={index}
                id={producto.id}
                imagen={producto.imagen}
                titulo={producto.titulo}
                descuento={producto.descuento}
                precio={producto.precio}
            />
        )
    }
            </div> */}