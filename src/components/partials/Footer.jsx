import React from 'react'
import imagengatito2 from '../../assets/gatito2.png'
import logo from '../../assets/LogoMundoPets.png'

function Footer() {
  return (
    <footer>
    <section className="foot">
        <article className="fondoAzul">
            <div className="footerDesktop">
        <ul className="lista">
           <li>Productos</li>
           <li><a href="/productos/Perro ">Perros</a></li>
           <li><a href="/productos/Gato ">Gatos</a></li>
        </ul>
        <div className="divColum">
        <article className="mapsDesktop">
            <h4 className="textoH4">Donde Comprar</h4>
            <a href="https://goo.gl/maps/dBXKhgS7HfVfiNde8"><i className="fas fa-map-marker-alt"></i></a>
        </article>
        <article className="whatsappDesktop">
            <h4 className="textoH4">Contacto</h4>
            <a href="https://web.whatsapp.com/"> <i className="fab fa-whatsapp"></i></a>
            
        </article>
    </div>
        <div className="logo">
            <a href="/"><img src={logo} alt="logo Mundo Pets"/></a>
        </div>
    </div>
        <section className="footerMobile">
    
            <article className="contactanos">
                <a href="mailto:user@server.com"><i className="fas fa-headset"></i></a>{/* <!-- contacto --> */}
                <h4 class="textoContactanos">¿Alguna duda?<br/> Contactanos</h4>
            </article>
            <article className="maps">
                <a href="https://goo.gl/maps/dBXKhgS7HfVfiNde8"><i className="fas fa-map-marker-alt"></i></a>  
            </article>
            <article className="whatsapp">
               
                <a href="https://web.whatsapp.com/"> <i className="fab fa-whatsapp"></i></a>
            </article>
        </section>
    </article>
        <div className="kitty">
            <img src={imagengatito2}alt="gatito tierno fondo amarillo"/>
        </div>
    </section>
        <div className="copyright">
        <p>Copyright <i className="fas fa-copyright"></i> 2022 Mundo Pets | Todos los derechos reservados|</p>
    </div>

</footer>
  )
}

export default Footer