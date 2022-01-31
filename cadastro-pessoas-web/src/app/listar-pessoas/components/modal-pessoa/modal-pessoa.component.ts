import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Pessoa } from 'src/app/shared/models/pessoa';

@Component({
  selector: 'app-modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
  styleUrls: ['./modal-pessoa.component.scss']
})
export class ModalPessoaComponent implements OnInit {
  
  formPessoa: FormGroup | any;
  pessoa: Pessoa = new Pessoa();
  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formBuild();
  }

  formBuild() {
    this.formPessoa = this.fb.group({
      nome: [''],
      sobrenome: [''],
      nacionalidade: [''],
      CEP: [''],
      estado: [''],
      cidade: [''],
      logradouro: [''],
      email: [''],
      telefone: [''],
      dataCadastro: ['']
    });
  }
}
