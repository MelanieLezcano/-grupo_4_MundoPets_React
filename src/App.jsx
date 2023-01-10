import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import './styles/styles.css'

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Main from "./components/home/Main";
import Nosotros from "./components/conocenos/Nosotros";
import NuestrosProductos from "./components/productos/NuestrosProductos"
import Gato from "./components/productos/Gato"
import Perro from "./components/productos/Perro"

import Admin from "./components/Admin/Admin"
import Lista from "./components/Admin/lista/Lista";
import Crear from "./components/Admin/Crear";
import Editar from "./components/Admin/Editar";

function App() {

  const [main, setMain] = useState(false)
  const [nosotros, setNosotros] = useState(false)
  const [nuestrosProductos, setNuestrosProductos] = useState(false)
  const [gato, setGato] = useState(false)
  const [perro, setPerro] = useState(false)

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
        <Route path='/nuestrosProductos' element={<NuestrosProductos/>} />
        <Route path='/gato' element={<Gato/>} />
        <Route path='/perro' element={<Perro/>} />
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




