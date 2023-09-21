import login from "../pageObjects/loginPage";

describe('Login Test', function() {
    it('Test 1', function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.fixture('login').then((data)=>{
            const ln = new login();
            ln.setUserName(data.username);
            ln.setPassword(data.password)
            ln.clickSubmit();
            ln.verifyLogin();

        })  
    })
})
