# Acknowlegement

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

## Environments

* 코드의 실행은 node.js v8.8.1 을 기준으로 합니다 . (`.node-version` 파일 참조 )
  * 따라서 대부분의 ES2015 문법이 사용 가능합니다 .

## What to do

* 아래의 코드를 만족하는 js 파일을 작성해주세요 .

```js
const update = require("./your-file"); // <- this is the file you make;

const state = { name: "Alice", todos: [] };
const nextState = update(state, {
  name: { $set: "Bob" }
});

console.log(nextState.name === "Bob"); // true
console.log(state.todos === nextState.todos); // true
```

## How to do

* Github 에 repository 를 만들어주세요 .
  * 혹은 이 welcome repo 를 fork 해주세요 .
* 모든 코드의 변경 과정을 잘 정리해서 commit 해주세요 .
  * commit message 도 잘 적어주세요 .
* 제한 시간 안에 마무리하신 후 메일로 마무리했다는 것을 알려주세요 .

## More to do

* 위의 What to do 는 가장 최소로 해야하는 일입니다 . 아래 일들은 여력이 된다면수
  행해주세요 .
* `test.js` 를 보면 , jest 사용을 가정한 test 파일이 있습니다 . 가능한 많은 test
  case 를 통과시켜 주세요 .
  * `npm test` 로 확인 가능
  * test case 의 추가 / 변경 / 삭제 등은 모두 자유롭게 해주세요 .( 이유만 남겨주
    세요 .)
* javascript code base 를 typescript 로 옮겨 주세요 .

## Notes

* ' 얼마나 많은 양을 커버하는가 ' 보다 ' 어떻게 문제에 접근하는가 ' 를 더 중요하
  게 생각합니다 .
* `More to do` 에 있는 것들은 말 그대로 optional 입니다 . 더 많은 기능을 추가하
  기보다 , 더 읽기 쉽고 의도를 드러내는 코드에 집중해주세요 .

## References

* [kolodny/exercises/update](https://github.com/kolodny/exercises/tree/master/update)
* [kolodny/immutality-helper](https://github.com/kolodny/immutability-helper)
