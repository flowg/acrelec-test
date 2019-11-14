/**
 * Angular imports
 */
import { Injectable } from '@angular/core';

/**
 * App imports
 */
// @ts-ignore
import EMPLOYEES from '../assets/data/employees.json';

/**
 * TypeScript entities and constants
 */
export interface Employee {
    FirstName: string;
    SecondName: string;
    Position: string;
    Id: string;
    Details: string;
    Blocked: boolean;
}

@Injectable( {
    providedIn: 'root'
} )
export class EmployeesService {
    constructor() {
    }

    getEmployees() {
        return EMPLOYEES;
    }
}
