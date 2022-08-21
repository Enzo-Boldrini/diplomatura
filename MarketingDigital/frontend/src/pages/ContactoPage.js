import React from 'react'; 
import '../styles/ContactoPage.css';


const ContactosPage = (props) => {
    return (
        <main className='holder'>
            <div className="contacto">
                <h2>Complete el siguiente formulario</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email"/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono"/>
                    </p>
                    <p>
                        <label>Mensaje</label>
                        <textarea name="mensaje"></textarea>
                    </p>

                    <p className="acciones"> <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otros datos de comunicación</h2>
                <p> Tambien puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Telefono: 4225287</li>
                    <li>Email: contacto@marketing.com.ar</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>

                </ul>


            </div>




        </main>
    );
}
export default ContactosPage;