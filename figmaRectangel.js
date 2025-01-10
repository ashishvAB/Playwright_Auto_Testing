import {chromium} from 'playwright'

let browser = await chromium.launch({headless:false})
let page =  await browser.newPage();
// figd_auy1fc-rYIG9113wDMEp9iQm2WEWHUzUinRdAQ8L
// figd_auy1fc-rYIG9113wDMEp9iQm2WEWHUzUinRdAQ8L

// page.goto("https://www.figma.com/files/team/1458059825279899248/recents-and-sharing?fuid=1458059823521176160")
// xifomob377@sfxeur.com : test123#
// https://www.figma.com/files/team/1458059825279899248/recents-and-sharing?fuid=1458059823521176160

// await page.getByPlaceholder("Email").fill('xifomob377@sfxeur.com')
// await page.getByPlaceholder("Password").fill('test123#')
// await page.getByRole('button',{name:"Log in"}).click()
// await page.getByTestId("new-design-file-button").click();

//for creating a default size rectangle::
// await page.locator('div[data-tooltip="Rectangle"]').click();
// await page.locator('canvas').click({ position: { x: 89, y: 50 } })

//for custom size rectangle
// await page.locator('div[data-tooltip="Rectangle"]').click();
// await page.locator('canvas').hover({position:{x:60,'y':60}})
// await page.mouse.down()
// await page.locator('canvas').hover({position:{x:120,'y':120}}) //for creating 60*60 rectangle
// await page.mouse.up();

async function drawRectangle(pos_x=20, pos_y=20,height=50,width=50){
    let end_x = pos_x+width;
    let end_y = pos_y+height;

    page.goto("https://www.figma.com/files/team/1458059825279899248/recents-and-sharing?fuid=1458059823521176160")

    await page.getByPlaceholder("Email").fill('xifomob377@sfxeur.com')
    await page.getByPlaceholder("Password").fill('test123#')
    await page.getByRole('button',{name:"Log in"}).click()
    await page.getByTestId("new-design-file-button").click();

    //for custom size rectangle
    // await page.locator('div[data-tooltip="Rectangle"]').click();
    // await page.locator('canvas').hover({position:{x:pos_x,'y':pos_y}})
    // await page.mouse.down()
    // await page.locator('canvas').hover({position:{x:end_x,'y':end_y}}) 
    // await page.mouse.up();

    
    // console.log("Done")
    // console.log("Shape:${height},${width}")
}

// drawRectangle();

async function writeText(x_pos, y_pos,text="Default"){
    await page.goto("https://www.figma.com/files/team/1458059825279899248/recents-and-sharing?fuid=1458059823521176160")
    await page.getByPlaceholder("Email").fill('xifomob377@sfxeur.com')
    await page.getByPlaceholder("Password").fill('test123#')
    await page.getByRole('button',{name:"Log in"}).click()
    await page.getByTestId("new-design-file-button").click()
    await page.locator('div[data-tooltip="Text"]').click();

    await page.mouse.move(x_pos,y_pos)
    await page.locator('canvas').click()
    // await page.mouse.move(x_pos,y_pos).press("this is test")
    await page.keyboard.type('World Boy', { delay: 1000 });


}
writeText(23,50)