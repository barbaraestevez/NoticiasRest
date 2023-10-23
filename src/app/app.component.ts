import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'NoticiasRest';
  listaNoticias:any[]=[];

  constructor(private _api:NoticiasService){}

  buscarNoticias(param:any){
    this._api.getNoticias(param).subscribe(result=> // siempre todos los Observable tienen un método subscribe
      {
        console.log(result);
      }
      )
    console.log('Yo soy tu padre');
    console.log(param);
  }
}
