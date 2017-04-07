import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
	moduleId: module.id,
	selector: 'employee-list',
	templateUrl: 'employee-list.component.html',
	styleUrls: ['employee.component.css'],
	providers: [ EmployeeService ]
})
export class EmployeeListComponent implements OnInit {
	employees: Employee[];
	errorMessage: string;
	mode = "Observable";

	constructor(
		private employeeService: EmployeeService,
		private router: Router
	) {}

	ngOnInit() {
		let timer = Observable.timer(0, 5000);
		timer.subscribe(() => this.getEmployees());
	}

	getEmployees() {
		this.employeeService.getEmployees()
				.subscribe(
					employees => this.employees = employees,
					error => this.errorMessage = <any>error
				);
	}

	// goToShow(employee: Employee): void {
	// 	let link = ['/proposal', employee.id];
	// 	this.router.navigate(link);
	// }
}