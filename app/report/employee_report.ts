export class EmployeeReport {
    constructor(
        public id?: number,
        public employee_name?: string,
        public employee_email?: string,
        public project_name?: string,
        public activity?: string,
        public status?: string,
        public duration_in_hours?: number,
    ) {}
}

