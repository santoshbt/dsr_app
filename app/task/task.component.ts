import {Injectable, Inject} from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Task} from './task';

@Component({
    moduleId: module.id,
    selector: 'task',
    templateUrl: 'task.component.html'
})
export class TaskComponent {
    // we will pass in address from App component
    @Input('taskgroup')
    public taskForm: FormGroup;
}