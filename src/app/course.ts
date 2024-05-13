export class Course {
    code: string;
    name: string;
    year: string;
    credit: string;
    core: string;
    dors: string;
    nofstudent: string;
    instructor: string;
    hours: string;

    constructor(code: string, name: string, year: string, credit: string, core: string, dors: string, nofstudent: string, instructor: string, hours: string) {
        this.code = code;
        this.name = name;
        this.year = year;
        this.credit = credit;
        this.core = core;
        this.dors = dors;
        this.nofstudent = nofstudent;
        this.instructor = instructor;
        this.hours = hours;
    }
    
}