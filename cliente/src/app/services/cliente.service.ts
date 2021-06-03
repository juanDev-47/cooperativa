import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API_URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { 

  }

  getClientes() {
    return this.http.get(`${this.API_URL}/cliente`);
  }

  getCliente(id: Number) {
    return this.http.get(`${this.API_URL}/cliente/${id}`);
  }

  deleteCliente(id: Number) {
    return this.http.delete(`${this.API_URL}/cliente/${id}`);
  }

  saveCliente(cliente: Cliente) {
    return this.http.post(`${this.API_URL}/cliente`, cliente);
  }

  updateCliente(id: String|Number, updateCliente: Cliente): Observable<any> {
    return this.http.put(`${this.API_URL}/cliente/${id}`, updateCliente);
  }

}
