import { Component} from '@angular/core'

@Component({
  selector:'micomponente',
  template: `<hr>
  <h1>Mi primer componente</h1>
  <p>Este es mi primer componente</p>`
})

export class Micomponente{
    constructor(){
      console.log("Componente micomponente Cargado!! ");
    }
}
