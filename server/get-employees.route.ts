import {Request, Response} from 'express';
import {EMPLOYEES} from "./db";

export function getAllEmployees(req: Request, res: Response) {

  console.log("Retrieving employees data ...");

  setTimeout(() => {
    res.status(200).json({payload:Object.values(EMPLOYEES)});
  }, 1000);
}