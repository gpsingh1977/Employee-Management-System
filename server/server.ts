
import * as express from 'express';
import { Application } from "express";
import { createEmployee } from './create-employee.route';
import { getAllEmployees } from './get-employees.route';
import { saveEmployee } from './save-employee.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());

app.route('/api/employees').get(getAllEmployees);
app.route('/api/employees/:id').put(saveEmployee);
app.route('/api/employee').post(createEmployee);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST Api Server running at http://localhost:" + (httpServer.address() as any)["port"]);
});