import React from 'react'
import PropTypes from 'prop-types'

function Producto2(props) {
  return (
    <div className="card">
    <a href="/productos/detalle">
      <div className="card-img">
        <div
          className="card-img-background"
          style="background-image: url('/img/{imagenes}')"
        ></div>
      </div>
      <div className="card-text-box">
        <h3 className="card-name">nombre</h3>
        <div className="card-value">
          <p className="card-discount">descuento%</p>
          <p className="card-price">$ precio - (precio * descuento/ 100)</p>
        </div>
      </div>
      <div className="card-button">
        <a href="/productos/carrito/2"><button>Añadir al carrito</button></a>
      </div>
      </a>
      </div>
  )
}

Producto2.propTypes = {
 
  imgPrincipal:PropTypes.string,
  nombre:PropTypes.string,
  descuento:PropTypes.number,
  precio:PropTypes.number,
}
Producto2.defaultProps = {
 
  imgPrincipal:PropTypes.string,
  nombre:PropTypes.string,
  descuento:PropTypes.number,
  precio:PropTypes.number,
}

export default Producto2
