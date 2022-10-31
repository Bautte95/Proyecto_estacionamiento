import { Request, Response } from "express";
import pool from "../database";

class AppController{

    public async registro (req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO registro_vehiculos set ?', [req.body]);
        res.json({texto: 'Servicio creado'});
    }

    public async consultaRegistro (req:Request, res:Response){
        const registros = await pool.query('SELECT * FROM registro_vehiculos INNER JOIN cat_vehiculo on registro_vehiculos.tipo_vehiculo = cat_vehiculo.id_cat ORDER BY registro_vehiculos.id DESC');
        res.json(registros[0]);
    }

    public async consultaSalida (req:Request, res:Response){
        const {placa} = req.params;
        const registro = await pool.query("SELECT * FROM registro_vehiculos INNER JOIN cat_vehiculo on registro_vehiculos.tipo_vehiculo = cat_vehiculo.id_cat WHERE estado ='En parqueo' AND placa = ?", [placa]);
        res.json(registro[0][0]);
    }

    public async registrarSalida (req:Request, res:Response): Promise<void>{
        const {placa} = req.params;
        await pool.query("UPDATE registro_vehiculos set estado = 'Salio del parqueo' , salida = ? , tiempo_parqueo = ?, cobro_servicio =? WHERE estado ='En parqueo' AND placa = ?", [req.body['hora'],req.body['tiempoParqueo'], req.body['valorServicio'], placa]);
        res.json({message: 'salida registrada'});
    }

}

export const appController = new AppController();