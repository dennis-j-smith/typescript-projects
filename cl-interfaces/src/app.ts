console.log('*****');

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;


// Type guards, overloads
//function addit(a: number): number
function addit(a: number, b: number): number
function addit(a: string, b: string): string
function addit(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}


const result = addit('Dennis', ' Smith');
result.split(' ');


// Optional Chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    //job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
const userInput = '';
const storedData = userInput ?? 'DEFAULT';

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate)
    }
    
}

class Car {
    drive() {
        console.log('Driving')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck')
    }
    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(12);
}


// Discriminated Union
//
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10})

// Typecasting

const paragraph = document.querySelector('p');
const paragraph2 = document.getElementById('message-output');

//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// ! - means it will never yield null

userInputElement.value = 'Hi There';

// Index Properties

interface ErrorContainer {   
    [prop: string]: string;
}

const errorBag:  ErrorContainer = {
    email: "Not a valid Email",
    username: "Must start with a character"
}

