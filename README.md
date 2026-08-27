# Typescript

Typescript is strongly type version and superset of Javascript language with additional features.

## DataTypes

### Value types

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

### Reference types

- array
- object
- function

## Operators

- arithmetic
- assignment
- comparison
- conditional
- logical
- bitwise
- type checking
- object key/value iterator
- instanceof

## Make decision statements

- if
- if else
- if if else else
- switch case default
- return
- break
- continue

## Error handling

- try catch finally
- throw new Error(string | object);

## Loops

- for
- while
- do while

## TypeScript For React

### JavaScript topics

- variables
- arrays
- objects
- functions
- arrow functions
- destructuring

### TypeScript benefits

- static typing
- code completion
- refactoring
- shorthand notations

### Event

```
    event: React.ChangeEvent<HTMLInputElement>
    event: React.FormEvent<HTMLFormElement>
    children:React.ReactNode
```

### Enum

```
    enum Countries = {
        Brazil = "Brazil",
        Iran = "Iran"
    }
```

### Type of html return in react

```
    import type { JSX } from "react";

    export default function ConfettiContainer({ isGameWon }: { isGameWon:boolean }): JSX.Element | null { ... }
```

### Remove one/many unnecessary props

```

    type Language = {
        name: string,
        backgroundColor: string,
        color: string
    };

    const styles: Omit<Language, "name"> = { ... }

```
