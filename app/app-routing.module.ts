import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ReportListComponent } from './report/report-list.component';
import { ReportNewComponent } from './report/report-new.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomepageComponent },
    { path: 'reports', component: ReportListComponent },
	{ path: 'report/new', component: ReportNewComponent },
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}