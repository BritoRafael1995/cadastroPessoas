import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarPessoasRoutingModule } from './listar-pessoas-routing.module';
import { ListarPessoasComponent } from './listar-pessoas.component';
import { BootstrapModule } from '../shared/bootstrap/bootstrap.module';
import { ModalPessoaComponent } from './components/modal-pessoa/modal-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarPessoasComponent,
    ModalPessoaComponent
  ],
  imports: [
    CommonModule,
    ListarPessoasRoutingModule,
    BootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListarPessoasModule { }
