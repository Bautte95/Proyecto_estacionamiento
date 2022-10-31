import { Request, Response } from "express";

class IndexController{
    public index (rep:Request, res: Response){
        res.send('Hello')
    }
}

export const indexController = new IndexController();