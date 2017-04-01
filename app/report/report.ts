export class Report{
    construtor(
        public id: number,
        public employee_name: string,
        public employee_email: string,
        public project_name: string,
        public activity: text,
        public status: string,
        public duration_in_hours: decimal
    ){}
}