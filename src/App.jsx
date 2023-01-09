import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Main from "./components/home/Main";
import Nosotros from "./components/conocenos/Nosotros";
import NuestrosProductos from "./components/productos/NuestrosProductos"
import Admin from "./components/Admin/Admin"


import './styles/styles.css'
import Lista from "./components/Admin/Lista";
import Crear from "./components/Admin/Crear";
import Editar from "./components/Admin/Editar";

function App() {

  const [main, setMain] = useState(false)
  const [nosotros, setNosotros] = useState(false)

  return (
    <div className="home">

      <BrowserRouter>
        <Header />
        <Routes>
          {/* Home */}
          <Route path='/' element={<Main/>}/>
          {/* Sobre Nosotros */}
          <Route path='/nosotros' element={<Nosotros/>}/>
          {/* Productos */}
{/*           <Route path='/' element={<Admin/>}/> */}
          {/* Admin */}
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/lista' element={<Lista/>}/>
          <Route path='/admin/crear' element={<Crear/>}/>
          <Route path='/admin/editar/:id' element={<Editar/>}/>
         
        </Routes>


        <Footer />



      </BrowserRouter>



    </div>
  );
}

export default App;




