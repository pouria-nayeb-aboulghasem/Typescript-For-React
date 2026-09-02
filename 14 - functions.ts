// named function
function calculateTax(income: number, taxRate: number): number {
  return income * taxRate;
}

// function expression
const calculateTaxAnonymous = function (
  income: number,
  taxRate: number,
): number {
  return income * taxRate;
};

// arrow function
type Cart = { id: number; name: string; price: number; quantity: number };

const cartTotalPayment = (cart: Cart[]): number => {
  return cart.reduce(
    (total, currentItem) => total + currentItem.price * currentItem.quantity,
    0,
  );
};

// recursive function
function factorial(number: number): number {
    // step 1: stop condition
    if (number === 0 || number === 1)
    return 1;

  // step 2: formula
  return number * factorial(number - 1);
}
