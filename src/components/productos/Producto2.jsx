import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/cards.css'

function Producto2(props) {

  const img = `url(/img/productos/${props.imagen})`
  
  return (
    <div className="card">
    <a href={`/productos/detalle/${props.id}`}>
      <div className="card-img">
        <div
          className="card-img-background"
          style={{backgroundImage : img}}
        ></div>
      </div>
      <div className="card-text-box">
        <h3 className="card-name">{props.titulo}</h3>
        <div className="card-value">
          <p className="card-discount">{props.descuento}%</p>
          <p className="card-price">${props.precio} {/* - ({props.precio} * {props.descuento}/ 100) */}</p>
        </div>
      </div>
      <div className="card-button">
        <a href="/productos/carrito"><button>Añadir al carrito</button></a>
      </div>
      </a>
      </div>
  )
}

Producto2.propTypes = {
  id:PropTypes.number,
  imagen:PropTypes.string,
  titulo:PropTypes.string,
  descuento:PropTypes.number,
  precio:PropTypes.number,
}
Producto2.defaultProps = {
  id:0,
  imagen:'default-image.png',
  titulo:'Lorem ipsum amet',
  descuento:0,
  precio:0,
}

export default Producto2
