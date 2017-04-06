import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [MODULE_COMPONENTS]
})

export class DashboardModule { }
