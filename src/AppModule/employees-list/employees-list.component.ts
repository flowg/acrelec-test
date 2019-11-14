/**
 * Angular imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * App imports
 */
import { Employee, EmployeesService } from '../employees.service';

@Component( {
    selector:    'app-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls:   [ './employees-list.component.scss' ]
} )
export class EmployeesListComponent implements OnInit {
    employees: Employee[];

    constructor( private employeesService: EmployeesService ) {
    }

    ngOnInit() {
        this.employees = this.sortByFirstName( this.employeesService.getEmployees() );
    }

    private sortByFirstName( employees: Employee[] ): Employee[] {
        return employees.sort( ( a, b ) => {
            const nameA = a.FirstName.toUpperCase();
            const nameB = b.FirstName.toUpperCase();
            if ( nameA < nameB ) {
                return -1;
            }
            if ( nameA > nameB ) {
                return 1;
            }

            // If names are equal
            return 0;
        } );
    }
}
