# JavaScript Advanced Functions: Generalized Map and Reduce Lab

## Learning Goals

- Define the term "callback"
- Identify duplication that can be avoided with callbacks
- Pass a callback to a function
- Call a callback from within a function
- Pass data between functions and callbacks
- Identify JavaScript's non-enforcement of _arity_

## Introduction

As you saw in the previous lesson, there's a lot of repeated code between our
various `map`-based and `reduce`-based functions. This should trigger an
"allergic" reaction in you. You learned to "DRY out" your code. In this lesson,
we'll learn to DRY out our home-grown collection-processing functions using
function expressions in JavaScript.

## Define the Term "callback"

When we pass a function expression (an anonymous function) or the _pointer_
(variable name, declared function name) to a function as an argument, the
passed function is called a _callback_. Since the receiving function will
execute, or _call_ that function at a later time; that is, it will _call_ it
_back_, it is called a callback.

## Identify Duplication That Can Be Avoided With Callbacks

Let's look at this solution code from the previous lesson:

```js
function mapToNegativize(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * src[i]) // Unique work
  }
  return r
}

function mapToNoChange(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i]) // Unique work
  }
  return r
}

function mapToDouble(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(2 * src[i]) // Unique work
  }
  return r
}

function mapToSquare(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i] * src[i]) // Unique work
  }
  return r
}
```

As you can see, the only thing that varies between these functions is the line
which we've labeled with `Unique work`. We want to get rid of that duplicated
"noise" around those lines.

When you learned to create functions, you learned that the way to _abstract_
the function is to pass in the stuff that varies as an _argument_ in the _call_
of the function. We'd _like_ to do the same thing here. Fortunately, since
JavaScript considers functions i.e. "work" to be first-class, we can pass
functions in as arguments _just like_ we pass `String`s or `Array`s.

## Pass a Callback to a Function

We pass a callback to a function adding it to the arguments list inside the `()`.


```js
function sayHello(name="") {
  console.log(`Hello${name}`)
}

let sayHola = function(name="") {
  console.log(`Hola${name}`)
}

functionUsingCallback(sayHello, sayHola, function(name="") {
  console.log(`Ni Hao${name}`)
})

function functionUsingCallback(en, es, zh, name){
...
}
```

In this code, `functionUsingCallback` will receive each of the three functions
passed to it and will store those functions in `en`, `es`, and `zh`.

Now, let's call those functions.

## Call a Callback from Within a Function

```js
function sayHello(name="") {
  console.log(`Hello${name}`)
}

let sayHola = function(name="") {
  console.log(`Hola${name}`)
}

functionUsingCallback(sayHello, sayHola, function(name="") {
  console.log(`Ni Hao${name}`)
})

function functionUsingCallback(en, es, zh, name){
  en()
  es()
  zh()
}

/* Prints */
Hello
Hola
Ni Hao
```

As we're familiar with, we _call_ the function by typing its _pointer_ name and
adding `()`.

## Pass Data Between Functions and Callbacks

As we're already familiar with, we can pass arguments when we _call_ functions
by putting them inside the `()`. By doing so we can share knowledge from within
the function to its passed-in callback(s).

```js
function sayHello(name="") {
  console.log(`Hello${name}`)
}

let sayHola = function(name="") {
  console.log(`Hola${name}`)
}

functionUsingCallback(sayHello, sayHola, function(name="") {
  console.log(`Ni Hao${name}`)
}, " Gary")

function functionUsingCallback(en, es, zh, name){
  en(name)
  es(name)
  zh(name)
}

/* Prints */
Hello Gary
Hola Gary
Ni Hao Gary
```

## Identify JavaScript's Non-enforcement of _Arity_

One interesting point about calling functions in JavaScript is that JavaScript
doesn't require you to provide the number of arguments to the function that the
function's parameters expect.

```js
function accidentProneMen(larry, curly, moe){
  return `${larry}, ${curly}, and ${moe} are an insurance risk.`
}
accidentProneMen() //=> undefined, undefined, and undefined are an insurance risk.
accidentProneMen("Fine") //=> Fine, undefined, and undefined are an insurance risk.
accidentProneMen("Fine", undefined, "Howard") //=> Fine, undefined, and Howard are an insurance risk.
```

In JavaScript (and many other disciplines/languages), the correspondence to
the number of parameters specified (Above: three, `larry`, `curly`, and `moe`)
***is not enforced*** as it is in C, Java, or Ruby. Notice, in JavaScript, you
don't even have to define default values, JavaScript merely thinks "Oh you
meant to call this function with nothing?  Cool."

The number of "how many arguments are expected" is called _arity_

Keep this in mind as you write your own `reduce`.

## Lab

In this lab, you should write a generalized `map` and `reduce` function. Both
of these functions will take an `Array` and a function and require that you pass
information between the function and the callback. Write your code in the
`index.js` file.

### `map`

Your implementation should expect a source array and a function. All the tests
will pass an `Array` and a block.

Remember, `map` returns a new `Array`.

### `reduce`

Your implementation should expect a source array and _optionally_ a starting
value. All the tests will pass an `Array` and (sometimes) a starting point.

Remember, `reduce` returns a value.

You might be interested to compare the code in the previous lesson to the code
in this lesson: they're the exact same expectations but since we know how to
use blocks we need only call `map` versus `map_to_negativize`;
`map` versus `map_to_no_change`, etc...

```js
mapToSquare([1, 2, 3, -9]) //=> [1, 4, 9, 81]
```

became _generalized_ as:

```js
map([1, 2, 3, -9], function(a){ return a * a }) //=> [1, 4, 9, 81]
```

## Conclusion

Congratulations you've linked your conceptual grasp of collection processing
with the understanding of the code needed in collection-processing functions.
