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
  loading:boolean = false;

  constructor(private _api:NoticiasService){}

  buscarNoticias(param:any){
    this.loading = true;

    setTimeout(()=>{
      this._api.getNoticias(param).subscribe(result=> // siempre todos los Observable tienen un método subscribe
        {
          this.loading = false;
          this.listaNoticias = result.articles;
        }
        )
        console.log('hola');
    },2000);
  }
}
