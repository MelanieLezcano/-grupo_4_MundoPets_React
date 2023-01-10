import React from 'react'
import PropTypes from 'prop-types'
import productosPerro from './ProductosPerros.json'
import Producto2 from '../../components/productos/Producto2'


function Perro() {
   
  return (
    <body className="productos">
      <main>
        <div className="titulo">
          <span className="textProductos"> Productos para </span><span className="textCategoria">Perros</span>
        </div>
        {/* banner perros */}

        <section className="carrouselProductos">
          <div className="glider-contain">
            <div className="glider">

              {productosPerro.map((producto, index) =>

                <Producto2
                  key={index}
                  id={producto.id}
                  imagen={producto.imagen}
                  titulo={producto.titulo}
                  descuento={producto.descuento}
                  precio={producto.precio}
                />
              )}
            </div>
            <button aria-label="Previous" className="glider-prev"><i className="fas fa-chevron-left"></i></button>
            <button aria-label="Next" className="glider-next"><i className="fas fa-chevron-right"></i></button>
            <div role="tablist" className="dots"></div>
          </div>
        </section>
      </main>

    </body>
  )
}

/* Perro.propTypes = {
id: PropTypes.number,
imagen: PropTypes.string,
titulo: PropTypes.string,
descuento: PropTypes.number,
precio: PropTypes.number,
}
Perro.defaultProps = {
id: 0,
imagen: 'default-image.png',
titulo: 'Lorem ipsum amet',
descuento: 0,
precio: 0,
} */

export default Perro
