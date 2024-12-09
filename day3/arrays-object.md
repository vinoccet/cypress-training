---
title: Javascript Arrays - Javascript Cheatsheet
description: An array in JavaScript is a high-level, list-like object that is used to store multiple values in a single variable.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Javascript Arrays
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">MDN Web Docs</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
  The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
  </base-disclaimer-content>
</base-disclaimer>

An array in JavaScript is a high-level, list-like object that is used to store multiple values in a single variable. Each value (also called an element) in an array has a numeric position, known as its index, and it can contain data of any type—numbers, strings, booleans, functions, objects, and even other arrays:

```javascript
let fruits = ['apple', 'banana', 'cherry'];
```

## Array Declaration

In JavaScript, an array can be declared in several ways:

1. **Array literal**: This is the most common way to create an array. It uses square brackets `[]` and the elements are comma-separated.

    ```javascript
    let fruits = ['apple', 'banana', 'cherry'];
    ```

2. **Array constructor**: This uses the `new` keyword along with the `Array` constructor. It's less common and more verbose.

    ```javascript
    let fruits = new Array('apple', 'banana', 'cherry');
    ```

3. **Array.of() method**: This creates a new Array instance from a variable number of arguments.

    ```javascript
    let fruits = Array.of('apple', 'banana', 'cherry');
    ```

4. **Array.from() method**: This creates a new Array instance from an array-like or iterable object.

    ```javascript
    let fruits = Array.from(['apple', 'banana', 'cherry']);
    ```

In all these examples, `fruits` is an array that contains three strings. The strings are the elements of the array.

## Array Indexes

In JavaScript, each item in an array is assigned a numeric position, known as its index. Array indices start at 0 and increment by 1 for each subsequent element.

```javascript
let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); // logs 'apple'
console.log(fruits[1]); // logs 'banana'
console.log(fruits[2]); // logs 'cherry'
```

Here, 'apple' is at index 0, 'banana' is at index 1, and 'cherry' is at index 2 in the `fruits` array.

You can use the index to access or modify the elements of the array:

```javascript
fruits[1] = 'blueberry'; // changes 'banana' to 'blueberry'
console.log(fruits[1]); // logs 'blueberry'
```

In this case, `fruits[1] = 'blueberry'` changes the second element of the array to 'blueberry'.

## Array Length

The `length` property of an array in JavaScript returns the number of elements in the array. It's not a method, so you don't call it with parentheses.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // logs 3
```

`fruits.length` is 3 because there are three elements in the `fruits` array.

You can also use the `length` property to change the number of elements in an array:

```javascript
fruits.length = 2;
console.log(fruits); // logs ['apple', 'banana']
```

Setting `fruits.length = 2` removes the last element from the array, so the array now only contains 'apple' and 'banana'.

## The Spread Operator

The `...` notation in JavaScript is known as the spread operator. It allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

Here's an example of how to create a new array using the spread operator:

```javascript
let fruits = ['apple', 'banana', 'cherry'];
let moreFruits = [...fruits, 'date', 'elderberry'];

console.log(moreFruits); // logs ['apple', 'banana', 'cherry', 'date', 'elderberry']
```

Here, `...fruits` expands the elements of the `fruits` array into individual elements. The `moreFruits` array is a new array that contains all the elements of the `fruits` array, followed by 'date' and 'elderberry'.

You can also use the spread operator to combine two arrays:

```javascript
let fruits1 = ['apple', 'banana'];
let fruits2 = ['cherry', 'date'];
let allFruits = [...fruits1, ...fruits2];

