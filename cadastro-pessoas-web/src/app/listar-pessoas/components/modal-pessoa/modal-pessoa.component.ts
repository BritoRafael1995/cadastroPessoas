import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Pessoa } from 'src/app/shared/models/pessoa';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
  styleUrls: ['./modal-pessoa.component.scss']
})
export class ModalPessoaComponent implements OnInit {
  
  formPessoa: FormGroup | any;
  pessoa: Pessoa = new Pessoa();
  pessoasCadastradas: Pessoa[] | undefined;
  modalRef?: BsModalRef;
  
  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private pservice: PessoaService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.formBuild();
    console.log(this.pessoa)
  }

  formBuild() {
    this.formPessoa = this.fb.group({
      id: [this.pessoa.id],
      nome: [this.pessoa.nome],
      sobrenome: [this.pessoa.sobrenome],
      nacionalidade: [this.pessoa.nacionalidade],
      CEP: [this.pessoa.cep],
      estado: [this.pessoa.estado],
      cidade: [this.pessoa.cidade],
      logradouro: [this.pessoa.logradouro],
      email: [this.pessoa.email],
      telefone: [this.pessoa.telefone],
      dataCadastro: [this.pessoa.dataCadastro]
    });
  }

  addPessoa(){
    this.pservice.addPessoas(this.formPessoa.value).subscribe((result) => {
      this.pessoa = result as Pessoa;
      this.bsModalRef.hide();
    })
  }

  deletePessoa(){
    this.modalRef?.hide();
    this.pservice.deletePessoa(this.formPessoa.value.id).subscribe((result) => {
      this.pessoasCadastradas = result as Pessoa[];
      this.bsModalRef.hide();
    })
  }

  updatePessoa(){
    this.pservice.updatePessoa(this.formPessoa.value).subscribe((result) => {
      this.pessoa = result as Pessoa;
      this.bsModalRef.hide();
    })
  }

  openModalConfirm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  decline(): void {
    this.modalRef?.hide();
  }
}
