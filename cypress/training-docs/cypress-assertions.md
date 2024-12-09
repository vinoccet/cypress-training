# Assertions

Examples of asserting the state or behavior of your application in Cypress, for a full reference of commands, go to [docs.cypress.io](https://on.cypress.io/api)

## Implicit Assertions

### [.should()](https://on.cypress.io/should)

To make an assertion about the current subject, use the `.should()` command.

<!-- fiddle Implicit Assertions / .should() - make an assertion about the current subject -->

```html
<table class="table table-bordered assertion-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Column heading</th>
      <th>Column heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr class="success">
      <th scope="row">3</th>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
  </tbody>
</table>
```

```js
cy.get('.assertion-table')
  .find('tbody tr:last')
  .should('have.class', 'success')
  .find('td')
  .first()
  // checking the text of the  element in various ways
  .should('have.text', 'Column content')
  .should('contain', 'Column content')
  .should('have.html', 'Column content')
  // chai-jquery uses "is()" to check if element matches selector
  .should('match', 'td')
  // to match text content against a regular expression
  // first need to invoke jQuery method text()
  // and then match using regular expression
  .invoke('text')
  .should('match', /column content/i)

// a better way to check element's text content against a regular expression
// is to use "cy.contains"
// https://on.cypress.io/contains
cy.get('.assertion-table')
  .find('tbody tr:last')
  // finds first  element with text content matching regular expression
  .contains('td', /column content/i)
  .should('be.visible')
```

Typically the assertions have 1, 2, or 3 arguments.

```js
// 1 argument - the assertion name only like "be.visible"
cy.contains('th', '1').should('be.visible')
// 2 arguments - assertion plus its argument
// for example, the yielded element have the prop "scope" with any value
cy.contains('th', '1').should('have.prop', 'scope')
// 3 arguments - assertion, plus 2 arguments
// for example, the yielded element have the prop "scope" with value "row"
cy.contains('th', '1').should('have.prop', 'scope', 'row')
```

The number of arguments an assertion allows depends on the assertion itself.

For more examples of using the `match` assertion against jQuery elements and text, see the recipe [Match Assertion](../recipes/match-assertion.md).


<!-- fiddle-end -->

### [.and()](https://on.cypress.io/and)

To chain multiple assertions together, use the `.and()` command.

<!-- fiddle Implicit Assertions / .and() - chain multiple assertions together -->

```html
<a
  class="assertions-link active"
  href="https://on.cypress.io"
  target="_blank"
  >Cypress Docs</a
>
```

```js
// https://on.cypress.io/and
cy.get('.assertions-link')
  .should('have.class', 'active')
  .and('have.attr', 'href')
  .and('include', 'cypress.io')
```

<!-- fiddle-end -->

Note that all assertions attached to the same command must pass at the same time for the command to succeed.

### Subject

The implicit assertions keep the original subject and pass it to the next command.

<!-- fiddle Implicit Assertions / .should() - keeps the original subject -->

```js
const employee = {
  person: {
    name: {
      first: 'Joe',
      last: 'Smith',
    },
  },
}
cy.wrap(employee)
  .should('have.key', 'person')
  .then((x) => {
    // we are still working with the entire object
    expect(x).to.equal(employee)
  })
```

<!-- fiddle-end -->

Except for several assertions that DO change the subject:

- `have.property` for objects
- `have.attr` with 1 argument for DOM elements
- `have.prop` with 1 argument for DOM elements

as the next tests demonstrate

#### `have.property` assertion

<!-- fiddle Implicit Assertions / .should() - have.property changes the subject -->

```js
const employee = {
  person: {
    name: {
      first: 'Joe',
      last: 'Smith',
    },
  },
}
cy.wrap(employee)
  .should('have.property', 'person')
  .then((x) => {
    // the current subject has been changed to employee.person
    expect(x).to.equal(employee.person)
    expect(x).to.have.key('name')
  })
// Tip: you can use another implicit assertion to check the yielded property
cy.wrap(employee) // full object
  .should('have.property', 'person') // employee.person
  .should('equal', employee.person) // still employee.person
  .and('have.key', 'name') // still employee.person
  // still employee.person because have.key does not change the subject
  .should('equal', employee.person)
```

<!-- fiddle-end -->

#### Multiple properties

If you want to check multiple properties at once we can use `deep.include` assertion. Note we cannot use `deep.equals` in this case, since the object has extra properties we are not interested in.

<!-- fiddle Implicit Assertions / .should() - multiple properties -->

```js
const person = {
  firstName: 'Joe',
  lastName: 'Smith',
  age: 29,
}
cy.wrap(person).should('deep.include', {
  firstName: 'Joe',
  lastName: 'Smith',
})
```

<!-- fiddle-end -->

#### `have.prop` assertion

<!-- fiddle Implicit Assertions / .should() - have.prop yields the value -->

```html
<input id="my-age" value="20" />
```

```js
cy.get('#my-age')
  .should('have.prop', 'value', '20')
  // yields the original element
  .and('have.attr', 'id', 'my-age')
// if we don't know the exact value, we can
// yield its value using the "have.prop" assertion
// and convert it to a number before checking
// if the value falls in the given range
cy.get('#my-age')
  .should('have.prop', 'value')
  // yields the value prop
  .then(parseInt)
  .should('be.within', 10, 30)
```

<!-- fiddle-end -->

**Note:** the assertion `have.prop <name>` yields the value of the prop "name". Assertion `have.prop <name> <value>` yields the original element.

#### Input should have text value matching a regular expression

You can use the `have.prop` assertion to grab the text value and yield it to the next assertion.

<!-- fiddle Implicit Assertions / .should() - have text value matching a regular expression -->

```html
<input id="user-ssn" value="123-45-6789" />
```

```js
// it looks best if we know the exact value to check
cy.get('#user-ssn').should('have.value', '123-45-6789')
```

If we don't know the exact value to expect, we can grab the `value` property and check if it follows a regular expression.

```js
cy.get('#user-ssn')
  .should('have.prop', 'value')
  // yields the string value
  .should('match', /^\d\d\d-\d\d-\d\d\d\d$/)
```

<!-- fiddle-end -->

#### `have.attr` assertion

<!-- fiddle Implicit Assertions / .should() - have.attr changes the subject -->

```html
<div
  data-cy="subject-example"
  style="color: orange; background-color:green;"
>
  Test div
</div>
```

```js
cy.get('[data-cy=subject-example]')
  .should('have.attr', 'style')
  .then((x) => {
    // x is the complete style attribute
    const withoutWhiteSpace = x.replace(/\s/g, '')
    expect(withoutWhiteSpace).to.equal(
      'color:orange;background-color:green;',
    )
  })
// we can remove the whitespace by invoking the method
// on the yielded subject
cy.get('[data-cy=subject-example]') // jQuery element
  .should('have.attr', 'style') // string attribute
  .invoke('replace', /\s/g, '') // string without whitespace
  .should('equal', 'color:orange;background-color:green;')
```

<!-- fiddle-end -->

#### Escape special characters

Sometimes an attribute can have a special character like `.` or `:` in it. If you are just checking the attribute name, you do not need to escape them.

<!-- fiddle Implicit Assertions / .should() - have.attr with a dot -->

```html
<div id="escape-attribute" attr.aria-label="Attribute example">
  Example
</div>
```

```js
// confirm the element has the attribute
cy.get('#escape-attribute').should(
  'have.attr',
  'attr.aria-label',
)
// confirm the element has the attribute and that attribute
// has the specific value
cy.get('#escape-attribute').should(
  'have.attr',
  'attr.aria-label',
  'Attribute example',
)
```

<!-- fiddle-end -->

#### `have.attr` assertion chain

<!-- fiddle Implicit Assertions / .should() - have.attr matching part of the string -->

```

If we want to just check presence of an attribute, we can use the "have.attr" assertion with the attribute name

```js
cy.get('#my-link').should('have.attr', 'id')
// yields the value of the attribute "id"
```

**Note:** the "have.attr" assertion with one argument changes the subject yielded to the next command or assertion, unlike most assertions. When confirming the attributes it is useful if we want to confirm something about the attribute value. For example, if we want to check if the element has the attribute and the attribute has specific length, we could chain the assertions:

```js
// the anchor title should be at least 5 characters
cy.get('#my-link')
  .should('have.attr', 'title')
  // yields the value of the attribute "title"
  .should('be.a', 'string')
  .its('length')
  .should('be.greaterThan', 5)
```

If we know the expected attribute value, we can add it as the third argument to the `should(...)` assertion. In that case, the original element is yielded.

```js
cy.get('#my-link')
  .should('have.attr', 'id', 'my-link')
  // yields the original DOM element
  .should('satisfy', Cypress.dom.isElement)
  .and('have.attr', 'title', 'home page')
  // yields the original DOM element again
  .should('satisfy', Cypress.dom.isElement)
```

If we only know a part of the expected attribute, we can first assert the attribute is present, then use an assertion to match its value.

```js
cy.get('#my-link')
  .should('have.attr', 'href')
  // yields the attribute value
  // check if the href attribute includes given string
  .and('include', 'link-')
// we can also use a regular expression
cy.get('#my-link')
  .should('have.attr', 'href')
  // yields the attribute value
  .and('match', /\/link\-\d+/)
```

<!-- fiddle-end -->

<!-- fiddle Implicit Assertions / .should() - have.prop changes the subject -->

```html
<div class="first second">Test div</div>
```

```js
cy.get('.first')
  .should('have.prop', 'class')
  .then((x) => {
    // x is the class prop
    expect(x).to.equal('first second')
  })
```

<!-- fiddle-end -->

#### should be a NaN

<!-- fiddle Implicit Assertions / .should() - NaN -->

```js
cy.wrap(NaN).should('be.a.NaN')
cy.wrap(42).should('not.be.a.NaN')
```

<!-- fiddle-end -->

## Explicit Assertions

### expect

To make a BDD assertion about a specified subject, use `expect`.

<!-- fiddle Explicit Assertions / expect - make an assertion about a specified subject -->

```js
expect(true, 'it is true').to.be.true

const o = { foo: 'bar' }
expect(o, 'object reference').to.equal(o)
// "deep.equal" assertion compares the properties inside the object
expect(o, 'deep equality').to.deep.equal({ foo: 'bar' })

// matching text using regular expression
expect('FooBar').to.match(/bar$/i)
// check if the variable is defined, is a string, and has characters
const orgId = '4AB001C'
expect(orgId, 'org id').to.be.a('string').and.not.be.empty

// check if the response status code is successful
const statusCode = 204
expect(statusCode, 'status code').to.be.within(200, 399)

// check if a value is one of the three allowed choices
const fruit = 'Grapes'
expect(fruit, 'the fruit').to.be.oneOf([
  'Apples',
  'Oranges',
  'Grapes',
])

// generic predicate function check using the "satisfy" assertion
expect('Hello').to.satisfy(
  (s) => typeof s === 'string' && s.length === 5,
)
// you can use built-in Lodash predicates
expect(window.NaN, 'NaN').to.satisfy(Cypress._.isNaN)
cy.wrap(2, 'Two').should('satisfy', Cypress._.isFinite)
```

<!-- fiddle-end -->

#### string assertion

<!-- fiddle Explicit Assertions / expect - assert a substring -->

```html
<table id="substrings">
  <tbody>
    <tr>
      <td>Column 1</td>
    </tr>
  </tbody>
</table>
```

You can use the Chai assertion `include` to check if one string contains another string.

```js
expect('Hello, World')
  .to.include('Hello')
  // "contains" assertion is an alias to "include"
  .and.to.contain('World')
```

There is also a Chai assertion `string` that also checks if a string includes another string.

```js
// chai assertion "string" checks the presence of substring
cy.get('#substrings tbody tr:first td:first')
  .invoke('text')
  .then((s) => {
    // the string "s" contains the substring "Column"
    expect(s).to.string('Column')
    // the string "s" does not include the substring "Row"
    expect(s).to.not.string('Row')
  })
```

<!-- fiddle-end -->

#### Compare two lists of elements

Let's compare the text content of two lists. We would like to assert that the second list is a subset of the first one. First, we need to get the text from each list, then compare them.

**Tip:** see recipe "Getting Text from List of Elements" to see how to iterate over the list of elements and get their text content.

<!-- fiddle Explicit Assertions / expect - compare two lists -->

```html
<ol id="first">
  <li>Apples</li>
  <li>Oranges</li>
  <li>Melons</li>
  <li>Grapes</li>
</ol>
<ol id="second">
  <li>Grapes</li>
  <li>Oranges</li>
</ol>
```

```js
const firstList = []
const secondList = []
// let's get the first list of strings
cy.get('#first li').each(($li) => {
  firstList.push($li.text())
})
cy.get('#second li')
  .each(($li) => {
    secondList.push($li.text())
  })
  .then(() => {
    // when this callback runs, both lists will be populated
    expect(firstList).to.include.members(secondList)
  })
```

<!-- fiddle-end -->

### expect a NaN

<!-- fiddle Explicit Assertions / expect - NaN -->

```js
expect(NaN, 'not a number').to.be.a.NaN
expect(42).not.to.be.a.NaN
```

<!-- fiddle-end -->

### assert

To make a TDD assertion about a specified subject, use `assert`.

<!-- fiddle Explicit Assertions / assert - assert shape of an object -->

```js
const person = {
  name: 'Joe',
  age: 20,
}

assert.isObject(person, 'value is object')
```

<!-- fiddle-end -->

### Dynamic text example

We [strongly recommend that your tests are deterministic](https://on.cypress.io/conditional-testing). But sometimes you might need to match text between two elements, and you do not know what that text should be. Save the value from the first element, then compare it from a `should(cb)` callback.

<!-- fiddle Should(cb) / matches unknown text between two elements -->

```html
<div class="two-elements">
  <div class="first">Foo Bar</div>
  <div class="second">foo b a r</div>
</div>
```

```js
/**
 * Text from the first element.
 * @type {string}
 */
let text

/**
 * Normalizes passed text,
 * useful before comparing text with spaces and different capitalization.
 * @param {string} s Text to normalize
 */
const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

cy.get('.two-elements')
  .find('.first')
  .then(($first) => {
    // save text from the first element
    text = normalizeText($first.text())
  })

cy.get('.two-elements')
  .find('.second')
  .should(($div) => {
    // we can massage text before comparing
    const secondText = normalizeText($div.text())

    expect(secondText, 'second text').to.equal(text)
  })
```
<!-- fiddle-end -->

## Truthy assertion

The most "forgiving" assertion - as long as there is something truthy, `be.ok` assertion will pass.

<!-- fiddle Truthy assertion -->

```js
// explicit assertions
expect(42, 'a number').to.be.ok
expect({}, 'an object').to.be.ok
// implicit assertions
cy.wrap(console.log).should('be.ok')
cy.wrap([1, 2, 3]).should('be.ok')
cy.wrap('kids').should('be.ok')
```

Undefined, null, zero, empty strings, and false values are not ok.

```js
cy.wrap(undefined).should('not.be.ok')
cy.wrap(null).should('not.be.ok')
cy.wrap(0).should('not.be.ok')
cy.wrap(false).should('not.be.ok')
cy.wrap('').should('not.be.ok')
```

<!-- fiddle-end -->

## Satisfy a predicate function

Chai assertion `satisfy` checks the value against a predicate function that returns a boolean value.

<!-- fiddle Satisfy a predicate -->

```html
<div id="my-greeting">Hello</div>
```

```js
// my predicate functions
const isEven = (n) => n % 2 === 0
const hasHello = ($el) => $el.text() === 'Hello'

// explicit assertions
expect(42).to.satisfy(isEven)
// implicit assertions
cy.wrap(101).should('not.satisfy', isEven)
cy.get('#my-greeting')
  .should('satisfy', Cypress.dom.isVisible)
  .and('satisfy', hasHello)
```

You can add a string message to the assertion _after_ the predicate function.

```js
cy.wrap(102).should('satisfy', isEven, 'id is even')
```

<!-- fiddle-end -->

You might notice that `should('satisfy', callback)` is very similar to the powerful `should(callback)` assertion. Thus I usually prefer just the `should(callback)`. Only when the predicate is simple and has a good name, then I write `should('satisfy', named callback function)`. I can also use `should('not.satisfy', predicate)` to confirm the subject does not pass the predicate.

## Existence

In most cases, you do not need to explicitly check if the element exists - if the `cy.get`, `cy.contains`, etc. command finds an element, it exists. If you want to check that the element with a specific selector or text _does not_ exist, then attach the assertion.

<!-- fiddle Element does not exist -->

```html
<div class="animal">fox</div>
```

```css hide
.animal {
  text-transform: uppercase;
}
```

```js
// the element text is still "fox",
// the CSS uppercase transformation
// does not change the cy.contains result
cy.contains('.animal', 'FOX').should('not.exist')
// find the element correctly
// and use the built-in existence assertion
cy.contains('.animal', 'fox')
```

<!-- fiddle-end -->

## Multiple assertions

If you attach multiple assertions to the same command, all assertions must pass at once. For example, here is a test that shows how to correctly check the disappearing element.

<!-- fiddle Multiple assertions / split the command -->

```html
<div style="display: none" id="loading">Loading ...</div>
<button id="load-something">Load</button>
<script>
  document
    .getElementById('load-something')
    .addEventListener('click', function () {
      const loadingElement = document.getElementById('loading')
      // first show the loading element
      setTimeout(function showLoading() {
        loadingElement.style.display = 'block'
      }, 1500)
      // then hide the loading element
      setTimeout(function hideLoading() {
        loadingElement.style.display = 'none'
      }, 2500)
    })
</script>
```

The command below fails because the element cannot be visible AND invisible at the same time:

```js
// ⛔️ DOES NOT WORK
// cy.get('#load-something').click()
// cy.get('#loading').should('be.visible').and('not.be.visible')
```

Instead split the assertions to have separate command to re-query the element and pass one by one The first command asserts the loading element is visible, the second command gets the element again and asserts the element is invisible:

```js
// ✅ THE CORRECT WAY
cy.get('#load-something').click()
cy.get('#loading').should('be.visible')
cy.get('#loading').should('not.be.visible')
```

It is ok to add multiple assertions that can be true at the same time:

```js
cy.get('#loading')
  .should('exist')
  .and('have.text', 'Loading ...')
```

<!-- fiddle-end -->

## Input elements

When using HTML input elements, use `have.value` assertion.

<!-- fiddle Implicit Assertions / .should() - input elements have value -->

```html
<input
  id="rent"
  type="text"
  pattern="[0-9]+\.*[0-9]*"
  placeholder="e.g 000.00"
  required
/>
```

```js
cy.get('#rent').type('630.00').should('have.value', '630.00')
```

<!-- fiddle-end -->

Even if you have a numeric input, its value is still a string.

<!-- fiddle Implicit Assertions / .should() - input elements with numeric value -->

```html
<input id="count" type="number" value="12" required />
```

```js
cy.get('#count').should('have.value', '12')
// if you want to convert the value to a number
cy.get('#count').invoke('val').then(Number).should('equal', 12)
// a good practice is to have a single "should"
// to make sure the retry-ability works
cy.get('#count').should(($el) => {
  const count = Number($el.val())
  expect(count, 'count').to.equal(12)
})
```

<!-- fiddle-end -->


## Checkboxes

<!-- fiddle Checkbox is checked or not checked -->

```html
<ul id="checkboxes">
  <li>
    <input type="checkbox" name="bike" checked="checked" />
    <label for="bike">I have a bike</label>
  </li>
  <li>
    <input type="checkbox" name="car" disabled="disabled" />
    <label for="car">I have a car</label>
  </li>
</ul>
```

```css hide
li {
  list-style-type: none;
}
```

```js
cy.get('[name=bike]').should('be.checked')
cy.get('[name=car]')
  .should('not.be.checked')
  // we can also confirm this input checkbox is disabled
  .and('be.disabled')
```

<!-- fiddle-end -->

## Non-input elements

<!-- fiddle Implicit Assertions / .should() - non-input elements contain text -->

With non-input HTML elements, you can use the `contain` assertion.

```html
<p id="text-example">A brown fox ...</p>
```

```js
cy.get('#text-example').should('contain', 'brown fox')
```

<!-- fiddle-end -->

## HTML element tag

<!-- fiddle Implicit Assertions / .should() - HTML element tag -->

To confirm the HTML element's tag name, use `have.prop` assertion with property `nodeName`. Remember that node names are all capitalized like `DIV`, `P`, etc.

```html
<marquee id="tag-example">A brown fox ...</marquee>
```

```js
cy.get('#tag-example').should('have.prop', 'nodeName', 'MARQUEE')
```

You can also use `match` assertion with HTML element, which invokes jQuery [is()](https://api.jquery.com/is/) method.

```js
cy.get('#tag-example')
  // let's see if different selectors match the element
  .should('match', 'marquee')
  .and('match', '#tag-example')
  .and('match', 'marquee#tag-example')
  // you can even pass your own predicate callback function
  .and('match', (k, el) => {
    // return a boolean to pass the "match" assertion
    return el.innerText.includes('fox')
  })
```

<!-- fiddle-end -->

## Text assertions

### Include or have text

<!-- fiddle Text / include or have text -->

Let's check if the element's text is exactly the string "Hello, World!"

```html
<div id="greeting">Hello, World!</div>
```

```js
cy.get('#greeting').should('have.text', 'Hello, World!')
```

We can also check if the element's text includes a string

```js
cy.get('#greeting').should('include.text', 'Hello')
```

<!-- fiddle-end -->

### Multiple elements

If you query has multiple elements, then the text is the concatenation of all texts, because under the hood the text assertions call `jQuery.text()` method.

<!-- fiddle Text / multiple elements -->

```html
<ul id="greetings">
  <li>Hello</li>
  <li>Hi</li>
  <li>Aloha</li>
</ul>
```

```js
cy.get('#greetings li')
  .should('include.text', 'Hello')
  .and('include.text', 'Hi')
  .and('include.text', 'Aloha')
  .and('have.text', 'HelloHiAloha')
  // let's check the jQuery text() method
  .invoke('text')
  .should('equal', 'HelloHiAloha')
```

<!-- fiddle-end -->

### Compare text between two elements

Let's say we want to confirm that the text is the same in two elements A and B. We don't know the text, so we need to get it from one of the elements.

<!-- fiddle Implicit Assertions / Text / .should() - two elements -->

```html
<div class="A">Brown fox</div>
<div class="B">Brown fox</div>
```

```js
// cy.get yields a jQuery object
cy.get('.A')
  // get the text from jQuery object
  .invoke('text')
  // to use the yielded text
  // use the cy.then command
  .then((text) => {
    cy.contains('.B', text)
  })
```

<!-- fiddle-end -->


### contain.text

<!-- fiddle Implicit Assertions / Text / .should() - contain.text -->

You can check if the merged text from the found elements includes a given string using `contain.text` assertion.

```html
<div id="labels">
  <div class="label">34</div>
  <div class="label">loading...</div>
</div>
```

There are two labels, thus the text it checks is "34loading.."

```js
cy.get('#labels .label').should('contain.text', '34loading')
```

It will find each string separately.

```js
cy.get('#labels .label')
  .should('contain.text', '34')
  .and('contain.text', 'load')
```

**Tip:** if you want to consider just the first element, you can use `cy.contains`. With this command, you can use a regular expression.

```js
cy.contains('#labels .label', /^\d+$/)
```

<!-- fiddle-end -->

### Spaces

Before comparing an element text with a number, trim the spaces (if any), and convert a string into a number.

<!-- fiddle Implicit Assertions / Text / .should() - trim and convert -->

```html
<!-- Notice the newlines and spaces around the number -->
<div id="employee-number">1209</div>
```

```js
cy.get('#employee-number')
  .invoke('text')
  .invoke('trim')
  .then(Number)
  .should('equal', 1209)
```

<!-- fiddle-end -->


### Visible element with text

Let's confirm that the page contains a visible element with some text.

<!-- fiddle Implicit Assertions / Text / .should() - visible non-empty text -->

```html
<div id="greeting">Hello, there!</div>
```

```js
// if we know the precise text we are looking for
cy.get('#greeting')
  .should('be.visible')
  .and('have.text', 'Hello, there!')
// if we do not know the text
cy.get('#greeting')
  .should('be.visible')
  .invoke('text')
  .should('be.a', 'string')
  .and('be.not.empty')
```

<!-- fiddle-end -->

### Partial text match

<!-- fiddle Implicit Assertions / Text / .should() - partial text match -->

```html
<div id="parent-element">
  some text at the start
  <span class="inner">main content</span>
  and some text afterwards
</div>
```

```js
cy.get('#parent-element')
  // we only know a part of the text somewhere
  // inside the element
  .should('include.text', 'at the start')
  // "include.text" and "contain" are synonym assertions
  // to find partial text match
  .and('contain', 'some text afterwards')
  // the text inside the child element also counts
  .and('contain', 'main content')
cy.get('#parent-element')
  // if we use cy.contains command
  // we find the child <span> element
  .contains('main')
  .should('have.class', 'inner')
```

<!-- fiddle-end -->

### have.text vs contain

<!-- fiddle Implicit Assertions / Text / .should() - have.text vs contain -->

```html
<div id="blurb">A quick brown fox jumped</div>
```

```js
cy.get('#blurb')
  // assertions "include.text" and "contain"
  // are equivalent and match the entire text
  // or just part of the text
  .should('include.text', 'brown fox')
  .and('contain', 'brown fox')
  // can match the entire text
  .and('contain', 'A quick brown fox jumped')
  // "have.text" requires the full text match
  .and('have.text', 'A quick brown fox jumped')
  // but "have.text" does not allow partial text match
  .and('not.have.text', 'brown fox')
```

<!-- fiddle-end -->


### Number within range

Very useful approach to confirm a number is within certain range or between limits A and B.

<!-- fiddle Implicit Assertions / Text / .should() - number within range -->

```html
<div id="shipping">Ground shipping for $11.79, up to 2 kg.</div>
```

```js
// named capture group that matches "$" + dollar + cents text
const priceRe = /\$(?<price>\d+\.\d{2})/
cy.contains('#shipping', priceRe) // yields jQuery
  .invoke('text') // yields text
  .invoke('match', priceRe) // yields match
  .its('groups.price') // yields text
  .then(Number) // yields a number
  .should('be.within', 10, 15) // number is between X and Y
```

<!-- fiddle-end -->

### OR match using a regular expression

If you want to confirm the text matches one string or another, use a regular expression

<!-- fiddle Implicit Assertions / Text / .should() - OR match -->

```html
<div id="or-match">Joe</div>
```

```js
cy.get('#or-match')
  .invoke('text')
  .should('match', /^(Joe|Mary)$/)
// the same can be done using cy.contains command
cy.contains('#or-match', /^(Joe|Mary)$/)
```

<!-- fiddle-end -->

### OR text match using `oneOf` assertion

📺 Watch this example in the video [Compare Text In An Element Against Several Possible Values Using oneOf Assertion](https://youtu.be/B6LqwUHXCcg).

<!-- fiddle Implicit Assertions / Text / .should() - OR match using oneOf -->

```html
<div id="guest-name">Joe</div>
```

```js
cy.get('#guest-name')
  .invoke('text')
  .should('be.oneOf', ['Mary', 'Joe'])
```

<!-- fiddle-end -->

### One of the elements has the text

Imagine one of several elements should have the text we are looking for. We just don't know precisely which element does. I would recommend using the combined CSS selector `selector 1, selector 2, selector 3` which returns the combined list of all those selectors.

<!-- fiddle Implicit Assertions / Text / .should() - one of the elements has the text -->

```html
<div id="nav-1">Joe</div>
<div id="profile">
  <span data-cy="username">Joseph<span>
</div>
```

```js
// finds the first element with the text "Joe"
cy.contains('#nav-1, #profile', 'Joe').should('have.id', 'nav-1')
// same selector finds the second element with the text "Joseph"
cy.contains('#nav-1, #profile', 'Joseph').should(
  'have.id',
  'profile',
)
```

<!-- fiddle-end -->


## See also

- [Lesser known Chai assertions](../recipes/lesser-known-chai-assertions.md) recipe