import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  real: number = 0;
  cotacao_dolar: number = 0;
  cotacao_euro: number = 0;
  cotacao_libra: number = 0;
  dolar: number | undefined;
  euro: number | undefined;
  libra: number | undefined;

  converter (){
    this.dolar = this.real / this.cotacao_dolar;
    this.euro = this.real / this.cotacao_euro;
    this.libra = this.real / this.cotacao_libra;
  }

  limpar(){
    this.real = 0;
    this.cotacao_dolar = 0;
    this.cotacao_euro = 0;
    this.cotacao_libra = 0;
    this.dolar = undefined;
    this.euro = undefined;
    this.libra = undefined;
  }
}
