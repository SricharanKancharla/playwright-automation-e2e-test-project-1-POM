const {test,expect} = require("@playwright/test");
const POManager = require("../pageobjects/PO_manager");
const dataSet = require("../test-data/Data.json");


for (const data of dataSet.login){
        test(`@login Login Test with ${data.state}`, async ({page})=>
{
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.login(data.mail,data.password);
        
        await expect(page.getByText(data.alert)).toBeVisible();
        await page.getByText(data.alert).screenshot({path:"./screenshots/loginPageTest/"+data.state+".png"});
});
}