import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { BehaviorSubject, Observable, combineLatest, debounceTime, distinctUntilChanged, map, startWith, takeUntil } from 'rxjs';
import { IEmployee } from '../models/employee.interface';
import { FormControl } from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

enum SortOrder {
  'none' = 0,
  'asc' = 1,
  'desc' = 2
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  cols = 3;
  rowHeight = '325px';
  employees$!: Observable<IEmployee[]>;

  searchDesignation: FormControl = new FormControl('');
  searchDepartment: FormControl = new FormControl('');

  sortByFirstNameOrder$: BehaviorSubject<number> = new BehaviorSubject<number>(SortOrder.none);

  currentSortIndex = SortOrder.none;

	constructor(private employeeService: EmployeeService, private responsive: BreakpointObserver) {
  }

	ngOnInit() {
    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
        this.cols = 3;
        this.rowHeight = "325px";

        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.TabletPortrait]) {
            this.cols = 1;
        }
        else if (breakpoints[Breakpoints.HandsetPortrait]) {
            this.cols = 1;
        }
        else if (breakpoints[Breakpoints.HandsetLandscape]) {
            this.cols = 2;
        }
        else if (breakpoints[Breakpoints.TabletLandscape]) {
            this.cols = 2;
        }
    });

		this.employees$ = combineLatest([
      this.employeeService.getAllEmployees(),
      this.searchDesignation.valueChanges.pipe(
        debounceTime(300), 
        distinctUntilChanged(),
        startWith('')),
      this.searchDepartment.valueChanges.pipe(
        debounceTime(300), 
        distinctUntilChanged(),
        startWith('')),
      this.sortByFirstNameOrder$
      ]).pipe(map(([employees, designation, department, sortingOrder]) => {
        return employees.filter(employee => {
          return employee.designation?.toLowerCase().includes(designation.toLowerCase()) && employee.department?.toLowerCase().includes(department.toLowerCase());
        }).slice().sort((a,b) => {
          switch(sortingOrder) {
            case SortOrder.none:
              return a.id < b.id ? -1 : 1;
              break;
            case SortOrder.asc:
              return a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1;
              break;
            case SortOrder.desc:
              return a.firstName.toLowerCase() > b.firstName.toLowerCase() ? -1 : 1;
              break;
            default:
              return a.id < b.id ? -1 : 1;
              break;
          }
        })
      }))
	}

  resetSearchDesignation() {
    this.searchDesignation.setValue('');
  }
  
  resetSearchDepartment() {
    this.searchDepartment.setValue('');
  }

  toggleSortOrder() {
    // circle through enums
    if(this.currentSortIndex < 2) {
      this.currentSortIndex++;
    }
    else {
      this.currentSortIndex = SortOrder.none;
    }
    this.sortByFirstNameOrder$.next(this.currentSortIndex);
  }

  createEmployee(){

  }
}
