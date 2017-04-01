import { Component } from '@angular/core';
import { EmployeeReport } from './employee_report';

@Component({
	moduleId: module.id,
	selector: 'report-list',
	templateUrl: 'report-list.component.html'	
})
export class ReportListComponent {
    reportOneTest = 'Hello';
	
	reportOne: EmployeeReport = new EmployeeReport(22123, 'Santosh', 'santosh.turamari@hpe.com', 'Quantum', 
									'Analyzing the requirement', 'Complete', 2)

    reportTwo: EmployeeReport = new EmployeeReport(22134, 'Deepu', 'deepu@hpe.com', 'Radar', 
									'Design', 'Complete', 3)

	reportThree: EmployeeReport = new EmployeeReport(22135, 'Prashant', 'prashant@hpe.com', 'Radar', 
									'Auto Intervention', 'WIP', 4.5)									


    reports: EmployeeReport[] = [this.reportOne, this.reportTwo, this.reportThree];									
}



