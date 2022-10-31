import { Router } from "express";
import { appController } from "../controllers/appController";

class AppRoutes{
    public router: Router = Router();

    constructor(){
        this.confing();
    }

    confing(): void{
        this.router.get('/registro', appController.consultaRegistro);
        this.router.get('/formulario-salida/:placa', appController.consultaSalida);
        this.router.post('/', appController.registro);
        this.router.put('/formulario-salida/:placa', appController.registrarSalida);
    }
}

const indexRoutes = new AppRoutes();

export default indexRoutes.router;