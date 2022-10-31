"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appController_1 = require("../controllers/appController");
class AppRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.confing();
    }
    confing() {
        this.router.get('/registro', appController_1.appController.consultaRegistro);
        this.router.get('/formulario-salida/:placa', appController_1.appController.consultaSalida);
        this.router.post('/', appController_1.appController.registro);
        this.router.put('/formulario-salida/:placa', appController_1.appController.registrarSalida);
    }
}
const indexRoutes = new AppRoutes();
exports.default = indexRoutes.router;
