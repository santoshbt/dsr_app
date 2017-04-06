import { Component, Input,OnInit,Injectable, Inject } from '@angular/core';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';
import {Project} from './project';

import {TaskComponent} from '../task/task.component';

@Component({
    moduleId: module.id,
    selector: 'project',
    templateUrl: 'project.component.html'
})

@Injectable()
export class ProjectComponent   {
    // we will pass in address from App component
    @Input('projectgroup')
    public projectForm: FormGroup;

    constructor(
        private _fb: FormBuilder       
    ) { }

    ngOnInit() {
        this.projectForm = this._fb.group({              
            name: ['', Validators.required],
            tasks: this._fb.array([
                this.initTask()
            ])                  
        });            
    }   

     initTask() {
        return this._fb.group({                
            activity: ['', Validators.required],
            status: ['Select', Validators.required],
            duration: ['', Validators.required]
        });
    }
    
}