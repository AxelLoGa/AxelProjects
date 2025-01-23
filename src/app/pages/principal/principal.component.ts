import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-principal',
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  data:any
  condicional=true
  nombre='Axel'

  constructor(private servicio:AuthService){
    
    
  }
  ngOnInit(){
    this.servicio.getPokemones().subscribe((respuesta:any)=>{
      console.log(respuesta.results)
      this.data=respuesta.results
    })
  }

}
