class login {
    txtUserName = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
    textPassword = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
    btnSubmit = ".oxd-button";
    lblMessage = ".oxd-topbar-header-breadcrumb > .oxd-text";

    setUserName(username){
        cy.get(this.txtUserName).type(username);
    }
    setPassword(password){
        cy.get(this.textPassword).type(password);
    }
    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }
    verifyLogin(){
        cy.get(this.lblMessage).should('have.text','Dashboard');
    }
}
export default login;
