const bodyElement: HTMLElement = document.body;
const headElement: HTMLElement = document.head;
const title: string = document.title;
const htmlElement: HTMLElement = document.documentElement;

const forms: HTMLCollectionOf<HTMLFormElement> = document.forms;

const images: HTMLCollectionOf<HTMLImageElement> = document.images;

// select all a and area tags in the document
const links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement> =
  document.links;

const scripts: HTMLCollectionOf<HTMLScriptElement> = document.scripts;

const embeds: HTMLCollectionOf<HTMLEmbedElement> = document.embeds;

// *********

// select elements
const paragraph = document.querySelector(
  "#paragraph-id",
) as HTMLParagraphElement;
const div = document.querySelector("#div-id") as HTMLDivElement;
const span = document.querySelector("#span-id") as HTMLSpanElement;
const nav = document.querySelector("#nav-id") as HTMLElement;
const img = document.querySelector("#img-id") as HTMLImageElement;
const btn = document.querySelector("#btn-id") as HTMLButtonElement;
const form = document.querySelector("#form-id") as HTMLFormElement;
const input = document.querySelector("#input-id") as HTMLInputElement;
const textArea = document.querySelector("#textarea-id") as HTMLTextAreaElement;
const checkbox = document.querySelector("#checkbox-id") as HTMLInputElement;
const select = document.querySelector("#select-id") as HTMLSelectElement;

// btn event
btn.addEventListener("click", (event: MouseEvent) => {});

form.addEventListener("submit", (event: SubmitEvent) => {});

input.addEventListener("input", (event: InputEvent) => {});

checkbox.addEventListener("change", (event: Event) => {});

// *********

// select multiple elements
const buttons = document.querySelectorAll(
  ".btn-class",
) as NodeListOf<HTMLButtonElement>;

// *********

// change html, css and attributes of elements

paragraph.textContent = "This is a paragraph.";

div.innerHTML = `
    <h1> Title </h1>
    <p> Description </p>
`;

span.style.color = "red";
span.style.fontSize = "20px";

nav.classList.toggle("open");

img.src = "imgs/book-cover.jpg";
img.alt = "cover of a book";

// *********

// validation

function factorial(number: number): number {
  // validation
  if (typeof number !== "number") throw new Error("Input must be a number");

  if (number === 0 || number === 1) return 1;

  return number * factorial(number - 1);
}
