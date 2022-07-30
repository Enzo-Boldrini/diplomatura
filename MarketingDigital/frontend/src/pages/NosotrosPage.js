
import React from 'react'; 

const NosotrosPage = (props) => {
    return (
        <main className='holder'>
            
            <div className="Staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="./img/nosotros/nosotros1.jpg" alt="Esteban Quinteros"/>
                            <h5>Esteban Quinteros</h5>
                            <h6>Gerente General</h6>
                            <p>Especialista digital con más de 20 años de experiencia en campañas online y desarrollo de
                                proyectos para empresas en todo el panorama digital.
                            </p>
                    </div>
                    <div className="persona">
                        <img src="./img/nosotros/nosotros2.jpg" alt="Julian Gomez"/>
                            <h5>Julian Gomez</h5>
                            <h6>Lider de Finanzas</h6>
                            <p>Encargado de la gestión financiera dentro de la organización. Es responsable de la planificación,
                                ejecución y los resultados financieros de la compañ
                            </p>
                    </div>
                    <div className="persona">
                        <img src="./img/nosotros/nosotros3.jpg" alt="Claudia Ayuso"/>
                            <h5>Claudia Ayuso</h5>
                            <h6>Community Manager</h6>
                            <p>Encargada de construir, ampliar y administrar comunidades online, a través
                                de herramientas analíticas que le permiten medir cómo los usuarios entienden y perciben la
                                marca.</p>
                    </div>
                    <div className="persona">
                        <img src="./img/nosotros/nosotros4.jpg" alt="Cintia Hernandez"/>
                            <h5>Cintia Hernandez</h5>
                            <h6>Lider de Marketing</h6>
                            <p>Especialista en redacción de contenidos web, copywriting digital, campañas de marketing que
                                permiten un mayor alcance y aprovechamiento de los recursos para el crecimiento digital.</p>
                    </div>
                    <div className="persona">
                        <img src="./img/nosotros/nosotros5.jpg" alt="Cristian López"/>
                            <h5>Cristian López</h5>
                            <h6>Analista de Datos</h6>
                            <p>
                                Encargado de interpretar datos para establecer estrategias dentro de la compañía. Su trabajo
                                implica tanto la recopilación de datos como el análisis de forma estadística de los mismos.

                            </p>

                    </div>


                </div>
            </div>

        </main>
    );
}
export default NosotrosPage;