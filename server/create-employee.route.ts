import {Request, Response} from 'express';
import {EMPLOYEES} from './db';

export var employeesKeyCounter = 11;

export function createEmployee(req: Request, res: Response) {

    console.log("Creating new employee ...");

    const changes = req.body;

    const newEmployee = {
        id: employeesKeyCounter,
        employeeId: employeesKeyCounter,
        ...changes
    };

    EMPLOYEES[newEmployee.id] = newEmployee;

    employeesKeyCounter += 1;

    setTimeout(() => {

      res.status(200).json(newEmployee);

    });
}