console.log(allFruits); // logs ['apple', 'banana', 'cherry', 'date']
```

`...fruits1` and `...fruits2` expand the elements of the `fruits1` and `fruits2` arrays into individual elements. The `allFruits` array is a new array that contains all the elements of the `fruits1` and `fruits2` arrays.


<base-title :title="frontmatter.title" :description="frontmatter.description">
Javascript Array Methods
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Array methods in JavaScript
  </base-disclaimer-title>
  <base-disclaimer-content>
    Array methods in JavaScript are built-in functions that you can use to perform operations on arrays. They provide a way to manipulate arrays and work with the elements stored in them.
  </base-disclaimer-content>
</base-disclaimer>

## Array Push

The `push()` method is used to add one or more elements to the end of an array. It modifies the original array, returns the new length of the array, and is a destructive method.

```javascript
let fruits = ['apple', 'banana'];
fruits.push('orange'); // fruits is now ['apple', 'banana', 'orange']
```

'orange' is added to the end of the `fruits` array.

You can also add multiple elements at once:

```javascript
let fruits = ['apple', 'banana'];
fruits.push('orange', 'pineapple'); // fruits is now ['apple', 'banana', 'orange', 'pineapple']
```

'orange' and 'pineapple' are added to the end of the `fruits` array.

## Array Pop

The `pop()` method is used to remove the last element from an array and return that element. This method changes the length of the array.

```javascript
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop(); // lastFruit is 'orange', fruits is now ['apple', 'banana']
```

`pop()` removes the last element 'orange' from the `fruits` array and returns it, storing it in the `lastFruit` variable. The `fruits` array is now ['apple', 'banana'].

## Array Concat

The `concat()` method is used to merge two or more arrays into one. This method does not change the existing arrays, but instead returns a new array that contains all the elements from the arrays you want to combine.

```javascript
let fruits1 = ['apple', 'banana'];
let fruits2 = ['orange', 'pineapple'];
let allFruits = fruits1.concat(fruits2); // allFruits is ['apple', 'banana', 'orange', 'pineapple']
```

`concat()` merges the `fruits1` and `fruits2` arrays into a new array `allFruits`.

You can also concatenate more than two arrays:

```javascript
let fruits1 = ['apple', 'banana'];
let fruits2 = ['orange', 'pineapple'];
let fruits3 = ['mango', 'kiwi'];
let allFruits = fruits1.concat(fruits2, fruits3); // allFruits is ['apple', 'banana', 'orange', 'pineapple', 'mango', 'kiwi']
```

`concat()` merges the `fruits1`, `fruits2`, and `fruits3` arrays into a new array `allFruits`.

## Array Slice

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included). The original array will not be modified.

```javascript
let fruits = ['apple', 'banana', 'orange', 'pineapple', 'mango'];
let citrusFruits = fruits.slice(2, 4); // citrusFruits is ['orange', 'pineapple']
```

`slice()` returns a new array `citrusFruits` that contains the elements from the third position to the fourth position (0-indexed) in the `fruits` array. The `fruits` array remains unchanged.

If `end` is not specified, `slice()` will return all elements from `start` to the end of the array:

```javascript
let fruits = ['apple', 'banana', 'orange', 'pineapple', 'mango'];
let someFruits = fruits.slice(2); // someFruits is ['orange', 'pineapple', 'mango']
```

`slice()` returns a new array `someFruits` that contains all elements from the third position to the end of the `fruits` array.

## Array Splice

The `splice()` method changes the contents of an array by removing, replacing, or adding elements. It modifies the original array and returns an array containing the deleted elements, if any.

1. **Removing elements:**

```javascript
let fruits = ['apple', 'banana', 'orange', 'pineapple', 'mango'];
let removedFruits = fruits.splice(2, 2); // removedFruits is ['orange', 'pineapple'], fruits is ['apple', 'banana', 'mango']
```

`splice()` removes two elements starting from index 2 (0-indexed) in the `fruits` array. The removed elements are returned in the `removedFruits` array.

2. **Adding elements:**

```javascript
let fruits = ['apple', 'banana', 'mango'];
fruits.splice(2, 0, 'orange', 'pineapple'); // fruits is ['apple', 'banana', 'orange', 'pineapple', 'mango']
```

`splice()` adds 'orange' and 'pineapple' starting from index 2 in the `fruits` array. No elements are removed in this case.

3. **Replacing elements:**

```javascript
let fruits = ['apple', 'banana', 'mango'];
fruits.splice(1, 1, 'orange'); // fruits is ['apple', 'orange', 'mango']
```

Here, `splice()` replaces the element at index 1 ('banana') with 'orange' in the `fruits` array.


## Array Join

The `join()` method is used to join all elements of an array into a string. The elements will be separated by a specified separator. The default separator is a comma (`,`).

```javascript
let fruits = ['apple', 'banana', 'orange'];
let fruitsString = fruits.join(); // fruitsString is 'apple,banana,orange'
```

`join()` combines all elements of the `fruits` array into a string, with each element separated by a comma.

You can specify a different separator:

```javascript
let fruits = ['apple', 'banana', 'orange'];
let fruitsString = fruits.join(' - '); // fruitsString is 'apple - banana - orange'
```

`join()` combines all elements of the `fruits` array into a string, with each element separated by ' - '.

## Array Reverse

The `reverse()` method is used to reverse the order of the elements in an array. It mutates the original array.

```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.reverse(); // fruits is now ['orange', 'banana', 'apple']
```

`reverse()` reverses the order of the elements in the `fruits` array. The `fruits` array is now ['orange', 'banana', 'apple'].

## Array Sort

The `sort()` method is used to sort the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

```javascript
let fruits = ['banana', 'apple', 'orange'];
fruits.sort(); // fruits is now ['apple', 'banana', 'orange']
```

`sort()` sorts the elements in the `fruits` array in alphabetical order.

Please note that `sort()` can behave unexpectedly with numbers, as it converts numbers to strings for sorting. To sort numbers in ascending order, you can use a compare function:

```javascript
let numbers = [40, 1, 5, 200];
numbers.sort(function(a, b) {
  return a - b;
}); // numbers is now [1, 5, 40, 200]
```

`sort()` sorts the `numbers` array in ascending order. The compare function subtracts `b` from `a`. If the result is negative, `a` is sorted to an index lower than `b`. If the result is positive, `a` is sorted to an index higher than `b`. If the result is 0, no changes are done with the sort order of the two values.

## Array IndexOf

The `indexOf()` method is used to search an array for a specific element and returns its first index. If the element is not found, it returns -1.

```javascript
let fruits = ['apple', 'banana', 'orange'];
let index = fruits.indexOf('banana'); // index is 1
```

`indexOf()` searches the `fruits` array for 'banana' and returns its index, which is 1.

If the element is not in the array, `indexOf()` returns -1:

```javascript
let fruits = ['apple', 'banana', 'orange'];
let index = fruits.indexOf('pineapple'); // index is -1
```

`indexOf()` searches the `fruits` array for 'pineapple', which is not in the array, so it returns -1.

## ***Important***
## Array Find

The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```javascript
let numbers = [5, 12, 8, 130, 44];
let isLargeNumber = (element) => element > 13;
let found = numbers.find(isLargeNumber); // found is 130
```

`find()` uses the `isLargeNumber` function to find the first element in the `numbers` array that is greater than 13 and returns its value, which is 130.

If no element satisfies the testing function, `find()` returns undefined:

```javascript
let numbers = [5, 12, 8, 10, 4];
let isLargeNumber = (element) => element > 13;
let found = numbers.find(isLargeNumber); // found is undefined
```

`find()` uses the `isLargeNumber` function to find an element in the `numbers` array that is greater than 13. Since no such element exists, it returns undefined.

## Array Filter

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let numbers = [5, 12, 8, 130, 44];
let isLargeNumber = (element) => element > 13;
let filtered = numbers.filter(isLargeNumber); // filtered is [130, 44]
```

