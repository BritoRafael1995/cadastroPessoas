import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  }

  formBuild() {
    this.formPessoa = this.fb.group({
      id: [this.pessoa.id],
      nome: [this.pessoa.nome, Validators.required],
      sobrenome: [this.pessoa.sobrenome, Validators.required],
      nacionalidade: [this.pessoa.nacionalidade, Validators.required],
      CEP: [this.pessoa.cep, Validators.required],
      cpf: [this.pessoa.cep, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      estado: [this.pessoa.estado, Validators.required],
      cidade: [this.pessoa.cidade, Validators.required],
      logradouro: [this.pessoa.logradouro, Validators.required],
      email: [this.pessoa.email, [Validators.required, Validators.email]],
      telefone: [this.pessoa.telefone, Validators.required]
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

  consultarCEP(){
    if(this.formPessoa.value.CEP.length == 8){
      this.pservice.consultaCEP(this.formPessoa.value.CEP).subscribe((result: any) => {
        this.formPessoa.patchValue({cidade: result.localidade});
        this.formPessoa.patchValue({estado: result.uf});
        this.formPessoa.patchValue({logradouro: result.logradouro});
      })
    }
  }
 
  decline(): void {
    this.modalRef?.hide();
  }
}
