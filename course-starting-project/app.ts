type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'
// Union Types, Literal Types
function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor) {

    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
    return result;

}

const combinedAges  = combine(20, 26, 'as-number')
console.log(combinedAges);

const combinedStringAges  = combine('20', '26', 'as-number')
console.log(combinedStringAges);

const combinedNames = combine("Dennis", "Smith", 'as-text')
console.log(combinedNames);