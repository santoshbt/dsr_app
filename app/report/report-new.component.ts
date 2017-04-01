import {Component} from '@angular/core';
import {EmployeeReport} from './employee_report';

@Component({
    moduleId: module.id,
    selector: 'report-new',
    templateUrl: 'report-new.component.html'
})

export class ReportNewComponent {
    report = new EmployeeReport;
    statuses: string[] = ['WIP', 'Completed', 'Miscellanious'];
}