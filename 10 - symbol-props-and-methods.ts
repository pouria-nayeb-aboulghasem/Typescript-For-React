const uniqueId:symbol = Symbol("UniqueId");

// properties
uniqueId.description // Output: 'UniqueId'

// methods
uniqueId.valueOf(); // Output: Symbol("UniqueId")
uniqueId.toString() // Output: 'Symbol(UniqueId)'

// static Symbol
const symbolWithKey:symbol = Symbol.for("key");
const anotherSymbolWithKey:symbol = Symbol.for("key");

const key = Symbol.keyFor(symbolWithKey);

console.log(symbolWithKey === anotherSymbolWithKey); // Output: true