import {Injectable, Inject} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Component, OnInit} from '@angular/core';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';

import {Employee} from './employee';
import {ReportService} from './report.service';

import {ProjectComponent} from '../project/project.component';

@Component({
    moduleId: module.id,
    selector: 'report-new',
    templateUrl: 'report-new.component.html',
    styleUrls: ['reports.css'],
    providers: [ReportService]
})

@Injectable()
export class ReportNewComponent implements OnInit  {
    employees: Employee[];
    submitted: boolean = false;
    statuses: string[] = ['WIP', 'Completed', 'Miscellanious'];

    public reportForm: FormGroup;

    constructor(
            private _fb: FormBuilder,
            private reportService: ReportService
        ) { }

        ngOnInit() {
            this.reportForm = this._fb.group({
                employee_id: ['22123'],
                employee_name: ['Santosh'],
                employee_email: ['santosh.turamari@hpe.com'],
                projects: this._fb.array([
                    this.initProject(),
                ])
            });
        }    

        initProject() {
            return this._fb.group({
                name: ['', Validators.required],
                tasks: this._fb.array([
                    this.initTask()
                ])
            })
        }

        initTask() {
            return this._fb.group({                
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

        createReport(report) {
            console.log(report);
            this.submitted = true;
            this.reportService.createReport(report)
                    .subscribe(
                        data => { return true },
                        error => {
                            console.log("Error saving proposal");
                            return Observable.throw(error);
                        }
                    );
        }
}