import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.db);

pool.getConnection( (err, connection) => {
    if (err) throw err; // no hay conexion
    connection.release();
    console.log('DB is connected');
    
});
    


export default pool;