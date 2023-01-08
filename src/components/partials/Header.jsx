import React from 'react'
import logo from '../../assets/LogoMundoPets2.png'
import { NavLink } from 'react-router-dom' 


function Header() {
   
   const burgerMenu = () =>{
    console.log("hiciste click en la hamburguesita")
    document.querySelector('#burger').classList.toggle('desaparecer')
   }    
 

  return (
    <header>
  <div className="top">
    <div className="logo">
      <NavLink to="/">
      <img src={logo} alt="logo Mundo Pets"/>
      </NavLink>
      
    </div>
  </div>
  <div className="carrito">
 
 <NavLink to="carrito">
 <i className="fas fa-shopping-cart"></i>
 </NavLink>
    

  </div>
  <div className="usuario">
  
      <li className="bienvenido"> 
      <NavLink to="/perfil">

      </NavLink>
       </li>
     
          <li  className="sesion"> 
          <NavLink  to="/login">
            Inicia Sesión
          </NavLink>
          </li>
      
    </div>
    <div className="register">
    
        <li>
          <NavLink to="/register">
            Registrate
          </NavLink>
        </li>
    
    </div>
    <div className="admin">
    
    <li>
      <NavLink to="/admin">
        Admin
      </NavLink>
    </li>

</div>
    <div className="nuestrosProductos">
     <li>
      <NavLink to="/nuestrosProductos">
         Productos
        </NavLink>
        </li>
    </div>
  <div claclassNamess="buscador">
      <form action="/busqueda" method="get" target="_blank" id="barraBusqueda">
        <input type="text" name= "search" id="search" className="barrabusqueda" maxlength="100" placeholder="Busca tu producto"/>
        <button type="submit" className="lupa"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  
    <div className="burger">
      <input type="checkbox" name="burger" id="burger" className="burger-menu" checked   onClick={burgerMenu}  />
      <label for="burger" className="burger-label" id="burger" ><i className="fas fa-bars"></i></label>
      <nav>
        <div className="center" id="menu">
          <ul className="menu" id="menu">
         
              <li>
                <NavLink to="/perfil">Mi perfil</NavLink></li> 
       
              <li><NavLink to="/register">Registrate</NavLink></li>
              <li><NavLink to="/login">Ingresá</NavLink></li>
            
              <li><NavLink to="/carrito">Carrito</NavLink></li>
           
              <li><NavLink to=" ">Mis compras</NavLink></li>
           
              <li><NavLink to="/nuestrosProductos "> Todos los Productos</NavLink></li>
              <li><NavLink to="/productos/Perro ">Categoría Perro</NavLink></li>
              <li><NavLink to="/productos/Gato ">Categoría Gato</NavLink></li>
              <li><NavLink to="/contacto">Contacto</NavLink></li>
           
              <li> <form action="/usuarios/cerrarSesion?_method=DELETE" method="post">
                <button type="submit">Cerrar Sesión</button>
            </form></li>
           
          </ul>
        </div>
      </nav>
    </div>
  </header>
  )
}


export default Header