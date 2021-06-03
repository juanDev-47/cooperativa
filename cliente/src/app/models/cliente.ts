export interface Cliente {
    Identificacion: Number;
    Nombre: String;
    Telefono: String;
    Correo: String;
    Numero_cuenta?: Number;
    Saldo_cuenta?: Number;
    Numero_tarjeta?: Number;
    Saldo_tarjeta?: Number
}