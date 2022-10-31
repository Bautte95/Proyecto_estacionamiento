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
exports.appController = void 0;
const database_1 = __importDefault(require("../database"));
class AppController {
    registro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO registro_vehiculos set ?', [req.body]);
            res.json({ texto: 'Servicio creado' });
        });
    }
    consultaRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const registros = yield database_1.default.query('SELECT * FROM registro_vehiculos INNER JOIN cat_vehiculo on registro_vehiculos.tipo_vehiculo = cat_vehiculo.id_cat ORDER BY registro_vehiculos.id DESC');
            res.json(registros[0]);
        });
    }
    consultaSalida(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { placa } = req.params;
            const registro = yield database_1.default.query("SELECT * FROM registro_vehiculos INNER JOIN cat_vehiculo on registro_vehiculos.tipo_vehiculo = cat_vehiculo.id_cat WHERE estado ='En parqueo' AND placa = ?", [placa]);
            res.json(registro[0][0]);
        });
    }
    registrarSalida(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { placa } = req.params;
            yield database_1.default.query("UPDATE registro_vehiculos set estado = 'Salio del parqueo' , salida = ? , tiempo_parqueo = ?, cobro_servicio =? WHERE estado ='En parqueo' AND placa = ?", [req.body['hora'], req.body['tiempoParqueo'], req.body['valorServicio'], placa]);
            res.json({ message: 'salida registrada' });
        });
    }
}
exports.appController = new AppController();
