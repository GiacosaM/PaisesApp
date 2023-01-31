import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  
})
export class PorCapitalComponent implements OnInit {

  constructor( private paisService: PaisService) { }

  termino: string ="";
  hayError: boolean = false;
  paises: Country[] =[];

  buscar(termino: string) {
    this.hayError =false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe( (capitales) => {
        this.paises = capitales;
      }, (err) => {
          this.hayError = true;
          this.paises =[];
      });
  }

  

  ngOnInit(): void {
  }

}
