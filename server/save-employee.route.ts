import {Request, Response} from 'express';
import {EMPLOYEES} from "./db";

export function saveEmployee(req: Request, res: Response) {

    console.log("Saving employee ...");

    const id: number = parseInt(req.params["id"]),
        changes = req.body;

    EMPLOYEES[id] = {
        ...EMPLOYEES[id],
        ...changes
    };

    setTimeout(() => {
      res.status(200).json(EMPLOYEES[id]);
    });

}