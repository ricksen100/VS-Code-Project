import LoginPage from "../pages/loginpage.js"

const loginpage = new LoginPage();

Given('user launches the flipkart website',()=>{
    loginpage.launchurl();
})

Given('user enters the details {string} & {string} and click on login button',(username,password)=>{
    loginpage.entercredentials(username,password);
})

Given('user logs out of the application',()=>{
    loginpage.signoff();
})