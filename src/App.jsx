import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Main from "./components/home/Main";
import Nosotros from "./components/conocenos/Nosotros";
import NuestrosProductos from "./components/productos/NuestrosProductos"
import Admin from "./components/Admin/Admin"


import './styles/styles.css'

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
          {/* Admin */}
          <Route path='/admin' element={<Admin/>}/>
         
        </Routes>


        <Footer />



      </BrowserRouter>



    </div>
  );
}

export default App;




