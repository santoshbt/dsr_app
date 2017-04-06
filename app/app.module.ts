import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReportListComponent } from './report/report-list.component';
import { ReportNewComponent } from './report/report-new.component';
import { ProjectComponent} from './project/project.component';
import { TaskComponent} from './task/task.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule.forRoot(),
		HttpModule
	],
	declarations: [
		AppComponent,
		HomepageComponent,
		ReportListComponent,
		ReportNewComponent,
		ProjectComponent,
		TaskComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}