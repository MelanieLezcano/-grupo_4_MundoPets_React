import React from 'react';
import '../../styles/cards.css'
function Producto({id,imagen,nombre,descuento,precio}) {

const img = `url(/img/productos/${imagen})`

  return (
    <div className="card">
    <a href={`/productos/detalle/${id}`}>
      <div className="card-img">
        <div
          className="card-img-background"
          style={{backgroundImage : img}}
        ></div>
      </div>
      <div className="card-text-box">
        <h3 className="card-name">{nombre}</h3>
        <div className="card-value">
          <p className="card-discount">{descuento}%</p>
          <p className="card-price">$ {precio} - ({precio} * {descuento}/ 100)</p>
        </div>
      </div>
      <div className="card-button">
        <a href="/productos/carrito/2"><button>Añadir al carrito</button></a>
      </div>
      </a>
      </div>
  )
}

export default Producto