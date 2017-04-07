import {Component, OnInit} from "@angular/core";
import {Employee} from "./employee";
import { Observable } from 'rxjs/Rx';
import {EmployeeService} from "./employee.service";

@Component({
	moduleId: module.id,
	selector: 'employee',
	templateUrl: 'employee.component.html',
	styleUrls: ['employee.component.css'],
	providers: [ EmployeeService ]
})
export class EmployeeComponent implements OnInit {
	employee = new Employee();
	submitted: boolean = false;
    statuses: string[] = ['WIP', 'Completed', 'Miscellanious'];

	constructor(
		private employeeService: EmployeeService
	) {}

    ngOnInit() {
//     // we will initialize our form here
//     this.employee = {
//         employee_id: '1234',
//         emplo
//     };
  }

	createEmployee(employee) {
		this.submitted = true;
		this.employeeService.createEmployee(employee)
				.subscribe(
					data => { return true },
					error => {
						console.log("Error saving proposal");
						return Observable.throw(error);
					}
				);
	}
}