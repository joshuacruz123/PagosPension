import { LitElement, html } from "lit-element";
import styleScss from "./my-elementStyle";

class pagopension extends LitElement {
    static get styles(){
        return [styleScss]
    }

    static get properties() {
        return {
          pago: { type: Array },
          serviciopagar: { type: String },
          codestudiante: { type: String },
          mes: { type: String },
          cantmeses: { type: Date },
          valorpension: { type: String },
          totalPagar: { type: String},
          confirmar: { type: Boolean},
        };
      }

      constructor() {
        super();
        this.pago = [];
        this.serviciopagar = '';
        this.codestudiante = '';
        this.mes = '';
        this.cantmeses = '';
        this.valorpension = '';
        this.totalPagar = '';
        this.confirmar = '';
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
            <form @submit=${this._envioUs} class="formulario">
            <ul>
            ${this.pago.map(
              (pagos) =>
                html`
                  <li>${pagos.serviciopaga} - ${pagos.codestudiant} - ${pagos.me} - ${pagos.cantmese} - ${pagos.valorpensio} - ${pagos.totalPaga} - ${pagos.confirma}</li>
                `
            )}
          </ul>
                <div class="contenedor">
                <div class="registrarUsua">
                <b>Datos de Pago</b>
                </div>
                <div class="input-contene">
                    <div class="datos">Servicio a pagar:</div>
                    <select>
                        <option disabled selected="">Obligatorio</option>
                        <option .value=${this.serviciopagar} @input=${this._EntradaServicio}> Pago de Pension Colegio Claretiano de Bosa</option>
                    </select>
                </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Codigo estudiante:</div>
                            <input type="text" placeholder="obligatorio" .value=${this.codestudiante} @input=${this._EntradaCodigo}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Confirma cod estu:</div>
                            <input type="text" placeholder="obligatorio" .value=${this.codestudiante} @input=${this._ConfirmarCodigo}>
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Meses:</div>
                            <input type="text" placeholder="Nombre meses a pagar" .value=${this.mes} @input=${this._EntradaMes}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Cantidad meses:</div>
                            <input type="text" placeholder="Numero meses a pagar" .value=${this.cantmeses} @input=${this._EntradaCantM}>
                        </div>
                    </div>
                    <div class="separacion">
                        <div class="input-contenedor">
                            <div class="datos">Valor pensión mensual:</div>
                            <input type="text" placeholder="obligatorio" .value=${this.valorpension} @input=${this._EntradaValorM}>
                        </div>
                        <div class="input-contenedor">
                            <div class="datos">Total a Pagar:</div>
                            <input type="text" placeholder="0" value=${this.totalPagar} @input=${this._ConfirmTotal}>
                            <div class="boton">
                                <input type="button" class="btntot" value="Total">
                            </div>
                        </div>
                    </div>
                    <div class="registrarUsua">
                        <b>Confirmar Pago</b>
                    </div>
                    <div class="input-conteni">
                        <div class="datos">¿Confirmas tu pago?:</div>
                        <input type="text" placeholder="si o no (minusculas)" .value=${this.confirmar} @input=${this._EntradaConfirm}>
                    </div>
                    <div class="boton">
                        <input type="button" class="btnre" value="REGISTRAR" ?disabled=${!this.confirmar} @click=${this._envioUs}>
                    </div>
                </div>
            </form>
        </div>
        <footer>
            <p>Colegio Claretiano 2023</p>
        </footer>
        `;
    }

    _EntradaServicio(event) {
        this.serviciopagar= event.target.value;
      }
    
    _EntradaCodigo(event) {
        this.codestudiante = event.target.value;
      }

    _ConfirmarCodigo(event) {
        const codigoConfirmacion = event.target.value;
        if (codigoConfirmacion === this.codestudiante) {
          this.confirmar = true;
        } else {
          this.confirmar = false;
        }
      }
      // Compara el código ingresado con el código de confirmación

    _EntradaMes(event) {
        this.mes = event.target.value;
      }

      _CalcularTotal() {
        const meses = parseFloat(this.cantmeses);
        const valorPension = parseFloat(this.valorpension);
        const total = meses * valorPension;
        this.totalPagar = total.toFixed(2);
      }
      //Función para convertir y calcular la cantidad de meses por el valor de la pensión a números y combierte el total a dos decimales

    _EntradaCantM(event) {
        this.cantmeses = event.target.value;
        this._CalcularTotal();
      }
      
    _EntradaValorM(event) {
        this.valorpension = event.target.value;
        this._CalcularTotal();
      }
      

    _ConfirmTotal(event) {
        this.totalPagar = event.target.value;
      }

    _EntradaConfirm(event) {
        this.confirmar = event.target.value;
      }
    
    _envioUs(event) {
        event.preventDefault();
        const nuevoUsuario = { serviciopagar: this.serviciopaga, codestudiante: this.codestudiant, mes: this.me, cantmeses: this.cantmese, valorpension: this.valorpensio, totalPagar: this.totalPaga, confirmar: this.confirma };
        this.pago = [...this.pago, nuevoPago];
        this.nuevoNombre = '';
        this.serviciopagar = ''; 
        this.codestudiante = '';  
        this.mes = ''; 
        this.cantmeses = ''; 
        this.valorpension = ''; 
        this.totalPagar = ''; 
        this.confirmar = '';
      }
}

customElements.define('my-pago', pagopension);