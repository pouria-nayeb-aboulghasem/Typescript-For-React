// comparison operators (> >= < <= == != === !==)

const age: number = 25;
let walletBalance: number = 50_000;

if (age >= 18 && walletBalance >= 100) {
  walletBalance -= 100;
} else {
  // display alert you are not eligible for using service
}

// phone number validation
const phoneNumber: string = "09966557685";

function isValidPhoneNumber(phone: string): boolean {
  if (phoneNumber === phone) {
    return true;
  } else {
    return false;
  }
}

// switch case

let totalPayment: number = 250;
let plan: string = "premium";

switch (plan) {
  case "pro":
    totalPayment -= totalPayment * 0.25;
    break;
  case "premium":
    totalPayment -= totalPayment * 0.5; // totalPayment = totalPayment - totalPayment * 0.5;
    break;
  default:
    totalPayment -= totalPayment * 0;
    break;
}

console.log(`Total payment after discount: ${totalPayment}`); // Output: 125
