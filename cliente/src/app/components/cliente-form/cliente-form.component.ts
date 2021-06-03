import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Router, ActivatedRoute } from '@angular/router';

import { ClienteService } from '../../services/cliente.service'

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: any = {
    Identificacion: 0,
    Nombre: '',
    Telefono: '',
    Correo: '',
    Numero_cuenta: 0,
    Saldo_cuenta: 0,
    Numero_tarjeta: 0,
    Saldo_tarjeta: 0
  }

  edit: boolean = false;

  constructor(private clienteService: ClienteService, private route: Router, private activeRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const params = this.activeRoute.snapshot.params;
    if(params.id) {
      await this.clienteService.getCliente(params.id).subscribe(
        res => {
          console.log(res)
          this.cliente = res
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  save () {
    this.clienteService.saveCliente(this.cliente).subscribe(
      res => {
        console.log(res)
        this.route.navigate(['/clientes'])
      },
      err => console.log(err)
    )
    console.log(this.cliente);
  }

  update() {
    this.clienteService.updateCliente(this.cliente.Identificacion,this.cliente).subscribe(
      res => {
        console.log(this.cliente.Identificacion)
        console.log(res);
        this.route.navigate(['/clientes']);
      },
      err => console.log(err)
    )
  }

}
