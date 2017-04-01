import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReportListComponent } from './report/report-list.component';
import { ReportNewComponent } from './report/report-new.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule		
	],
	declarations: [
		AppComponent,
		HomepageComponent,
		ReportListComponent,
		ReportNewComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}