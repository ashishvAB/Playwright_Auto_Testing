import {chromium} from 'playwright'

var count = Math.floor(Math.random() * 300) ;
var ID = `rect-${count}`

async function miroLoginCreateShape(){
    let broswer= await chromium.launch({headless:false})
    let page =  await broswer.newPage()

    await page.goto("https://lucid.app/users/login#/login")
    await page.locator('input[aria-label="Email or username"]').fill('xifomob377@sfxeur.com')
    await page.locator('lucid-marketing-button[data-test-id="next-login-button"]').click()
    await page.locator('input[aria-label="Password"]').fill('tesT123#')
    await page.locator('lucid-marketing-button[data-test-id="next-login-button"]').click()
    // await page.getByTestId("new-design-file-button").click() 
    // await page.getByText('RectangleAutomation').click()

    await page.locator('lucid-folder-entry-icon-item-header')
    // await page.locator('button[id="CreationBarButton--SHAPES"]').click()
    // await page.mouse.move(Math.floor(Math.random() * 300),Math.floor(Math.random() * 300)) //100,190
    // await page.mouse.down()
    // await page.mouse.move(Math.floor(Math.random() * 300),Math.floor(Math.random() * 300))
    // await page.mouse.up()
    
    
  
}
miroLoginCreateShape()