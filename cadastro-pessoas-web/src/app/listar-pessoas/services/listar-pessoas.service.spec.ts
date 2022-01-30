import { TestBed } from '@angular/core/testing';

import { ListarPessoasService } from './listar-pessoas.service';

describe('ListarPessoasService', () => {
  let service: ListarPessoasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarPessoasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
