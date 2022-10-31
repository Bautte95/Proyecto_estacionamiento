import mysql2 from 'promise-mysql2';
import key from './key';

const pool = mysql2.createPool(key.database);

pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('base de datos conectada')
    })

    export default pool;

