---
title: Javascript String Manipulation - Javascript Cheatsheet
description: String manipulation refers to the process of changing, parsing, slicing, or analyzing strings in various ways.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Javascript String Manipulation
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Manipulating Strings
  </base-disclaimer-title>
  <base-disclaimer-content>
    String manipulation refers to the process of changing, parsing, slicing, or analyzing strings in various ways.
  </base-disclaimer-content>
</base-disclaimer>

## Concat

The `concat` method is used to join two or more strings together. This method does not change the existing strings, but returns a new string containing the text of the joined strings.

```javascript
let str1 = "Hello, ";
let str2 = "World!";
let result = str1.concat(str2);

console.log(result); // Outputs: "Hello, World!"
```

`str1` and `str2` are two strings. The `concat` method is called on `str1` with `str2` as the argument, resulting in a new string that is the concatenation of `str1` and `str2`. The new string is stored in the `result` variable.

## CharAt

`charAt` method is used to get the character at a specific index in a string. The index of the first character is 0, the second character is 1, and so on.

```javascript
let str = "Hello, World!";
let char = str.charAt(7);

console.log(char); // Outputs: "W"
```

Here, `str` is a string. The `charAt` method is called on `str` with 7 as the argument, which corresponds to the 8th character in the string (since the index is 0-based). The character at this index is "W", so "W" is stored in the `char` variable and then logged to the console.

## Includes

The `includes` method is used to determine whether one string can be found within another string, returning true or false as appropriate. It performs a case-sensitive search.

```javascript
let str = "Hello, World!";
let result = str.includes("World");

console.log(result); // Outputs: true
```

`str` is a string. The `includes` method is called on `str` with "World" as the argument. Since "World" is a substring of `str`, the `includes` method returns true, which is stored in the `result` variable and then logged to the console.

## IndexOf

`indexOf` method is used to determine the first occurrence of a specified value in a string. It returns the index of the value if found, or -1 if the value is not found. The search is case-sensitive.

```javascript
let str = "Hello, World!";
let index = str.indexOf("World");

console.log(index); // Outputs: 7
```

`str` is a string. The `indexOf` method is called on `str` with "World" as the argument. Since "World" is a substring of `str` and starts at index 7, the `indexOf` method returns 7, which is stored in the `index` variable and then logged to the console.

## Slice

The `slice` method is used to extract a section of a string and returns it as a new string, without modifying the original string. The method takes two parameters: the start index (inclusive), and the end index (exclusive).

```javascript
let str = "Hello, World!";
let slicedStr = str.slice(7, 12);

console.log(slicedStr); // Outputs: "World"
```

Here, `str` is a string. The `slice` method is called on `str` with 7 as the start index and 12 as the end index. This extracts the substring starting from the 8th character up to (but not including) the 13th character. The resulting substring "World" is stored in the `slicedStr` variable and then logged to the console.

## Split

The `split` method is used to divide a string into an array of substrings. It takes a separator as an argument, which specifies the character(s) to use for separating the string. If the separator is not provided, the entire string will be returned as a single element in an array.

```javascript
let str = "Hello, World!";
let array = str.split(", ");

console.log(array); // Outputs: ["Hello", "World!"]
```

`str` is a string. The `split` method is called on `str` with ", " as the separator. This divides the string into two substrings "Hello" and "World!", which are returned as elements in an array. The array is stored in the `array` variable and then logged to the console.

## Replace

The `replace` method is used to replace a specified value with another value in a string. It returns a new string with some or all matches of a pattern replaced by a replacement. The original string is not modified.

```javascript
let str = "Hello, World!";
let newStr = str.replace("World", "Universe");

console.log(newStr); // Outputs: "Hello, Universe!"
```

`str` is a string. The `replace` method is called on `str` with "World" as the pattern to be replaced and "Universe" as the replacement. This results in a new string "Hello, Universe!", which is stored in the `newStr` variable and then logged to the console.

## ToLowerCase

The `toLowerCase` method is used to convert a string to lowercase letters. This method does not change the original string, but returns a new string where all the uppercase characters are converted to lowercase.

```javascript
let str = "Hello, World!";
let lowerCaseStr = str.toLowerCase();

console.log(lowerCaseStr); // Outputs: "hello, world!"
```

`str` is a string. The `toLowerCase` method is called on `str`, resulting in a new string where all the uppercase characters are converted to lowercase. The new string is stored in the `lowerCaseStr` variable and then logged to the console.

## ToUpperCase

The `toUpperCase` method is used to convert a string to uppercase letters. This method does not change the original string, but returns a new string where all the lowercase characters are converted to uppercase.

Here's an example of how to use the `toUpperCase` method:

```javascript
let str = "Hello, World!";
let upperCaseStr = str.toUpperCase();

console.log(upperCaseStr); // Outputs: "HELLO, WORLD!"
```

`str` is a string. The `toUpperCase` method is called on `str`, resulting in a new string where all the lowercase characters are converted to uppercase. The new string is stored in the `upperCaseStr` variable and then logged to the console.

## Trim

The `trim` method is used to remove whitespace from both ends of a string. This method does not change the original string, but returns a new string with the whitespace removed.

```javascript
let str = "   Hello, World!   ";
let trimmedStr = str.trim();

console.log(trimmedStr); // Outputs: "Hello, World!"
```

`str` is a string with leading and trailing whitespace. The `trim` method is called on `str`, resulting in a new string where the whitespace at both ends is removed. The new string is stored in the `trimmedStr` variable and then logged to the console.

## TrimLeft and TrimRight

`trimLeft` and `trimRight` methods are used to remove whitespace from the beginning and end of a string respectively. These methods do not change the original string, but return a new string with the whitespace removed.

