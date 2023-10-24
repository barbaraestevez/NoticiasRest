import { Component } from '@angular/core';

@Component({
  selector: 'app-search-nav-bar',
  templateUrl: './search-nav-bar.component.html',
  styleUrls: ['./search-nav-bar.component.css']
})
export class SearchNavBarComponent {
  searchNavBar:string = '';

  // @Output() parametrosBusqueda = new EventEmitter<any>();
}
