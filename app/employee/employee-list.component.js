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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var employee_1 = require("./employee");
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(http, employeeService, route) {
        this.http = http;
        this.employeeService = employeeService;
        this.route = route;
        this.mode = "Observable";
        console.log(localStorage.getItem('employee_id'));
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeId = this.route.params.subscribe(function (params) {
            _this.current_employee_id = params['employee_id'];
        });
        var employeeReportRequest = this.route.params
            .flatMap(function (params) {
            return _this.employeeService.getEmployeeReports(+_this.current_employee_id);
        });
        employeeReportRequest.subscribe(function (response) { return _this.employee = response.json(); });
    };
    return EmployeeListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_1.Employee)
], EmployeeListComponent.prototype, "employee", void 0);
EmployeeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-list',
        templateUrl: 'employee-list.component.html',
        styleUrls: ['employee.component.css'],
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        employee_service_1.EmployeeService,
        router_1.ActivatedRoute])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map