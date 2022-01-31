import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl = `${environment.baseUrl}/api/Pessoas`;
  constructor(private http: HttpClient) { }

  getPessoas(){
    return this.http.get(this.baseUrl);
  }
}
