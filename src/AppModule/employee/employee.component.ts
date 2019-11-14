/**
 * Angular imports
 */
import { Component, Input, OnInit } from '@angular/core';

/**
 * App imports
 */
import { Employee } from '../employees.service';

@Component( {
    selector:    'app-employee',
    templateUrl: './employee.component.html',
    styleUrls:   [ './employee.component.scss' ]
} )
export class EmployeeComponent implements OnInit {
    @Input()
    employee: Employee;

    constructor() {
    }

    ngOnInit() {
    }
}
