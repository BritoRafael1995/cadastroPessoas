import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarPessoasRoutingModule } from './listar-pessoas-routing.module';
import { ListarPessoasComponent } from './listar-pessoas.component';
import { ModalPessoaComponent } from './components/modal-pessoa/modal-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ListarPessoasComponent,
    ModalPessoaComponent
  ],
  imports: [
    CommonModule,
    ListarPessoasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class ListarPessoasModule { }
