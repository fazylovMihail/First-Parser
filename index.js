const puppeteer = require('puppeteer');

(async ()=>{
    const html = await puppeteer.launch({headless: false})
    const page = await html.newPage()
    await page.goto('https://fazylovmihail.github.io/Physics-project/')

    let arr = await page.evaluate(() =>{
        let text = Array.from(document.querySelectorAll('html'), el => el.innerHTML)

        return text
    })

    console.log(arr)

    await html.close()
})()