```javascript
let str = "   Hello, World!   ";
let trimmedLeftStr = str.trimLeft();
let trimmedRightStr = str.trimRight();

console.log(trimmedLeftStr); // Outputs: "Hello, World!   "
console.log(trimmedRightStr); // Outputs: "   Hello, World!"
```

In this example, `str` is a string with leading and trailing whitespace. The `trimLeft` method is called on `str`, resulting in a new string where the whitespace at the beginning is removed. Similarly, the `trimRight` method is called on `str`, resulting in a new string where the whitespace at the end is removed. The new strings are stored in the `trimmedLeftStr` and `trimmedRightStr` variables and then logged to the console.



## Javascript functions

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">Programming Functions</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A function in JavaScript is a ... of statements that performs a task or calculates a value ...To use a function, you must define it somewhere in the scope from which you wish to call it.
  </base-disclaimer-content>
</base-disclaimer>

A function is a block of organized, reusable code that is used to perform a single, related action. Functions provide better modularity for your application and a high degree of code reusing.

## Function Declaration

A function declaration in JavaScript is a way to define a function. It's also known as a function statement. The function keyword is used, followed by the name of the function, a list of parameters in parentheses, and the function body enclosed in curly braces.

```javascript
function greet() {
  console.log("Hello, world!");
}
```

`greet` is a function that prints "Hello, world!" to the console. You can call this function using its name followed by parentheses:

```javascript
greet(); // Calls the function and prints "Hello, world!" to the console
```

One of the key characteristics of function declarations is that they are hoisted, which means you can call the function before it's declared in your code:

```javascript
greet(); // This will work

function greet() {
  console.log("Hello, world!");
}
```

In this case, even though the function call appears before the function declaration in the code, it still works because function declarations are hoisted to the top of their containing scope.

## Function Parameters

In JavaScript, function parameters are the names listed in the function definition. They are used to pass values (arguments) into functions.

```javascript
function add(a, b) {
  return a + b;
}
```

`a` and `b` are the parameters of the `add` function. When you call the function, you provide values for `a` and `b`:

```javascript
let sum = add(1, 2); // 1 is the argument for 'a', and 2 is the argument for 'b'
```

1 and 2 are the arguments that are passed into the function. The function adds these values together and returns the result.

You can have as many parameters as you want, separated by commas. If you call a function with more arguments than there are parameters, the extra arguments are ignored. If you call a function with fewer arguments than there are parameters, the missing arguments are set to `undefined`.

## Function Return

In JavaScript, the `return` statement ends function execution and specifies a value to be returned to the function caller.

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(1, 2); // sum is now 3
```

`add` is a function that takes two parameters, `a` and `b`, and returns their sum. The `return` statement specifies that the sum of `a` and `b` should be returned to the function caller. When you call this function with arguments 1 and 2, the return value is 3, which is then assigned to the variable `sum`.

<base-disclaimer>
  <base-disclaimer-title>
    Functions without a return statement
  </base-disclaimer-title>
  <base-disclaimer-content>
  If a function doesn't have a `return` statement, it returns `undefined` by default. If the `return` statement is used without a value, the function also returns `undefined`.
  </base-disclaimer-content>
</base-disclaimer>

## Function Expressions

A function expression in JavaScript is a way to define a function as an expression, rather than as a statement. It can be anonymous, or it can have a name. The function is defined and assigned to a variable, and it can be used later by referencing that variable.

```javascript
let greet = function() {
  console.log("Hello, world!");
}

greet(); // Calls the function and prints "Hello, world!" to the console
```

The function is assigned to the variable `greet`. This is a function expression. The function can be called later by referencing the variable `greet`.

Function expressions are not hoisted, unlike function declarations. This means that you can't use the function before it's defined:

```javascript
greet(); // This will throw an error

let greet = function() {
  console.log("Hello, world!");
}
```

In this case, calling `greet` before it's defined results in an error, because function expressions are not hoisted to the top of their containing scope.

## Anonymous Functions

An anonymous function in JavaScript is a function that is not given a name. Instead, it is usually used where a function is expected as an argument, such as in a callback function or an event handler.

```javascript
let greet = function() {
  console.log("Hello, world!");
}

greet(); // Calls the function and prints "Hello, world!" to the console
```

In this example, the function is assigned to the variable `greet`, but the function itself does not have a name. This is an example of a function expression, which creates a function and assigns it to a variable.

Anonymous functions can also be used as arguments to other functions:

```javascript
setTimeout(function() {
  console.log("This message is delayed by 1 second.");
}, 1000);
```

Here, the anonymous function is passed as an argument to `setTimeout`. The function will be called after 1 second (1000 milliseconds).


## Arrow Functions

Arrow functions in JavaScript provide a concise syntax to write function expressions. They are anonymous and change the way `this` binds in functions.

```javascript
let greet = () => {
  console.log("Hello, world!");
}

greet(); // Calls the function and prints "Hello, world!" to the console
```

The function is assigned to the variable `greet`. This is an arrow function, indicated by the `() =>` syntax.

Arrow functions can also take parameters:

```javascript
let add = (a, b) => a + b;

let sum = add(1, 2); // sum is now 3
```

In this case, `add` is an arrow function that takes two parameters, `a` and `b`, and returns their sum. The function body is on the same line as the arrow, indicating that the result of the expression `a + b` is automatically returned.

If there's only one parameter, you can omit the parentheses:

```javascript
let square = x => x * x;

let result = square(5); // result is now 25
```

`square` is an arrow function that takes one parameter, `x`, and returns its square.
