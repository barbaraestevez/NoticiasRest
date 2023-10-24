import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchNavBarComponent } from './components/search-nav-bar/search-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListadoNoticiasComponent,
    FormularioComponent,
    SpinnerComponent,
    SearchNavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
