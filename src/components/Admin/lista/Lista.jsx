import React from 'react'
import Tbody from './Tbody'

function Lista() {
  return (
<main className="lista">
        <h1>Admin</h1>
        <a href="/admin/crear">
            <button type="button" className="btnbtn-primary">Crear Producto</button>
        </a>

        <div className="table-responsive">
        <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Marca</th>
                <th scope="col">Nombre producto</th>
                <th scope="col">Categoria</th>
                <th scope="col">Subcategoria</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                <th scope="col">Des</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <Tbody />
          </table>
        </div>
    </main>
  )
}

export default Lista