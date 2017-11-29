* Acknowlegement
  * Belows are heavily influenced(almost copy & pasted) from
    [kolodny/exercises](https://github.com/kolodny/exercises/tree/master/update)
    repository. Thanks to @kolodny

## 원본 문제 설명

Immutability is all the rage nowadays. Let's explain what it is and then
implement out version of Facebook's
[Immutability Helpers](https://facebook.github.io/react/docs/update.html)

The basic idea is to have all object immutable, which means that once an object
is created it can never be change. At this point you're wondering how is it
possible to build an anything with this restriction. Well instead of mutating an
object we switch bindings to a very similar but slightly different object.
Switching bindings is just a fancy way of saying making a variable refer to a
different object

Let's say we have an App that contains something like this:

```js
const state = {
  myName: "Alice",
  todos: ["shopping", "cleaning"]
};
```

Now if we wanted to change the name instead of just changing `state.myName` we
would return a new object with just the `myName` property changed:

```js
const newState = {
  myName: "Bob",
  todos: state.todos
};
```

The problem is, this can start to get annoying, let's instead follow Facebook's
method and create an update function that takes
[certain commands](https://facebook.github.io/react/docs/update.html#available-commands)

Here's the basic usage of the file that you'll be creating:

```js
const update = require("./your-file"); // <- this is the file you make;

const state = { name: "Alice", todos: [] };
const nextState = update(state, {
  name: { $set: "Bob" }
});
console.log(state.todos === nextState.todos); // true
```

More info: https://facebook.github.io/react/docs/update.html#available-commands
