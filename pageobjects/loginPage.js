const {expect} = require("@playwright/test");

class loginPage{

    constructor(page){
        this.page = page;
        this.email = page.getByPlaceholder("email@example.com");
        this.password = page.getByPlaceholder("enter your passsword");
        this.loginButton = page.getByRole('button',{name:"login"});

    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client")
    }

    async login(email,password,alert,name){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
        await expect(this.page.getByText(alert)).toBeVisible();
        await this.page.getByText(alert).screenshot({path:"./screenshots/"+name+".png"});
        await this.page.waitForLoadState('domcontentloaded');
    }

}
module.exports = loginPage;