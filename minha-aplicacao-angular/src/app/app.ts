
import { Component, signal } from '@angular/core';
import { Exemplo } from './exemplo/exemplo';
import { RouterOutlet } from '@angular/router';
import { Botao } from './botao/botao';

@Component({
  selector: 'app-root',
  imports: [Exemplo, Botao],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('minha-aplicacao-angular');
  texto: string = 'Clique aqui';
  mensagem: string = '';

  receberMensagem(msg: string){
    alert('Mensagem recebida do componte filho: ' +  msg);
  }
}
          