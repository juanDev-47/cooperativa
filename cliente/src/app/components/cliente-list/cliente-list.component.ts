import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: any = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.log(err)
    );
  }

  delete(id: number) {
    this.clienteService.deleteCliente(id).subscribe(
      res => {
        console.log(res);
        this.getClientes();
      },
      err => {
        console.log(err);
      }
    )
  }
  
  

}
