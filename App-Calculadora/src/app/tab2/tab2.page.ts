import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operacao = '';
  resultado = '';
  constructor() { }

  mais(valor: string) {
    this.operacao += valor;
  }
  limpar() {
    this.operacao = '';
  }
  limparMemoria() {
    this.operacao = '';
    this.resultado = '';
  }

  apagarCaracter() {
    if (this.operacao.length > 0) {
      this.operacao = this.operacao.substring(0, this.operacao.length - 1);
    }
  }
}
