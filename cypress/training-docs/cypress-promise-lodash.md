# Utilities

Examples of the use of methods from other commonly used libraries in Cypress, for a full reference of commands, go to [docs.cypress.io](https://on.cypress.io)

<!-- prettier-ignore-start -->
## [Cypress._](https://on.cypress.io/_)
<!-- prettier-ignore-end -->

To call a lodash method, use the `Cypress._.method()` command.

<!-- fiddle lodash -->

```js
cy.request('https://jsonplaceholder.cypress.io/users').then(
  (response) => {
    let ids = Cypress._.chain(response.body)
      .map('id')
      .take(3)
      .value()

    expect(ids).to.deep.eq([1, 2, 3])
  },
)
```

<!-- fiddle-end -->

<!-- prettier-ignore-start -->
## [Cypress.$](https://on.cypress.io/$)
<!-- prettier-ignore-end -->

To call a jQuery method, use the `Cypress.$` command.

<!-- fiddle jQuery -->

```html
<ul class="list-group utility-jquery">
  <li class="list-group-item">
    <span class="badge">5</span>
    Watches
  </li>
  <li class="list-group-item">
    <span class="badge">14</span>
    Sweaters
  </li>
  <li class="list-group-item">
    <span class="badge">22</span>
    Scarves
  </li>
</ul>
<script>
  document
    .querySelector('li.list-group-item')
    .addEventListener('click', function (e) {
      e.target.classList.add('active')
    })
</script>
```

```js
let $li = Cypress.$('.utility-jquery li:first')

cy.wrap($li)
  .should('not.have.class', 'active')
  .click()
  .should('have.class', 'active')
```


## [Cypress.Promise](https://on.cypress.io/promise)

To instantiate a new [Bluebird](https://github.com/petkaantonov/bluebird) promise, use `Cypress.Promise`.

<!-- fiddle promise -->

```js
let waited = false

/**
 * @return Bluebird<string>
 */
function waitOneSecond() {
  // return a promise that resolves after 1 second
  // @ts-ignore TS2351 (new Cypress.Promise)
  // eslint-disable-next-line no-unused-vars
  return new Cypress.Promise((resolve, reject) => {
    setTimeout(() => {
      // set waited to true
      waited = true

      // resolve with 'foo' string
      resolve('foo')
    }, 1000)
  })
}

cy.then(() =>
  // return a promise to cy.then() that
  // is awaited until it resolves
  // @ts-ignore TS7006
  waitOneSecond().then((str) => {
    expect(str).to.eq('foo')
    expect(waited).to.be.true
  }),
)

// you can also wait on a promise from the application code
// using https://on.cypress.io/wrap
cy.wrap(waitOneSecond()).should('equal', 'foo')
```

<!-- fiddle-end -->