import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  categoriaSeleccionada:string = 'general';
  paisSeleccionado:string = 'us';
  busqueda:string = '';

  categorias:any[] = [
    {value:'general', nombre:'General'},
    {value:'business', nombre:'Negocios'},
    {value:'entertainment', nombre:'Entretenimiento'},
    {value:'health', nombre:'Salud'},
    {value:'science', nombre:'Ciencia'},
    {value:'technology', nombre:'Tecnología'},
    {value:'sports', nombre:'Deportes'}
  ]

  paises:any[] = [
    {value:'gb', nombre:'Reino Unido'},
    {value:'us', nombre:'Estados Unidos'},
    {value:'ve', nombre:'Venezuela'},
    {value:'mx', nombre:'México'},
    {value:'ar', nombre:'Argentina'},
    {value:'co', nombre:'Colombia'},
    {value:'br', nombre:'Brasil'},
    {value:'fr', nombre:'Francia'},
    {value:'de', nombre:'Alemania'},
    {value:'ch', nombre:'Suiza'},
    {value:'cn', nombre:'China'}
  ]

  @Output() parametrosSeleccionados = new  EventEmitter<any>(); //con esta línea vamos a sacar los datos seleccionados. @Input de padres a hijos @Output de hijos a padres. Por defecto va a ser any, con lo que no hace falta poner <any> detrás de EventEmitter.

  buscarNoticia(){
    const PARAMETROS = { //por convección se pone en mayúsculas porque va a ser una variable que no se va a poder modificar.
      categoria:this.categoriaSeleccionada,
      pais:this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
