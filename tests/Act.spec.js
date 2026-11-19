const{test,expect}=require('@playwright/test')
test ("Open", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const title=page.title();
    console.log(title);
})