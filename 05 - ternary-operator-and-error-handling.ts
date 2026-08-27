// error handling

try {
  const age: number = 25;
  let walletBalance: number = 50_000;

  if (age >= 18 && walletBalance >= 100) {
    walletBalance -= 100;
  } else {
    if (age < 18) {
      throw new Error("You are too young to use our service.");
    } else if (walletBalance < 100) {
      throw new Error("Wallet Balance is not enough.");
    } else {
      throw new Error("Unknown error.");
    }
  }
} catch (error) {
  console.error(error);
}

// ternary operator
const phoneNumber: string = "09966557685";

function isValidPhoneNumber(phone: string): boolean {
  return phoneNumber === phone;
}
