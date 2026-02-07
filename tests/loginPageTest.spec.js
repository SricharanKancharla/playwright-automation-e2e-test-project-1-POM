const {test} = require("@playwright/test");
const POManager = require("../pageobjects/PO_manager");
const dataSet = require("../test-data/loginData.json");


for (const data of dataSet){
test(`Login Test with ${data.state}`, async ({page})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(data.mail,data.password,data.alert,data.state);
});
}