import Signup from '../../pages/signup';
let userData;

const signUp = new Signup();


describe('Signup', () => {

  before(() => {
    // we will create a new alias before each test
    cy.clearAllCookies();
    cy.fixture("userdata").then((data) => {
      userData = data;
    })
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Verify Title and Logo visibility', () => {
    signUp.titleVisibility();
    signUp.logoVisibility();
  });
  it.only('simple operation', () => {
    signUp.clickLoginSignupButton();
    signUp.typeUserName(userData.username);
    signUp.typeEmail(userData.email);
  });
  it('Click on Login/SignUp Button and Signup', () => {
    signUp.clickLoginSignupButton();
    signUp.typeUserName(userData.username);
    signUp.typeEmail(userData.email);
    cy.wait(1000);
    signUp.clickSignupButton();
    signUp.verifyCreateAccountPage();
    cy.wait(1000);



    signUp.selectGenderMale();
    signUp.typePassword(userData.password);
    signUp.selectDOB();
    signUp.clickNewsLetter();
    signUp.clickSpecialOffer();
    signUp.typeFirstName(userData.firstName);
    signUp.typeLastName(userData.lastName);
    signUp.typeCompany(userData.company);
    signUp.typeAddress(userData.address);
    signUp.typeCountry(userData.country);
    signUp.typeStateCityZip(userData.state, userData.city, userData.zip);
    signUp.typeMobile(userData.mobile);
    signUp.clickCreateAccountButton();

    cy.wait(1000);

    signUp.verifyAccountCreation();
    cy.wait(2000);
    signUp.clickLogout();

  });



  it('Signup User with existing email', () => {
    signUp.clickLoginSignupButton();
    signUp.typeUserName(userData.username);
    signUp.typeEmail(userData.email);
    signUp.clickSignupButton();
    signUp.verifyExistingEmailWhenSignUp();
    cy.wait(1000);

  });

});
