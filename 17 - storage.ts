// local storage

// value type
localStorage.setItem("name", "Pouria");
localStorage.getItem("name");

// reference type
type User = {
  name: string;
  email: string;
  phone: string;
  address: { city: string; country: string };
};

const user = {
  name: "Pouria Nayeb",
  email: "hunnuw@kup.tm",
  phone: "09966557685",
  address: { city: "Tehran", country: "Iran" },
};

localStorage.setItem("user", JSON.stringify(user));
const retrievedUser = JSON.parse(localStorage.getItem("user") as string) as User;

// session storage
sessionStorage.setItem("name", "Pouria");
sessionStorage.getItem("name");
