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

  cadastrarPessoa() {
    this.bsModalRef = this.modalService.show(ModalPessoaComponent, {
      class: 'modal-dialog-centered modal-lg',
    });

    this.modalService.onHide.pipe(take(1)).subscribe(() => {
      if(this.bsModalRef?.content.novoVinculo){
        
      }
    })
  }

}
