import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Router, ActivatedRoute } from '@angular/router';

import { ClienteService } from '../../services/cliente.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  guardar = true;

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

  constructor(private clienteService: ClienteService, private route: Router, private activeRoute: ActivatedRoute, private toastr: ToastrService ) { }

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
    
    if(this.validar()) {
      return;
    }


    this.clienteService.saveCliente(this.cliente).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/clientes']);
      },
      err => console.log(err)
    )
  }

  update() {

    if(this.validar()) {
      return;
    }

    this.clienteService.updateCliente(this.cliente.Identificacion,this.cliente).subscribe(
      res => {
        console.log(this.cliente.Identificacion)
        console.log(res);
        this.route.navigate(['/clientes']);
      },
      err => console.log(err)
    )
  }

  validar() {
    this.guardar = true;

    if(this.cliente.Identificacion < 100000 || this.cliente.Identificacion > 9999999999 ) {
      this.toastr.error('la cedula no puede ser menor a 6 digitos ni mas de 10', 'Formulario');
      this.guardar = false;
    }
    if(this.cliente.Nombre == '') {
      this.toastr.error('El nombre no debe estar vacio, ni contener numeros', 'Formulario');
      this.guardar = false;
    }
    if(parseInt(this.cliente.Telefono) < 1000000000 || this.cliente.Telefono == '' || parseInt(this.cliente.Telefono) > 9999999999) {
      this.toastr.error('El telefono debe contener 10 digitos y Solo valores numericos', `Formulario en el campo ${this.cliente.Telefono}`);
      this.guardar = false;
    }
    if(this.cliente.Correo == '') {
      this.toastr.error('Su correo debe tener usuario@dominio.?', `Formulario en el campo ${this.cliente.Correo}`);
      this.guardar = false;
    }
    if(this.cliente.Numero_tarjeta < 1000000000) {
      this.toastr.error('El Numero de la tarjeta debe contener 10 digitos', 'Formulario');
      this.guardar = false;
    }
    if(this.cliente.Saldo_tarjeta < 10000) {
      this.toastr.error('El Saldo minimo a igresar es de $10000', 'Formulario');
      this.guardar = false;
    }
    if(this.cliente.Numero_cuenta < 1000000000) {
      this.toastr.error('El Numero de la cuenta debe contener 10 digitos', 'Formulario');
      this.guardar = false;
    }
    if(this.cliente.Saldo_cuenta < 10000) {
      this.toastr.error('El Saldo minimo a igresar es de $10000', 'Formulario');
      this.guardar = false;
    }

    console.log(this.cliente);

     return !this.guardar;
  }

}
