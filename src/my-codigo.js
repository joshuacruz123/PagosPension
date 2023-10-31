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
                <b>Datos Banco</b>
            </div>
            <form method="post" class="formulario2">
                <div class="contenedor">
                    <div class="separacion2">
                        <div class="input-contenedor">
                            <div class="datos">Codigo Usuario:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Contraseña:</div>
                            <input type="text" placeholder="obligatorio">
                        </div>
                    </div>
                    <div class="boton">
                        <input type="submit" class="btnPag" value="PAGAR">
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
customElements.define('my-codigo', pagopension);
