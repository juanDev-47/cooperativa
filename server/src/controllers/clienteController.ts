import { Request, Response } from 'express';

import pool  from '../database'


// controlador para las peticiones del Cliente de la cooperativa
class ClienteController {

    public async list (req: Request, res: Response) {
        // let arr = []; 
        const clientes = await pool.query('SELECT * FROM clientes c inner join tarjeta t on c.Identificacion = t.Identificacion inner join cuenta_ahorros ca on ca.Identificacion = c.Identificacion');

        // unificar, buscar la forma de que esten en un solo objeto luego
        // const clientes2 = await pool.query('SELECT * FROM clientes');
        // arr.push(clientes);
        // arr.push(clientes2);
         

        res.json(clientes);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const usuario = await pool.query(`SELECT DISTINCTROW c.Identificacion,Nombre,Correo,Telefono,Numero_cuenta,Saldo_cuenta,Numero_tarjeta,Saldo_tarjeta FROM clientes c inner join tarjeta t on c.Identificacion = t.Identificacion inner join cuenta_ahorros ca on ca.Identificacion = c.Identificacion WHERE c.Identificacion = ?`, [id]);
        if(usuario.length > 0) {
            return res.json(usuario[0]);
        }

        res.status(404).json({text: "El cliente no se encontro"});
        
    }

    // metodos usados para realizar las principales acciones de la aplicacion
    public async create (req: Request, res: Response): Promise<void> {
        const { Identificacion, Nombre, Telefono, Correo, Numero_cuenta, Saldo_cuenta, Numero_tarjeta, Saldo_tarjeta } = req.body;
        const arreglo1 = [Identificacion, Nombre, Telefono, Correo];
        const arreglo2 = [Numero_cuenta, Identificacion, Saldo_cuenta];
        const arreglo3 = [Numero_tarjeta, Identificacion, Saldo_tarjeta];

            await pool.query('INSERT INTO clientes values (?,?,?,?)', arreglo1 );
            await pool.query('INSERT INTO cuenta_ahorros values (?,?,?)', arreglo2 );
            await pool.query('INSERT INTO tarjeta values (?,?,?)', arreglo3 );
        // }

        console.log(req.body);
        res.json({text: 'creating customer'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM clientes WHERE Identificacion = ?', [id]);

        res.json({delete: 'eliminando un Cliente'});
    }

    public async update (req: Request, res: Response){
        const {id} = req.params;        
        const { Identificacion, Nombre, Telefono, Correo, Numero_cuenta, Saldo_cuenta, Numero_tarjeta, Saldo_tarjeta } = req.body;
        const arreglo4 = {Identificacion, Nombre, Telefono, Correo};
        const arreglo5 = {Numero_cuenta, Identificacion, Saldo_cuenta};
        const arreglo6 = {Numero_tarjeta, Identificacion, Saldo_tarjeta};
        
        await pool.query('UPDATE clientes set ? WHERE Identificacion = ?', [arreglo4, Identificacion]);
        await pool.query('UPDATE cuenta_ahorros set ? WHERE Identificacion = ?', [arreglo5, Identificacion]);
        await pool.query('UPDATE tarjeta set ? WHERE Identificacion = ?', [arreglo6, Identificacion]);

        res.json({text: "Se actulizo correctamente"});
        

    }


}

const clienteController = new ClienteController();
export default clienteController;