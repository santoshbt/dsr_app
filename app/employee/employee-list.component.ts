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
	errorMessage: string;
	mode = "Observable";
	current_employee_id: string;
	routeId: any;

	constructor(
		private http: Http,
		private employeeService: EmployeeService,
		private route: ActivatedRoute
	) {
		console.log(localStorage.getItem('employee_id'));
	}

	@Input()
	employee: Employee

	ngOnInit() {

		this.routeId = this.route.params.subscribe(
			params => {
				this.current_employee_id = params['employee_id'];
			}
		)

		let employeeReportRequest = this.route.params
				.flatMap((params: Params) =>
					this.employeeService.getEmployeeReports(+this.current_employee_id));
					employeeReportRequest.subscribe(response => this.employee = response.json());
	}
}