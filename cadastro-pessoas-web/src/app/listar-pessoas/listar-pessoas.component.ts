import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs';
import { Pessoa } from '../shared/models/pessoa';
import { ModalPessoaComponent } from './components/modal-pessoa/modal-pessoa.component';
import { PessoaService } from './services/pessoa.service';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {

  pessoas: Pessoa[] = [];
  bsModalRef: BsModalRef | undefined;
  
  constructor(
    private pservice: PessoaService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas(){
    this.pservice.getPessoas().subscribe((result) => {
      this.pessoas = result as Pessoa[]
    })
  }

  addPessoa() {
    this.bsModalRef = this.modalService.show(ModalPessoaComponent, {
      class: 'modal-dialog-centered modal-lg',
    });

    this.modalService.onHide.pipe(take(1)).subscribe(() => {
      if(this.bsModalRef?.content.pessoa.id){
        this.pessoas.push(this.bsModalRef?.content.pessoa);
      }
    })
  }

  updatePessoa(pessoa: Pessoa, index: number){
    this.bsModalRef = this.modalService.show(ModalPessoaComponent, {
      class: 'modal-dialog-centered modal-lg',
      initialState: {
        pessoa: {...pessoa}
      }
    });

    this.modalService.onHide.pipe(take(1)).subscribe(() => {
      if(this.bsModalRef?.content.pessoa.id){
        this.pessoas[index] = this.bsModalRef?.content.pessoa;
      }
    })
  }

}
