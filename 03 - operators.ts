// arithmetic operators
let num1: number = 10;
let num2: number = 5;

const sum: number = num1 + num2;
const difference: number = num1 - num2;
const product: number = num1 * num2;
const quotient: number = num1 / num2; // Output: 2
const remainder: number = num1 % num2;
const exponentiation: number = num1 ** num2;

// increment and decrement operators
let count: number = 4;
let numberInStock: number = 10;

++count;
--numberInStock;

// logical operators
let isCriminal: boolean = false;
let balance: number = 250_000_000;
const isEligibleForLoan: boolean = !isCriminal && balance > 50_000;
const isEligibleForCreditAllocation: boolean = !isCriminal || balance > 1000;

// assignment operators
let x: number = 10;
x += 5; // x = x + 5
x -= 3;
x *= 2;
x /= 4;
x %= 3;
x **= 3;

// logical assignment operators
let isActive: boolean = true;
let isVerified: boolean = false;

isActive &&= isVerified; // isActive = isActive && isVerified;
isVerified ||= isActive;

// typeof operator
let variable: any = true;

console.log(typeof variable); // Output: boolean

// bitwise operators
let number1: number = 5;
let number2: number = 3;

const bitwiseAnd: number = number1 & number2; // Output: 1
const bitwiseOr: number = number1 | number2; // output: 7

// 5
// Value:   8   4   2   1
// Bit:=    0   1   0   1

// 3
// Value:   8   4   2   1
// Bit:     0   0   1   1

// process
// 64bit => 32bit signed => bitwise operation => normal number

// -128:
// Value:  128 64  32  16   8   4   2   1
// Bit:     1   0   0   0   0   0   0   0

// 2:
// Value:  128 64  32  16   8   4   2   1
// Bit:     0   0   0   0   0   0   1   0

// -2:
// Value:  128 64  32  16   8   4   2   1
// Bit:     1   1   1   1   1   1   1   0

// step 1: consider 2
// Bit:     0   0   0   0   0   0   1   0

// step 2: flip the bits
// Bit:     1   1   1   1   1   1   0   1

// step 3: add 1 to the flipped bits
// Bit:     1   1   1   1   1   1   1   0
// Value: -128 64  32  16   8   4   2   1
// Result: -2