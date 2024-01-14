import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IEmployee } from "../models/employee.interface";
import { Observable, catchError, finalize, map, of, shareReplay, switchMap, tap, throwError } from "rxjs";
import { HttpEmployeesResponse } from "../models/employees-response.interface";
import { LoadingService } from "./loading-service";

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	loadedEmployees = false;
	employees: IEmployee[] = [];

	constructor(private http: HttpClient, private loadingService: LoadingService) {}

	getAllEmployees(): Observable<IEmployee[]> {
		if(!this.loadedEmployees) {
			this.loadingService.loadingOn();

			return this.http.get<HttpEmployeesResponse>('/api/employees').pipe(
				map((response: HttpEmployeesResponse) => {
					this.loadedEmployees = true;
					return response["payload"]
				}),
				tap(employees => {
					this.employees = employees;
				}),
				shareReplay(1),
				catchError(error => {
					console.log('Error in retrieving all employees', error);
					return of([])
				}),
				finalize(() => this.loadingService.loadingOff())
			)
		}
		else {
			return of(this.employees)
		}
	}

	getEmployeeById(id: number): IEmployee | null {
		return this.employees.find(employee => employee.id === id) ?? null;
	}

	createEmployee(employee: IEmployee): Observable<IEmployee> {
		this.loadedEmployees = false;
		this.loadingService.loadingOn();
		return this.http.post<IEmployee>('/api/employee', employee).pipe(
			catchError(error => {
				console.log('Error in creating new employee', error);
				return throwError(() => error);
			}),
			finalize(() => this.loadingService.loadingOff())			
		)
	}

	saveEmployeeChanges(changes: IEmployee): Observable<IEmployee> {
		this.loadedEmployees = false;
		this.loadingService.loadingOn();
		return this.http.put<IEmployee>(`/api/employees/${changes.id}`, changes).pipe(
			catchError(error => {
				console.log('Error in saving employee changes', error);
				return throwError(() => error);
			}),
			finalize(() => this.loadingService.loadingOff())			
		)
	}
}