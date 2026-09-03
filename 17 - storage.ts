// local storage

// value type
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");

// reference type

// step 1: define type structure
type User = {
  name: string;
  email: string;
  phone: string;
  address: { city: string; country: string };
};

// step 2: create an object of that type`
const user = {
  name: "Pouria Nayeb",
  email: "hunnuw@kup.tm",
  phone: "09966557685",
  address: { city: "Tehran", country: "Iran" },
};

// step 3: store the object as a JSON string in local storage
localStorage.setItem("user", JSON.stringify(user));

// step 4: retrieve the object from local storage and parse it back to an object
const retrievedUser = JSON.parse(
  localStorage.getItem("user") as string,
) as User;

// session storage

// value type
sessionStorage.setItem("isLoggedIn", "true");

sessionStorage.getItem("isLoggedIn");

// reference type
let cartIds = [10, 100, 18];

sessionStorage.setItem("cartIds", JSON.stringify(cartIds));

const retrievedCartIds = JSON.parse(
  sessionStorage.getItem("cartIds") as string,
) as number[];
