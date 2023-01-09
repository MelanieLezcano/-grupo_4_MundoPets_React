import React from 'react'

function Tbody() {

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
            <tbody>
                {productos.map((producto,index) => 
                    <tr>
                    <th scope="row"><a href={`/admin/editar/${producto.id}`}>{producto.id}</a></th>
                    <td><a href={`/admin/editar/${producto.id}`} >{producto.marca}</a></td>
                    <td><a href={`/admin/editar/${producto.id}`} >{producto.titulo}</a></td>
                    <td><a href={`/admin/editar/${producto.id}`} >{producto.categoria}</a></td>
                    <td><a href={`/admin/editar/${producto.id}`} >{producto.subcategoria}</a></td>
                    <td><a href={`/admin/editar/${producto.id}`} >{producto.stock}</a></td>
                    <td><a href={`/admin/editar/${producto.id}`} >{producto.precio}</a></td>
                    <td><a href={`/admin/editar/${producto.id}`} >{producto.descuento}</a></td>
                    <td>
                          <div>
                              <a href={`/admin/editar/${producto.id}`}>
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
  )
}

export default Tbody