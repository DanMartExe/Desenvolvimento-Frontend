import { Component } from '@angular/core';
import { CepService } from '../../../services/cep.service';
import { Cep } from '../../../models/cep';

@Component({
  selector: 'app-consultar-cep',
  templateUrl: './consultar-cep.component.html',
  styleUrl: './consultar-cep.component.css'
})
export class ConsultarCepComponent {
  public cep_digitado!: string;
  public endereco!: Cep;

  constructor(private cepService: CepService) {}

  public consultarCep(): void {
    this.cepService.buscarCep(this.cep_digitado).subscribe(resposta => {
      this.endereco = resposta
    })
  }
}
