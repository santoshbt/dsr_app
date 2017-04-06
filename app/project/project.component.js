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
var forms_1 = require("@angular/forms");
var ProjectComponent = (function () {
    function ProjectComponent(_fb) {
        this._fb = _fb;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.projectForm = this._fb.group({
            name: ['', forms_1.Validators.required],
            tasks: this._fb.array([
                this.initTask()
            ])
        });
    };
    ProjectComponent.prototype.initTask = function () {
        return this._fb.group({
            activity: ['', forms_1.Validators.required],
            status: ['Select', forms_1.Validators.required],
            duration: ['', forms_1.Validators.required]
        });
    };
    return ProjectComponent;
}());
__decorate([
    core_1.Input('projectgroup'),
    __metadata("design:type", forms_1.FormGroup)
], ProjectComponent.prototype, "projectForm", void 0);
ProjectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'project',
        templateUrl: 'project.component.html'
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map