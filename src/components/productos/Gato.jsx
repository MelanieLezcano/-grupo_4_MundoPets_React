import React from 'react'
import PropTypes from 'prop-types'
import Producto2 from '../../components/productos/Producto2'
import productosGatos from './ProductosGatos.json'

function Gato() {
 

  return (
    <body className="productos">

      <main>

        <div className="titulo">
          <span className="textProductos"> Productos para </span><span className="textCategoria">Gatos</span>
        </div>
        {/* banner gatos */}

        <section className="carrouselProductos">
          <div className="glider-contain">
            <div className="glider">

              {productosGatos.map((producto, index) =>

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

/* Gato.propTypes = {
  id: PropTypes.number,
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  descuento: PropTypes.number,
  precio: PropTypes.number,
}
Gato.defaultProps = {
  id: 0,
  imagen: 'default-image.png',
  titulo: 'Lorem ipsum amet',
  descuento: 0,
  precio: 0,
}
 */
export default Gato
