"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_report_1 = require("./employee_report");
var ReportListComponent = (function () {
    function ReportListComponent() {
        this.reportOneTest = 'Hello';
        this.reportOne = new employee_report_1.EmployeeReport(22123, 'Santosh', 'santosh.turamari@hpe.com', 'Quantum', 'Analyzing the requirement', 'Complete', 2);
        this.reportTwo = new employee_report_1.EmployeeReport(22134, 'Deepu', 'deepu@hpe.com', 'Radar', 'Design', 'Complete', 3);
        this.reportThree = new employee_report_1.EmployeeReport(22135, 'Prashant', 'prashant@hpe.com', 'Radar', 'Auto Intervention', 'WIP', 4.5);
        this.reports = [this.reportOne, this.reportTwo, this.reportThree];
    }
    return ReportListComponent;
}());
ReportListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'report-list',
        templateUrl: 'report-list.component.html'
    })
], ReportListComponent);
exports.ReportListComponent = ReportListComponent;
//# sourceMappingURL=report-list.component.js.map