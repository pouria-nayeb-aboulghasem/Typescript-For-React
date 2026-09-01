const genre = { id: 1, title: "action" };

const genreObject = new Object({ id: 1, title: "action" });
genreObject.valueOf();

// get properties
genre.title; // Output: "action"
genre.id; // Output: 1

genre["title"]; // Output: "action"
genre["id"]; // Output: 1

// set properties
genre.id = 2;
genre.title = "drama";

// Object static methods

// get values
const genreValues: (string | number)[] = Object.values(genre); // Output: [1, 'action']

// get keys
const genreKeys: string[] = Object.keys(genre); // Output: ['id', 'title']

// get values and keys
const genreEntries: [string, string | number][] = Object.entries(genre); // Output: [[ "id", 1], [ "title", "action"]]