`filter()` uses the `isLargeNumber` function to create a new array with elements from the `numbers` array that are greater than 13.

If no elements pass the test, `filter()` returns an empty array:

```javascript
let numbers = [5, 12, 8, 10, 4];
let isLargeNumber = (element) => element > 13;
let filtered = numbers.filter(isLargeNumber); // filtered is []
```

`filter()` uses the `isLargeNumber` function to create a new array with elements from the `numbers` array that are greater than 13. Since no such elements exist, it returns an empty array.

## Array Map

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

```javascript
let numbers = [1, 4, 9, 16];
let roots = numbers.map(Math.sqrt); // roots is [1, 2, 3, 4]
```

`map()` uses the `Math.sqrt` function to create a new array with the square root of each element in the `numbers` array.

You can also use `map()` with a function that you define:

```javascript
let numbers = [1, 4, 9, 16];
let doubles = numbers.map((num) => num * 2); // doubles is [2, 8, 18, 32]
```

`map()` uses the provided function to create a new array with each element in the `numbers` array multiplied by 2.

## Array Reduce

The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue); // sum is 10
```

`reduce()` uses the provided function to add up the elements in the `numbers` array. The function takes two arguments: the accumulator and the current value. The accumulator is the value returned by the last invocation of the function (or the initial value, if provided), and the current value is the current element being processed.

You can also provide an initial value for the accumulator:

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 10); // sum is 20
```

