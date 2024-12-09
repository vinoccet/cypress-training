// cy.contains and regular expressions
<div id="greeting">HeLlO wOrLd</div>
cy.contains('Hello', { matchCase: false }).should(
  'have.id',
  'greeting',
)

// cypress asserions

