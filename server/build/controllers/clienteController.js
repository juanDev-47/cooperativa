"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
// controlador para las peticiones del Cliente de la cooperativa
class ClienteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // let arr = []; 
            const clientes = yield database_1.default.query('SELECT * FROM clientes c inner join tarjeta t on c.Identificacion = t.Identificacion inner join cuenta_ahorros ca on ca.Identificacion = c.Identificacion');
            // unificar, buscar la forma de que esten en un solo objeto luego
            // const clientes2 = await pool.query('SELECT * FROM clientes');
            // arr.push(clientes);
            // arr.push(clientes2);
            res.json(clientes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query(`SELECT DISTINCTROW c.Identificacion,Nombre,Correo,Telefono,Numero_cuenta,Saldo_cuenta,Numero_tarjeta,Saldo_tarjeta FROM clientes c inner join tarjeta t on c.Identificacion = t.Identificacion inner join cuenta_ahorros ca on ca.Identificacion = c.Identificacion WHERE c.Identificacion = ?`, [id]);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            res.status(404).json({ text: "El cliente no se encontro" });
        });
    }
    // metodos usados para realizar las principales acciones de la aplicacion
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Identificacion, Nombre, Telefono, Correo, Numero_cuenta, Saldo_cuenta, Numero_tarjeta, Saldo_tarjeta } = req.body;
            const arreglo1 = [Identificacion, Nombre, Telefono, Correo];
            const arreglo2 = [Numero_cuenta, Identificacion, Saldo_cuenta];
            const arreglo3 = [Numero_tarjeta, Identificacion, Saldo_tarjeta];
            yield database_1.default.query('INSERT INTO clientes values (?,?,?,?)', arreglo1);
            yield database_1.default.query('INSERT INTO cuenta_ahorros values (?,?,?)', arreglo2);
            yield database_1.default.query('INSERT INTO tarjeta values (?,?,?)', arreglo3);
            // }
            console.log(req.body);
            res.json({ text: 'creating customer' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM clientes WHERE Identificacion = ?', [id]);
            res.json({ delete: 'eliminando un Cliente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { Identificacion, Nombre, Telefono, Correo, Numero_cuenta, Saldo_cuenta, Numero_tarjeta, Saldo_tarjeta } = req.body;
            const arreglo4 = { Identificacion, Nombre, Telefono, Correo };
            const arreglo5 = { Numero_cuenta, Identificacion, Saldo_cuenta };
            const arreglo6 = { Numero_tarjeta, Identificacion, Saldo_tarjeta };
            yield database_1.default.query('UPDATE clientes set ? WHERE Identificacion = ?', [arreglo4, Identificacion]);
            yield database_1.default.query('UPDATE cuenta_ahorros set ? WHERE Identificacion = ?', [arreglo5, Identificacion]);
            yield database_1.default.query('UPDATE tarjeta set ? WHERE Identificacion = ?', [arreglo6, Identificacion]);
            res.json({ text: "Se actulizo correctamente" });
        });
    }
}
const clienteController = new ClienteController();
exports.default = clienteController;
