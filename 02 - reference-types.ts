// array
const names: string[] = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const marks: number[] = [19, 20, 18.75, 16.5, 17];

// object
const product: {
  title: string;
  brand: string;
  price: number;
  numberInStock: number;
} = {
  title: "Surface laptop 4",
  brand: "Microsoft",
  price: 999.99,
  numberInStock: 18,
};

const user: {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthDate: string;
  gender: boolean;
} = {
  name: "Pouria Nayeb Ab.",
  email: "PouriaNayeb@gmail.com",
  phoneNumber: "09966557685",
  address: "Tehran, Iran, Moallem st.",
  birthDate: "1989-06-19",
  gender: true
};

// function
function welcomeUser(email: string): void {
    console.log(`Hello, ${email}!`);
}

function calculateAverage(marks: number[]): number {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

export {};