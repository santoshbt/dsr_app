"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var employee_report_1 = require("./employee_report");
var ReportNewComponent = (function () {
    function ReportNewComponent(_fb) {
        this._fb = _fb;
        this.report = new employee_report_1.EmployeeReport;
        this.submitted = false;
        this.statuses = ['WIP', 'Completed', 'Miscellanious'];
    }
    ReportNewComponent.prototype.ngOnInit = function () {
        this.reportForm = this._fb.group({
            employee_id: [''],
            employee_name: [''],
            employee_email: [''],
            tasks: this._fb.array([
                this.initTask(),
            ])
        });
    };
    ReportNewComponent.prototype.initTask = function () {
        return this._fb.group({
            project_name: ['', forms_1.Validators.required],
            activity: ['', forms_1.Validators.required],
            status: ['Select', forms_1.Validators.required],
            duration: ['', forms_1.Validators.required]
        });
    };
    ReportNewComponent.prototype.addTask = function () {
        var control = this.reportForm.controls['tasks'];
        control.push(this.initTask());
    };
    ReportNewComponent.prototype.removeTask = function (i) {
        var control = this.reportForm.controls['tasks'];
        control.removeAt(i);
    };
    return ReportNewComponent;
}());
ReportNewComponent = __decorate([
    core_2.Component({
        moduleId: module.id,
        selector: 'report-new',
        templateUrl: 'report-new.component.html',
        styleUrls: ['reports.css']
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ReportNewComponent);
exports.ReportNewComponent = ReportNewComponent;
//# sourceMappingURL=report-new.component.js.map