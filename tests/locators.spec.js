import {test,expect} from '@playwright/test'

test('locators',async ({page})=>{

await page.goto('https://www.demoblaze.com')
await page.click('#login2')
await page.fill('#loginusername','testuser1')
await page.fill('#loginpassword','testpassword1')
await page.click('//button[@onclick="logIn()"]')
await page.waitForTimeout(5000)
})