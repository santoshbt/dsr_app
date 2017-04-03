import {Injectable, Inject} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';

import {EmployeeReport} from './employee_report';

@Component({
    moduleId: module.id,
    selector: 'report-new',
    templateUrl: 'report-new.component.html',
    styleUrls: ['reports.css']
})

@Injectable()
export class ReportNewComponent implements OnInit  {
    report = new EmployeeReport;
    submitted: boolean = false;
    statuses: string[] = ['WIP', 'Completed', 'Miscellanious'];

    public reportForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

        ngOnInit() {
            this.reportForm = this._fb.group({
                employee_id: [''],
                employee_name: [''],
                employee_email: [''],
                tasks: this._fb.array([
                    this.initTask(),
                ])
            });
        }    

        initTask() {
            return this._fb.group({
                project_name: ['', Validators.required],
                activity: ['', Validators.required],
                status: ['Select', Validators.required],
                duration: ['', Validators.required]
            });
        }

        addTask() {
            const control = <FormArray>this.reportForm.controls['tasks'];
            control.push(this.initTask());
        }

        removeTask(i: number) {
            const control = <FormArray>this.reportForm.controls['tasks'];
            control.removeAt(i);
        }    
}