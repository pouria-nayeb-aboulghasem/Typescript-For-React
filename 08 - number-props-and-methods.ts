// number
const weight: number = 72.6;

// number object
const height: Number = new Number(1.72);
height.valueOf();

// ********

// properties

// methods

const price: number = 99.899;
const fixedPrice: string = price.toFixed(2); // Output: 99.90
const preciseNumber: string = price.toPrecision(3); // Output: 99.9

const temperature: number = 24.678;
const scientificNotation: string = temperature.toExponential(2); // Output: 2.468e+1

// convert number to string
const weightInStringFormat: string = weight.toString();

const localNumber: string = (1234.6).toLocaleString("fa-IR", {
  style: "currency",
  currency: "IRR",
}); // Output: ریال ۱٬۲۳۵

// static properties

const epsilon: number = Number.EPSILON; // Output: 2.2204460492503130808472633361816e−‍16.

// min
const minNumberInJs = Number.MIN_VALUE;
const minSafeNumberInJs = Number.MIN_SAFE_INTEGER; // Output: -9007199254740991 = -(2⁵³ - 1)

// max
const maxNumberInJs = Number.MAX_VALUE;
const maxSafeNumberInJs = Number.MAX_SAFE_INTEGER; // Output: 9007199254740991 = (2⁵³ - 1)

// infinity
const negativeInfinite = Number.NEGATIVE_INFINITY;
const positiveInfinite = Number.POSITIVE_INFINITY;

// static methods

const isFiniteNumber: boolean = Number.isFinite(15);
const isInteger: boolean = Number.isInteger(-15);
const isNaNValue: boolean = Number.isNaN(undefined); // undefined is not NaN
const isSafeInteger: boolean = Number.isSafeInteger(15);

// convert string to number
const intNumber = Number.parseInt("256");
const floatNumber = Number.parseFloat("18.75");
