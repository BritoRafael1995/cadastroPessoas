import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl = `${environment.baseUrl}/api/Pessoas`;
  constructor(private http: HttpClient) { }

  addPessoas(pessoa: any){
    return this.http.post(this.baseUrl, pessoa);
  }

  getPessoa(id: string){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getPessoas(){
    return this.http.get(this.baseUrl);
  }

  updatePessoa(pessoa: any){
    return this.http.put(`${this.baseUrl}/${pessoa.id}`, pessoa);
  }

  deletePessoa(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
