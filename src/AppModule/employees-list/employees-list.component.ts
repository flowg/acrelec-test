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
    currentEmployees: Employee[];

    constructor( private employeesService: EmployeesService ) {
    }

    ngOnInit() {
        this.employees        = this.sortByFirstName( this.employeesService.getEmployees() );
        this.currentEmployees = Array.from( this.employees );
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

    private search( term: string ) {
        const firstNameFilter: Employee[]  = this.employees.filter( ( employee: Employee ) => {
            return employee.FirstName.includes( term );
        } );
        const secondNameFilter: Employee[] = this.employees.filter( ( employee: Employee ) => {
            return employee.SecondName.includes( term );
        } );
        const positionFilter: Employee[]   = this.employees.filter( ( employee: Employee ) => {
            return employee.Position.includes( term );
        } );

        const results: Employee[] = [].concat( firstNameFilter, secondNameFilter, positionFilter );

        this.currentEmployees = term ? results : this.employees;
    }
}
