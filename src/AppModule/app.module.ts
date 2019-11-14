/**
 * Angular imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * App imports
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule( {
    declarations: [
        AppComponent,
        AppTitleComponent,
        EmployeesListComponent,
        EmployeeComponent
    ],
    imports:      [
        BrowserModule,
        AppRoutingModule
    ],
    providers:    [],
    bootstrap:    [ AppComponent ]
} )
export class AppModule {
}
