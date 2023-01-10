import React from 'react'
import bannerHome1500 from '../../assets/bannerHome1500.png'
import bannerHome from '../../assets/bannerHome.png'
import bannerHomeMobile from '../../assets/bannerHomeMobile.png'
import proplanlogo from '../../assets/proplan_logo.png'
import royalcaninlogo from '../../assets/royalcanin_logo.png'
import infinitylogo from '../../assets/infinity_logo.png'
import nosotros1 from '../../assets/quienes.somos.png'
import imgperro from '../../assets/categoriaPerroAncho.png'
import imgperrot from '../../assets/categoriaPerro.png'
import imggato from '../../assets/categoriaGatoAncho.png'
import imggatot from '../../assets/categoriaGato.png'
import categoriaPerro from '../../assets/categoriaPerro.png'
import categoriaGato from '../../assets/categoriaGato.png'
import { NavLink } from 'react-router-dom'


function Main() {

    return (
        <body className='home'>
          
                <section className="banner1500">
                    <img src={bannerHome1500} alt="" />
                </section>
                <section className="banner">
                    <img src={bannerHome} alt="" />
                </section>

                <div className="mainMobile">
                    <section className="bannerMobile">
                        <img src={bannerHomeMobile} alt="" />
                    </section>
                    <section className="section1">
                        <div className="divTitulo">
                            <span className="spanTitulo">
                                <span className="spanAzul">NUESTRAS </span>
                                <span className="spanNaranja">MARCAS</span>
                            </span>
                        </div>
                        <div className="logos">
                            <img src={proplanlogo} alt="" />
                            <img src={royalcaninlogo} alt="" />
                            <img src={infinitylogo} alt="" />
                        </div>
                    </section>
                    <section className="destacadosP">
                        <span className="spanTitulo">
                            <span className="spanAzul">LOS MÁS </span>
                            <span className="spanNaranja">DESTACADOS</span>
                        </span>
                    </section>
                </div>


                <section className="carrouselProductos">
                    <div className="glider-contain">
                        <div className="glider">
                          {/*   {productos.map((producto, index) =>
                                <>
                                    <Productos
                                       
                                        key={index}
                                        id={producto.id}
                                        imgPrincipal={producto.imgPrincipal}
                                        nombre={producto.nombre}
                                        descuento={producto.descuento}
                                        precio={producto.precio}
                                    /></>


                            )}  */}
                        </div>
                        <button aria-label="Previous" className="glider-prev"><i className="fas fa-chevron-left"></i></button>
                        <button aria-label="Next" className="glider-next"><i className="fas fa-chevron-right"></i></button>
                        <div role="tablist" className="dots"></div>
                    </div>
                </section>
                <div className="mainMobile">
                    <div className="links">
                        <div className="perroGato">
                            <section className="perro">
                                <div className="mTexto" >Perros</div>
                                <NavLink className="centrar" to="/Perros ">
                                    <img className="imgPerro" src={imgperro} alt="" />
                                    <img className="imgPerroT" src={imgperrot} alt="" />
                                </NavLink>
                            </section>


                            <section className="gato">
                                <div className="mTexto">Gatos</div>
                                <NavLink className="centrar" to="/Gatos ">
                                    <img className="imgGato" src={imggato} alt="" />
                                    <img className="imgGatoT" src={imggatot} alt="" />
                                </NavLink>

                            </section>

                        </div>

                        <div className="perroGato">
                            <NavLink className="centrar" to="/nosotros">
                                <section className="nosotros">
                                    <div className="nosotrosText">Sobre Nosotros</div>
                                    <div className="paw">
                                        <div className="patita"><i className="fas fa-paw"></i></div>
                                    </div>
                                </section>
                            </NavLink>

                            <a className="centrar" href="/contacto">
                                <section className="contacto">
                                    <div className="nosotrosText">Contacto</div>
                                    <div className="paw">
                                        <div className="patita"><i className="fas fa-envelope"></i></div>
                                    </div>
                                </section>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="mainDesktop">
                    <div className="perroGato">
                        <section className="perro">
                            <div className="mTexto" >Perros</div>
                            <NavLink className="centrar" to="/perro">
                                <img className="imgPerroT" src={categoriaPerro} alt="" />
                            </NavLink>
                        </section>

                        <section className="gato">
                            <div className="mTexto">Gatos</div>
                            <NavLink className="centrar" to="/gato ">
                                <img className="imgGatoT" src={categoriaGato} alt="" />
                            </NavLink>
                        </section>
                    </div>

                    <section className="destacadosP">
                        <span className="spanTitulo">
                            <span className="spanAzul">LOS MÁS </span>
                            <span className="spanNaranja">DESTACADOS</span>
                        </span>
                    </section>

                    <section className="section1">
                        <div className="divTitulo">
                            <span className="spanTitulo">
                                <span className="spanAzul">NUESTRAS </span>
                                <span className="spanNaranja">MARCAS</span>
                            </span>
                        </div>

                        <div className="logos">
                            <img src={proplanlogo} alt="logo proplan" />
                            <img src={royalcaninlogo} alt=" logo royal canin" />
                            <img src={infinitylogo} alt="logo infinity " />
                        </div>
                    </section>

                    <section className="quienSomos">
                        <NavLink to="/nosotros"> <img src={nosotros1} alt="" /></NavLink>
                        <span className="textoColum">
                            <span className="spanQuienesSomos">
                                <span className="textoQuienes">QUIENES </span>
                                <span className="textoSomos"> SOMOS</span>
                            </span>
                            <span className="spanParrafo"> Somos una empresa dedicada a la nutrición y venta de alimentos para
                                mascotas. <br />
                                Te ofrecemos las mejores marcas de balanceado para perros y gatos. <br />
                                Siempre pensando en lo mejor para ellos,nuestros amigos de 4 patas. <br />
                                Brindamos asesoramiento para elegir la mejor opción según las necesidades de tu mascota.
                                <br />
                                Tenemos amplia variedad de productos y contamos con el mejor precio del mercado.
                            </span>
                        </span>
                    </section>

                </div>


           
        </body>

    )
}

export default Main