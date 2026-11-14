
import { Component, signal } from '@angular/core';
import { Exemplo } from './exemplo/exemplo';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Exemplo, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('minha-aplicacao-angular');
}
          