// named/arrow function

function double(number: number): number {
  return number * 2;
}

const tomanPrice = (price: number): string => `${price} تومان`;

// function return array

const getNames = (name1: string, name2: string): string[] => [name1, name2];

const [name1, name2] = getNames("Aria", "Pouria");

// function return html
type User = {
  id: number;
  title: string;
};

const users = [
  { id: 1, title: "Aria" },
  { id: 2, title: "Pouria" },
];

const Users = (users: User[]): string[] => {
  return users.map(
    (user) => `<ul>
                <li key=${user.id}>${user.title}</li>
            </ul>`,
  );
};

// ternary and logical operators

const games = [
  { id: 1, title: "assassin creed", publisher: "ubisoft" },
  { id: 2, title: "god of war", publisher: "sony" },
];

const output = games.length > 0 ? games : "no game record.";
const output2 = games.length && games;

// object destructure

const book = {
  id: 1,
  title: "Campbell Biology",
  author: "Michael L. Cain",
  isbn: "0134093410",
  publisher: "Seagate",
};

const { id, title, author } = book;

// update object properties

const updatedBook = {
  ...book,
  author: "Steven A. Wasserman",
  publisher: "Pearson",
};

// map, reduce and filter

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

enum gender {
  "male",
  "female",
}

const employees = [
  { id: 1, fullName: "aria", gender: gender.male },
  { id: 2, fullName: "pouria", gender: gender.male },
];

// inline events

// json file structure

// module, import and export
export default employees;
export { games, updatedBook };
