// string literal
let color: string = "red"; // Output: red

// string object
let redColor: String = new String("red");
redColor.valueOf(); // Output: red

// ************

let statement: string = "Aria is awesome developer!";

// properties
statement.length; // Output: 26

// methods

// text transform
const cake: string = "Banana cake";
const uppercaseStatement: string = cake.toUpperCase(); // Output: BANANA CAKE
const lowercaseStatement: string = cake.toLowerCase(); // Output: banana cake

// character and ascii code
const characterInPosition: string = statement.charAt(0); // output: 'A'
const characterAtPosition = statement.at(0); // output: 'A'
const asciiCodeOfCharacter: number = statement.charCodeAt(3); // output: 97

// concatenation
const concatTexts: string = statement.concat(" ", "and human being."); // Output: Aria is awesome developer! and human being.

// split
const words: string[] = statement.split(" "); // Output: ["Aria", "is", "awesome", "developer!"]

// substring
const word: string = statement.substring(0, 4); // Output: 'Aria'
const ariaWord: string = statement.slice(0, 4); // Output: 'Aria'

// well formed
const isStatementWellFormed: boolean = statement.isWellFormed(); // Output: true
const StatementWellFormed: string = statement.toWellFormed(); // Output: Aria is awesome developer!

// trim
let myName: string = " Pouria Nayeb ";
const username: string = myName.trim();
const usernameTrimStart: string = myName.trimStart();
const usernameTrimEnd: string = myName.trimEnd();

// pad
const hexColor: string = "#";
const rightHexColor: string = hexColor.padEnd(7, "0"); // Output: #000000
const wrongHexColor: string = hexColor.padStart(7, "0"); // Output: 000000#

// repeat
const adjective: string = "great!";
const repeatWords: string = adjective.repeat(2); // Output: 'great!great!'

// replace
const phrase: string = "Aria is developer, is Aria great?";
const replace: string = phrase.replace("Aria", "Surface"); // Output: 'Surface is developer, is Aria great?'
const replaceAll: string = phrase.replaceAll("Aria", "Surface"); // Output: 'Surface is developer, is Surface great?'

// search
const text: string = "JavaScript is awesome language, do you like javascript?";
const IndexOfACharacter: number = text.indexOf("a"); // Output: 1
const lastIndexOfACharacter: number = text.lastIndexOf("a"); // Output: 27

const searchWord: number = text.search(/JavaScript/gi); // Output: 0

const matchWord = text.match(/javascript/gi); // Output: "Javascript", "javascript"
const matchWithAllWords = text.matchAll(/JavaScript/gi); //  Output: JavaScript,javascript

const isIncluded: boolean = text.includes("awesome"); // Output: true
const startWith: boolean = text.startsWith("JavaScript"); // Output: true
const endWith: boolean = text.endsWith("?"); // Output: true

// template literal
const typeScript = "TypeScript";
const javaScript = "JavaScript";

const template = `${typeScript} is superset of ${javaScript}.`; // Output: TypeScript is superset of JavaScript.
