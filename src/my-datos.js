import { LitElement, html} from "lit-element";
import styleScss from "./my-elementStyle";


export class pagopension extends LitElement {
    static get styles(){
        return [styleScss]
    }
    render() {
        return html`
        <div class="nav">
            <div class="icon"><img src="img/clare.png"></div>
        </div>
        <div class="contene">
            <div class="registrarUsu">
                <b>Pago Pensión</b>
            </div>
            <form method="post" class="formulario">
                <div class="contenedor">
                <div class="registrarUsua">
                <b>Datos Estudiante</b>
                </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Codigo:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Nombres:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Apellidos:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Grado:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                    </div>
                    <div class="registrarUsua">
                        <b>Datos Acudiente</b>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Nombres:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Apellidos:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Tipo Doc:</div>
                            <select>
                                <option disabled selected="">Obligatorio</option>
                                <option>C.C</option>
                                <option>C.E</option>
                            </select>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Num Doc:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Telefono:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Correo:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                    </div>
                    <div class="input-conteni">
                        <div class="datos">Medio de Pago:</div>
                        <select>
                            <option disabled selected="">Obligatorio</option>
                            <option>Banco AV Villas</option>
                            <option>Banco de Bogotá</option>
                            <option>Banco de Occidente</option>
                            <option>Banco Popular</option>
                        </select>
                    </div>
                    <div class="boton">
                        <input type="button" class="btnre" value="REGISTRAR">
                    </div>
                    <div class="boton">
                        <input type="button" class="btnre" value="SIGUIENTE">
                    </div>
                    <div class="boton">
                    <input type="button" class="btnre" value="ANTERIOR">
                    </div>
                </div>
            </form>
        </div>
        <footer>
            <p>Colegio Claretiano 2023</p>
        </footer>
        `;
    }


}
customElements.define('my-datos', pagopension);
