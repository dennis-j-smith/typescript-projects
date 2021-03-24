class Department {
    //private id: string;
    //name: string;
    protected employees: string[] = [];
    constructor(private readonly id: string, public name: string) {
        //this.name = n;
    }

    describe(this:  Department) {
        console.log(`Department ${this.id} ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {

    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, "IT")
        this.admins=admins;
    }

}

class AccountingDepartment extends Department {

    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(report: string) {
        this.addReport(report);
    }
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting")
        this.lastReport = reports[0];
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



const acct = new AccountingDepartment('d2', ['Budget', 'Finance']);
acct.addEmployee('Max');
acct.addEmployee('Manu');

acct.describe()
acct.printEmployeeInformation();

acct.printReports();

console.log(acct.mostRecentReport);
// const accountingCopy =  { name: 'FOO', describe: accounting.describe };

// accountingCopy.describe();

