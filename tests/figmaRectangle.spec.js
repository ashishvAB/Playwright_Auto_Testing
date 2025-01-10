import { test, expect } from '@playwright/test';

test("Rectangle Creation",async ({page})=>{
    page.goto("https://www.figma.com/files/team/1458059825279899248/recents-and-sharing?fuid=1458059823521176160")
    // xifomob377@sfxeur.com : test123#
    // https://www.figma.com/files/team/1458059825279899248/recents-and-sharing?fuid=1458059823521176160
    
    await page.getByPlaceholder("Email").fill('xifomob377@sfxeur.com')
    await page.getByPlaceholder("Password").fill('test123#')
    await page.getByRole('button',{name:"Log in"}).click()
    await page.getByTestId("new-design-file-button").click();
    
    //for creating a default size rectangle::
    // await page.locator('div[data-tooltip="Rectangle"]').click();
    // await page.locator('canvas').click({ position: { x: 89, y: 50 } })
    
    //for custom size rectangle
    await page.locator('div[data-tooltip="Rectangle"]').click();
    await page.locator('canvas').hover({position:{x:60,'y':60}})
    await page.mouse.down()
    await page.locator('canvas').hover({position:{x:120,'y':120}}) //for creating 60*60 rectangle
    await page.mouse.up();
    page.screenshot({ path: './rectangleCreation.png' })
})