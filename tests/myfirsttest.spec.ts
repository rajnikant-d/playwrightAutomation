import { test,expect } from "@playwright/test";

test('LaunchBrowser',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')

    const pageTitle = await page.title()
    console.log('Page title is',pageTitle)
    await expect(page).toHaveTitle('The Internet')

    const pageURL = page.url()
    console.log('Page URL is',pageURL)
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/login")

    await page.close()

})