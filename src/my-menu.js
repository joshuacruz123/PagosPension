import { LitElement, html} from "lit-element";
import styleScss from "./my-elementStyle";
import './my-pago';
import './my-datos';
import './my-codigo';
import './my-comprobante';
import './my-usuarios';

export class pagopension extends LitElement {
    static get styles(){
        return [styleScss]
    }
    static properties = {
        componente : {Number}
    }
    constructor() {
        super(),
        this.componente = 0;
    }
    obtenerCom (nombreComponente){
        if (nombreComponente === "pago") {
            this.componente = 1
        }else if(nombreComponente === "datos"){
            this.componente = 2
        }else if(nombreComponente === "banco"){
            this.componente = 3
        }else if(nombreComponente === "comprobante"){
            this.componente = 4
        }else if(nombreComponente === "usuarios"){
            this.componente = 5
        }}
    render() {
        return html`
        <div class="nav">
            <div class="icon"><img src="img/clare.png"></div>
        </div>
        <div class="contene">
            <div class="registrarUsu">
                <b>Menu Pago Pensión</b>
            </div>
            <div class="contenedormenumate">
                    <div class="bienvenida"><P>Bienvenido!, Por favor sigue el menu en orden consecutivo</P></div>
                    <div class="ejerciciosmate">
                        <a href="#" @click=${() => this.obtenerCom("pago")}><p>Datos de Pago</P></a>
                        <a href="#" @click=${() => this.obtenerCom("datos")}><p>Datos de Usuario</P></a>
                        <a href="#" @click=${() => this.obtenerCom("banco")}><p>Datos de Banco</P></a>
                        <a href="#" @click=${() => this.obtenerCom("comprobante")}><p>Comprobante de Pago</P></a>
                        <a href="#" @click=${() => this.obtenerCom("usuarios")}><p>Visualizar Usuarios</P></a>
                    </div>
            </div>
        </div>
        <footer>
            <p>Colegio Claretiano 2023</p>
        </footer>

        ${this.componente === 1 ? html`<my-pago></my-pago>` : ""}
        ${this.componente === 2 ? html`<my-datos></my-datos>` : ""}
        ${this.componente === 3 ? html`<my-codigo></my-codigo>` : ""}
        ${this.componente === 4 ? html`<my-comprobante></my-comprobante>` : ""}
        ${this.componente === 5 ? html`<my-usuarios></my-usuarios>` : ""}
        `;
    }


}
customElements.define('my-menu', pagopension);
