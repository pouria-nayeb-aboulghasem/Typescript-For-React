const emails: Array<string> = [
  "wumwuoh@purkelfew.bv",
  "bem@vobep.ls",
  "dibda@ga.qa",
];

// array props

const emailCounts:number = emails.length; // Output: 3

// array methods

// add and remove
const countOfEmails: number = emails.push("fi@watapuseg.tj"); // Output: 4
const lastEmail: string | undefined = emails.pop(); // Output: "fi@watapuseg.tj"

const countsOfEmails: number = emails.unshift("bo@ma.tz"); // Output: 4
const firstEmail: string | undefined = emails.shift(); // Output: "bo@ma.tz"

const arrayOfRemovedEmails = emails.splice(1, 1); // Output: ["bem@vobep.ls"]

const slicedEmails = emails.slice(1, 2); // Output: ["bem@vobep.ls"]

// check member existence
const isEmailExist: boolean = emails.includes("dibda@ga.qa"); // Output: true

// sorting
emails.sort(); // Output: ['bem@vobep.ls', 'dibda@ga.qa', 'wumwuoh@purkelfew.bv']
emails.reverse(); // Output: ['wumwuoh@purkelfew.bv', 'dibda@ga.qa', 'bem@vobep.ls']

// search by index
const emailIndex: number = emails.indexOf("wumwuoh@purkelfew.bv"); // Output: 0
const lastEmailIndex: number = emails.lastIndexOf("dibda@ga.qa"); // Output: 2

// ********

const marks: number[] = [10, 20, 30, 40, 50];

const joinedMarks: string = marks.join(", "); // Output: "10, 20, 30, 40, 50"

const firstMarkAbove30: number | undefined = marks.find((mark) => mark > 30); // Output: 40
const lastMarkAbove30: number | undefined = marks.findLast((mark) => mark > 30); // Output: 50

const filteredMarks: number[] = marks.filter((mark) => mark > 30); // Output: [40, 50]

const totalMarks: number = marks.reduce(
  (total, currentValue) => total + currentValue,
  0,
); // Output: 150

// ********

type User = {
  id: number;
  phoneNumber: string;
  fullName: string;
  balance: number;
};

const users: User[] = [
  { id: 1, phoneNumber: "09966557685", fullName: "John Doe", balance: 1000 },
  { id: 2, phoneNumber: "09354425459", fullName: "Jane Smith", balance: 2000 },
  { id: 3, phoneNumber: "09966554433", fullName: "Mike Smith", balance: 1500 },
  { id: 4, phoneNumber: "09966552211", fullName: "Bob Brown", balance: 2500 },
];

const allUsers: string[] = users.map<string>((user) => {
  const { id, phoneNumber, fullName, balance } = user;

  return `<div>
    <p>ID: ${id}</p>
    <p>Phone Number: ${phoneNumber}</p>
    <p>Full Name: ${fullName}</p>
    <p>Balance: ${balance}</p>
  </div>`;
});

users.forEach((user) => {
  const { id, phoneNumber, fullName, balance } = user;
  console.log(
    `User ID: ${id}, Phone: ${phoneNumber}, Name: ${fullName}, Balance: ${balance}`,
  );
});

// *********

type CartItem = { id: number; name: string; price: number; quantity: number };

const cart: CartItem[] = [
  { id: 1, name: "Microsoft surface laptop 4", price: 599.9, quantity: 2 },
  { id: 2, name: "Slim pen 2", price: 99.9, quantity: 1 },
  { id: 3, name: "Microsoft arc mouse", price: 49.9, quantity: 3 },
];

const totalCart: number = cart.reduceRight(
  (total, currentItem) => total + currentItem.price * currentItem.quantity,
  0,
);