`reduce()` starts with an initial accumulator value of 10, and then adds each element in the `numbers` array to this accumulator.

## Array Every

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```javascript
let numbers = [1, 30, 39, 29, 10, 13];
let isBelowThreshold = (currentValue) => currentValue < 40;
let result = numbers.every(isBelowThreshold); // result is true
```

`every()` uses the `isBelowThreshold` function to check if every element in the `numbers` array is less than 40. Since all elements pass this test, `every()` returns true.

If not all elements pass the test, `every()` returns false:

```javascript
let numbers = [1, 30, 39, 50, 13];
let isBelowThreshold = (currentValue) => currentValue < 40;
let result = numbers.every(isBelowThreshold); // result is false
```

`every()` uses the `isBelowThreshold` function to check if every element in the `numbers` array is less than 40. Since the element 50 does not pass this test, `every()` returns false.

## Array Some

The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

```javascript
let numbers = [1, 2, 3, 4, 5];
let isEven = (element) => element % 2 === 0;
let result = numbers.some(isEven); // result is true
```

`some()` uses the `isEven` function to check if there's at least one element in the `numbers` array that is even. Since the number 2 is even, `some()` returns true.

If no elements pass the test, `some()` returns false:

```javascript
let numbers = [1, 3, 5, 7, 9];
let isEven = (element) => element % 2 === 0;
let result = numbers.some(isEven); // result is false
```

`some()` uses the `isEven` function to check if there's at least one element in the `numbers` array that is even. Since no elements are even, `some()` returns false.

## Array ForEach

The `forEach()` method executes a provided function once for each array element.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((element) => console.log(element));
```

`forEach()` uses the provided function to print each element in the `numbers` array to the console.

Please note that `forEach()` does not return a value. It simply executes the provided function on each element in the array. If you need to create a new array based on the original array, consider using `map()` instead. If you need to test elements in the array and return a Boolean, consider using `every()` or `some()`. If you need to find an element in the array, consider using `find()`.

## Array isArray

The `Array.isArray()` method is used to determine whether the passed value is an Array. It returns a Boolean.

```javascript
let fruits = ['apple', 'banana', 'orange'];
let result = Array.isArray(fruits); // result is true
```

`Array.isArray()` checks if `fruits` is an array. Since `fruits` is indeed an array, `Array.isArray()` returns true.

If the passed value is not an array, `Array.isArray()` returns false:

```javascript
let number = 123;
let result = Array.isArray(number); // result is false
```

`Array.isArray()` checks if `number` is an array. Since `number` is not an array, `Array.isArray()` returns false.

## Array Includes

The `includes()` method is used to determine whether an array includes a certain value among its entries, returning true or false as appropriate.

```javascript
let fruits = ['apple', 'banana', 'orange'];
let result = fruits.includes('banana'); // result is true
```

`includes()` checks if `fruits` includes 'banana'. Since 'banana' is indeed in the array, `includes()` returns true.

If the value is not in the array, `includes()` returns false:

```javascript
let fruits = ['apple', 'banana', 'orange'];
let result = fruits.includes('pineapple'); // result is false
```

`includes()` checks if `fruits` includes 'pineapple'. Since 'pineapple' is not in the array, `includes()` returns false.


<base-title :title="frontmatter.title" :description="frontmatter.description">
Javascript Objects
</base-title>

JavaScript objects are containers for named values, called properties and methods.

<base-disclaimer>
  <base-disclaimer-title>
    From the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">MDN Web Docs</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
  </base-disclaimer-content>
</base-disclaimer>

An example JavaScript object:

```javascript
let car = {
  maker: "Toyota",
  model: "Camry",
  year: 2020,
  startEngine: function() {
    return "Engine started";
  }
};
```

`maker`, `model`, and `year` are properties of the `car` object, and `startEngine` is a method. You can access the properties using dot notation (e.g., `car.maker`) or bracket notation (e.g., `car["maker"]`), and you can call the method like this: `car.startEngine()`.

## Object Declaration

You can declare an object in a few different ways:

1. **Object Literal Syntax**: This is the most common way to create an object in JavaScript. You simply define the property and value within curly braces `{}`.

```javascript
let obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};
```

2. **Object Constructor**: This is another way to create an object but it's not as commonly used as the literal syntax.

```javascript
let obj = new Object();
obj.key1 = 'value1';
obj.key2 = 'value2';
obj.key3 = 'value3';
```


## Object Properties

You can read an object property using either `dot notation` or `bracket notation`.

1. **Dot Notation**:

```javascript
let obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

