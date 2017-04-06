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
var Rx_1 = require("rxjs/Rx");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var report_service_1 = require("./report.service");
var ReportNewComponent = (function () {
    function ReportNewComponent(_fb, reportService) {
        this._fb = _fb;
        this.reportService = reportService;
        this.submitted = false;
        this.statuses = ['WIP', 'Completed', 'Miscellanious'];
    }
    ReportNewComponent.prototype.ngOnInit = function () {
        this.reportForm = this._fb.group({
            employee_id: ['22123'],
            employee_name: ['Santosh'],
            employee_email: ['santosh.turamari@hpe.com'],
            projects: this._fb.array([
                this.initProject(),
            ])
        });
    };
    ReportNewComponent.prototype.initProject = function () {
        return this._fb.group({
            name: ['', forms_1.Validators.required],
            tasks: this._fb.array([
                this.initTask()
            ])
        });
    };
    ReportNewComponent.prototype.initTask = function () {
        return this._fb.group({
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
    ReportNewComponent.prototype.createReport = function (report) {
        console.log(report);
        this.submitted = true;
        this.reportService.createReport(report)
            .subscribe(function (data) { return true; }, function (error) {
            console.log("Error saving proposal");
            return Rx_1.Observable.throw(error);
        });
    };
    return ReportNewComponent;
}());
ReportNewComponent = __decorate([
    core_2.Component({
        moduleId: module.id,
        selector: 'report-new',
        templateUrl: 'report-new.component.html',
        styleUrls: ['reports.css'],
        providers: [report_service_1.ReportService]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        report_service_1.ReportService])
], ReportNewComponent);
exports.ReportNewComponent = ReportNewComponent;
//# sourceMappingURL=report-new.component.js.map