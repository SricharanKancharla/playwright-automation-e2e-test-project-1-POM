const loginPage = require('./loginPage');

class POManager{
    constructor(page){
        this.page = page;
    }

    getLoginPage(){
        return new loginPage(this.page);
    }

}
module.exports = POManager;