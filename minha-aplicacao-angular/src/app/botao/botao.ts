import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-botao',
  styleUrl: './botao.css',
  templateUrl: './botao.html',
})
export class Botao {

  @Input() texto: string = '';
  @Output() mensagemEnviada = new EventEmitter<string>();
  enviarMensagem(){
    this.mensagemEnviada.emit('Olá Pai"');
  }
}
