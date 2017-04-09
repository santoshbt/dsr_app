import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
	// employees: Employee[];
	errorMessage: string;
	mode = "Observable";

	constructor(
		private http: Http,
		private employeeService: EmployeeService,
		private route: ActivatedRoute
	) {}

	@Input()
	employee: Employee

	ngOnInit() {
		let employeeReportRequest = this.route.params
				.flatMap((params: Params) =>
					this.employeeService.getEmployeeReports(+params["employee_id"]));
		employeeReportRequest.subscribe(response => this.employee = response.json());
	}

	// getEmployees() {
	// 	let employeeReports = this.route.params
	// 								.flatMap((params:Params) => this.employeeService.getEmployeeReports(+params['employee_id']));


		// this.employeeService.getEmployees()
		// 		.subscribe(
		// 			employees => this.employees = employees,
		// 			error => this.errorMessage = <any>error
		// 		);
	// }

	// goToShow(employee: Employee): void {
	// 	let link = ['/proposal', employee.id];
	// 	this.router.navigate(link);
	// }
}