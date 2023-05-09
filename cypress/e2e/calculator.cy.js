describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should Do the arithmetical operations update the display with the result of the operation',()=>{
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','4')
  })
  
  it('should do multiple operations be chained together',()=>{
    cy.get('#number3').click()
    cy.get('#operator_add').click()
    cy.get('#number1').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','2')
  })

  it('Is the output as expected for positive numbers',()=>{
    cy.get('#number0').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','4')
  })

  it('Is the output as expected for negative numbers',()=>{
    cy.get('#number1').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','-1')
  })

  it('Is the output as expected for decimal numbers',()=>{
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','2.5')
  })

  it('Is the output as expected for very large numbers',()=>{
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#number2').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','12210')
  })
  it('What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you\'d prefer to happen, and then correct the code to make that test pass',()=>{
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','Error')
  })
})