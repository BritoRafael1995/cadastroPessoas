import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarPessoasRoutingModule } from './listar-pessoas-routing.module';
import { ListarPessoasComponent } from './listar-pessoas.component';


@NgModule({
  declarations: [
    ListarPessoasComponent
  ],
  imports: [
    CommonModule,
    ListarPessoasRoutingModule
  ]
})
export class ListarPessoasModule { }
