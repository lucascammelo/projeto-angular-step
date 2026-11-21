import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./aula4/pages/lista-produtos/lista-produtos').then(
        (m) => m.ListaProdutos
      ),
  },
  {
    path: 'produto/:id',
    loadComponent: () =>
      import('./aula4/pages/detalhe-produto/detalhe-produto').then(
        (m) => m.DetalheProduto
      ),
  },
  {
    path: '**',
    redirectTo: 'produtos', 
  }
];
