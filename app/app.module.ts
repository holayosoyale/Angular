import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Mis componentes
import { Micomponente } from './Componente/micomponente/micomponente.component';
import { MisegundoComponente } from './Componente/Mi-segundo-componente/mi-segundo-componente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    Micomponente,
    MisegundoComponente,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

