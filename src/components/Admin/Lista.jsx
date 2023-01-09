import React from 'react'

function Lista() {

    let productos = [
        {
            id: 1,
            categoria: "Gato",
            subcategoria: "alimentos",
            titulo: "Royal Canin Kitten 10kg",
            marca: "Royal Canin",
            precio: 15000,
            descuento: 20,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam, placeat eius perferendis aspernatur doloribus aliquid, quibusdam aperiam hic a tenetur! Quis rem aut qui expedita ut aspernatur nisi officiis.",
            stock: 13,
        },
        {
            id: 2,
            categoria: "Gato",
            subcategoria: "alimentos",
            marca: "Agility",
            titulo: "Agility Kitten 5kg",
            precio: 8000,
            descuento: 20,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam, placeat eius perferendis aspernatur doloribus aliquid, quibusdam aperiam hic a tenetur! Quis rem aut qui expedita ut aspernatur nisi officiis.",
            stock: 13,
        },
        {
            id: 3,
            categoria: "Gato",
            subcategoria: "alimentos",
            marca: "VitalCan",
            titulo: "VitalCan Balanced Kitten 7.5kg",
            precio: 7500,
            descuento: 10,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam, placeat eius perferendis aspernatur doloribus aliquid, quibusdam aperiam hic a tenetur! Quis rem aut qui expedita ut aspernatur nisi officiis.",
            stock: 13,
        },
        {
            id: 4,
            categoria: "Gato",
            subcategoria: "alimentos",
            marca: "Excellent",
            titulo: "Excellent Kitten 7.5kg",
            precio: 7800,
            descuento: 20,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam, placeat eius perferendis aspernatur doloribus aliquid, quibusdam aperiam hic a tenetur! Quis rem aut qui expedita ut aspernatur nisi officiis.",
            stock: 13,
        },
        ]

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
            <tbody>
                {productos.map((producto,index) => 
                    <tr>
                    <th scope="row"><a href="/admin/editar">{producto.id}</a></th>
                    <td><a href="/admin/editar" >{producto.marca}</a></td>
                    <td><a href="/admin/editar" >{producto.titulo}</a></td>
                    <td><a href="/admin/editar" >{producto.categoria}</a></td>
                    <td><a href="/admin/editar" >{producto.subcategoria}</a></td>
                    <td><a href="/admin/editar" >{producto.stock}</a></td>
                    <td><a href="/admin/editar" >{producto.precio}</a></td>
                    <td><a href="/admin/editar" >{producto.descuento}</a></td>
                    <td>
                          <div>
                              <a href="/admin/editar">
                                <button type="button" className="btnbtn-success"><i className="fas fa-edit"></i></button>
                              </a>
                                <form action="/admin/eliminar?_method=DELETE" method="post">
                                  <button type="submit" className="btnbtn-danger"><i className="fas fa-trash"></i></button>
                                </form>
                          </div>  
                        </td>
                    </tr>
                    )}
            </tbody>
          </table>
        </div>
    </main>
  )
}

export default Lista