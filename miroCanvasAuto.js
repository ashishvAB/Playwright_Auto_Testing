import {chromium} from 'playwright'

var count = Math.floor(Math.random() * 300) ;
var ID = `rect-${count}`

async function miroLoginCreateShape(){
    let broswer= await chromium.launch({headless:false})
    let page =  await broswer.newPage()

    await page.goto("https://miro.com/login/")
    await page.getByPlaceholder("Enter your email address").fill('xifomob377@sfxeur.com')
    await page.getByPlaceholder("Enter your password").fill('tesT123#')
    await page.getByRole('button',{name:"Continue with email"}).click()
    // await page.getByTestId("new-design-file-button").click() 
    await page.getByText('CanvasAutomation').click()

    await page.locator('button[id="CreationBarButton--SHAPES"]').click()

    await  page.locator('button[data-testid="basic-rhombus"]').click()
    await page.mouse.move(Math.floor(Math.random() * 300),Math.floor(Math.random() * 300)) //100,190
    await page.mouse.down()
    await page.mouse.move(Math.floor(Math.random() * 300),Math.floor(Math.random() * 300))
    await page.mouse.up()
    
    //type text inside the box as uniqueID:
    await page.keyboard.type(ID)
    count +=1;
}

// miroLoginCreateShape()

async function miroShapeEdit(identifier='rect-1'){
    let broswer= await chromium.launch({headless:false})
    let page =  await broswer.newPage()

    await page.goto("https://miro.com/login/")
    await page.getByPlaceholder("Enter your email address").fill('xifomob377@sfxeur.com')
    await page.getByPlaceholder("Enter your password").fill('tesT123#')
    await page.getByRole('button',{name:"Continue with email"}).click()
    await page.getByText('CanvasAutomation').click()

    //iterate over all elements unit the desired element is found
    console.log("Selecting the elements")
    // await page.keyboard.press('Control+Shift+ArrowDown')
    // let selectedEle =await  page.locator('div[id="canvas-focus-holder"]').getAttribute('aria-label')
    // console.log(selectedEle)
    await new Promise(r => setTimeout(r, 2000));
    await page.locator('canvas[id="main-canvas"]').click();
    //keyboard press didn't work
    await page.keyboard.press("Control+ShiftLeft+ArrowDown")
   
    console.log("press T")
    await page.keyboard.press('T');
    console.log("press S")
    await page.keyboard.press('S');


}
// miroShapeEdit()


async function miroLoginCreateText(){
    let broswer= await chromium.launch({headless:false})
    let page =  await broswer.newPage()

    await page.goto("https://miro.com/login/")
    await page.getByPlaceholder("Enter your email address").fill('xifomob377@sfxeur.com')
    await page.getByPlaceholder("Enter your password").fill('tesT123#')
    await page.getByRole('button',{name:"Continue with email"}).click()
    // await page.getByTestId("new-design-file-button").click() 
    await page.getByText('CanvasAutomation').click()

    await page.locator('button[id="CreationBarButton--TEXT"]').click()

    await page.mouse.click(100,300)
    //type text inside the box as uniqueID:
    await page.keyboard.type("This is Text from Automation")
    // await page.locator('input[aria-label="Font size"]')
    await page.locator('input[aria-label="Font size"]')
    
    // data-testid="font-size-item__input"
}

miroLoginCreateText()
