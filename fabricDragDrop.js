const {chromium} =require('playwright');



async function fabricDrag(){
    let broswer= await chromium.launch({headless:false})
    let page =  await broswer.newPage()

    await page.goto("https://fabricjs.com/demos/events-inspector/")
    await page.locator('canvas[class="upper-canvas"]').click()
    await page.mouse.move(250,450)
    // await page.mouse.click(280,450)
    await page.mouse.down()
    await page.mouse.move(520,600)
    await page.mouse.up()

}

fabricDrag()