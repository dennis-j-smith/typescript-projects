abstract class Department {

    static fiscalYear = 2020;
    
    //private id: string;
    //name: string;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {
        //this.name = n;
    }

    abstract describe(this:  Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static createEmployee(name: string) {
        return {
            name: name
        }
    }
}

class ITDepartment extends Department {

    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, "IT")
        this.admins=admins;
    }

    describe() {
        console.log('ID Department - ID: ' + this.id)
    }

}

class AccountingDepartment extends Department {

    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(report: string) {
        this.addReport(report);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting")
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id)
    }
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
        if (name == 'Max') {
            ReadableStreamDefaultController;
        }        
        this.employees.push(name);
    }
}


const it = new ITDepartment('d1', ['Max']);


const acct = AccountingDepartment.getInstance();
acct.addEmployee('Max');
acct.addEmployee('Manu');

const employee1 = Department.createEmployee("DJS")
console.log(employee1);

acct.describe()
acct.printEmployeeInformation();

acct.printReports();

console.log(acct.mostRecentReport);
// const accountingCopy =  { name: 'FOO', describe: accounting.describe };

// accountingCopy.describe();

