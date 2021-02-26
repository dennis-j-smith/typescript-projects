// const person: {
//     name: string;
//     age: number;
// } = {

// Better syntax
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[]
//     role: [number, string]
// } = {
//     name: 'Dennis',
//     age: 47,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'] // tuple - fixed length array
// }

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Dennis',
    age: 47,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}


//person.role[1] = 2

let favoriteActivities: string[];
//let favoriteActivities: any[];
favoriteActivities = ['Sports']

console.log(person.age)

for(const hobby of person.hobbies) {
    console.log(hobby);
}

