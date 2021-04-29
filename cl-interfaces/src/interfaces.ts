//type AddFn = (a: number, b: number) => number;

interface AddFn {
    (a: number, b: number):number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named{
    greet(phrase: string): void
}

let user1: Greetable;
let user2: Greetable;

class Person implements Greetable {
    name?: string; 
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(message: string) {
        if (this.name) {
            console.log(message + ' ' + this.name)
        }
    }
}

user1 = new Person('Dennis');
user2 = new Person();
user1.greet("Hi there");
