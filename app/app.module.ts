import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
// import {WebStorageModule, LocalStorageService} from "angular2-localstorage";

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmployeeComponent} from './employee/employee.component';
import { EmployeeListComponent} from './employee/employee-list.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule.forRoot(),
		HttpModule,
		// WebStorageModule
	],
	declarations: [
		AppComponent,
		HomepageComponent,
		EmployeeComponent,
		EmployeeListComponent
	],
	bootstrap: [
		AppComponent
	],
})

// @Component({
// 	providers: [LocalStorageService]
// })
export class AppModule {}