console.log(obj.key1); // Outputs: 'value1'
```

2. **Bracket Notation**:

```javascript
let obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

console.log(obj['key1']); // Outputs: 'value1'
```

In both examples, we're reading the property `key1` from the object `obj`.

## Updating Object Properties

Update the properties of an object using either `dot notation` or `bracket notation`.

1. **Dot Notation**:

```javascript
let obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

obj.key1 = 'new value1';
console.log(obj.key1); // Outputs: 'new value1'
```

2. **Bracket Notation**:

```javascript
let obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

obj['key1'] = 'new value1';
console.log(obj['key1']); // Outputs: 'new value1'
```

In both cases, we're updating the property `key1` of the object `obj` to a new value.

## Adding Object Properties

Add properties to an object after it has been created. This can be done using either `dot notation` or `bracket notation`.

1. **Dot Notation**:

```javascript
let obj = {
  key1: 'value1',
  key2: 'value2'
};

obj.key3 = 'value3';
console.log(obj.key3); // Outputs: 'value3'
```

2. **Bracket Notation**:

```javascript
let obj = {
  key1: 'value1',
  key2: 'value2'
};

obj['key3'] = 'value3';
console.log(obj['key3']); // Outputs: 'value3'
```

In both examples, we're adding a new property `key3` to the object `obj`.

## Checking if a Property Exists

You can check if a property exists in an object using several methods:

1. **The `in` operator**: This returns `true` if the property exists in the object.

```javascript
let obj = {
  key1: 'value1',
  key2: 'value2'
};

console.log('key1' in obj); // Outputs: true
console.log('key3' in obj); // Outputs: false
```

## Iterating Over Object Properties

Iterate over an object's properties using a `for...in` loop.

```javascript
let obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ': ' + obj[key]);
  }
}
```

The `for...in` loop iterates over each property in the object `obj`. The `hasOwnProperty` method is used to ensure that the property belongs to the object itself and not its prototype chain. The output will be:

```
key1: value1
key2: value2
key3: value3
```

## Object Methods

Objects can have methods. Methods are functions that are stored as object properties.

```javascript
let obj = {
  property1: 'value1',
  property2: 'value2',
  myMethod: function() {
    console.log('This is a method!');
  }
};

// Call the method
obj.myMethod(); // Outputs: 'This is a method!'
```

`myMethod` is a method of the object `obj`. You can call it using the object name followed by the method name.

You can also use the `this` keyword in methods to refer to the object:

```javascript
let obj = {
  property1: 'value1',
  property2: 'value2',
  myMethod: function() {
    console.log('Property1 is ' + this.property1);
  }
};

// Call the method
obj.myMethod(); // Outputs: 'Property1 is value1'
```

`this.property1` within the method refers to the `property1` of the object `obj`.