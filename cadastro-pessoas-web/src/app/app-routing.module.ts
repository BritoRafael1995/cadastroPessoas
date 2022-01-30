import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',     pathMatch: 'full', redirectTo: 'listar'},
  {path: 'listar', loadChildren: () => import('./listar-pessoas/listar-pessoas.module').then(m => m.ListarPessoasModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
