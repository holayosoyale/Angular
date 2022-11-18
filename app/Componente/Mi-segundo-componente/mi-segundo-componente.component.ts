import { Component} from '@angular/core'

@Component ({
   selector : 'mi-segundo-componente' ,
   templateUrl : 'mi-segundo-componente.component.html' ,
})
export  class  MisegundoComponente  {
  constructor(){
    console.log("Componente micomponente Cargado!! ");
  }
}
