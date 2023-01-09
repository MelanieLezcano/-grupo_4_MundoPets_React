import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './admin.css'
function Admin() {

 return (
    <main className='Dashboard'>
      <section className="statis">
        <div className="box">
          <i className="far fa-eye"></i>
          <h3>5,154</h3>
          <p className="lead">Visitas a la Web</p>
        </div>
        <div className="box">
          <i className="far fa-user"></i>
          <h3>245</h3>
          <p className="lead">Usuarios Registrados</p>
        </div>
        <div className="box">
          <i className="fas fa-shopping-cart"></i>
          <h3>5,154</h3>
          <p className="lead">Cantidad de Productos</p>
        </div>
        <div className="box">
          <i className="far fa-envelope"></i>
          <h3>5,154</h3>
          <p className="lead">Mensajes</p>
        </div>
      </section>
      <section className='separador'>
            <h3>ADMINISTRACION</h3>
            <p>Administra tu pagina</p>
      </section>
      <section className='admin'>
       

        {/* Usuarios */}
        <div className="box">
          <NavLink to="/admin/usuarios">
            <i className="fas fa-users icon"></i>
            <h4>Usuario</h4>
            <p> Editar Usuarios </p>
            <div className="background_hover"> </div>
          </NavLink>
        </div>
        {/* Productos */}
          <div className="box">
              <NavLink to="/admin/productos">
                <i className="fas fa-shopping-cart icon"></i>
                <h4>Productos</h4>
                <p> Editar Productos </p>
                <div className="background_hover"> </div>
              </NavLink>
          </div>
        {/* Mensajes */}
            <div className="box">
            <NavLink to="/admin/mensajes">
                <i className="fas fa-envelope icon"></i>
                <h4>Mensajes</h4>
                <p> Responder Mensajes </p>
                <div className="background_hover"> </div>
                </NavLink>
            </div>
      
      </section>
    </main>
  )
}

export default Admin