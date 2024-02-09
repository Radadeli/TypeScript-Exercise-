/**
 * START: Follow the instructions below.
 */

// Make this identity function generic.
// This should fix the type errors on Line 13 and 15.
// Hint: The type for the `value` function parameter should use a type variable.

// Solución: Agregar un tipo genérico `T` para el parámetro `value`.
function identity<T>(value: T): T {
    return value;
}

let value1 = identity<string>("France"); // Ahora `value1` tiene tipo `string`.
let value2 = identity<number>(67_413_000); // Ahora `value2` tiene tipo `number`.

// ----

// Solución: Hacer la función `fetchData` genérica utilizando un tipo genérico `Type`.
async function fetchData<Type>(url: string): Promise<Type> {
    const response = await fetch(url);
    const responseBody = await response.json();

    return responseBody as Type;
}

interface User {
    name: string;
}

// Pass the `User` type as a type argument to the generic `fetchData()` function.
// This should fix the type error on Line 35.

// Solución: Especificar el tipo `User` como argumento de tipo al llamar a `fetchData`.
let user = await fetchData<User>("http://api.com/user/1");

console.log(user.name);

// ----

export {};
