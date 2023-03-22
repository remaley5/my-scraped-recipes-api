var express = require('express');
var router = express.Router();
var puppeteer = require("puppeteer");

router.post('/useurl', function(req, res, next) {
    puppeteer.launch().then(async function(browser) {
        const {url} = req.body;
        console.log('url', url);
        const page = await browser.newPage();
        await page.goto(url);
        // await page.goto(url);
        const data = await page.evaluate(() => {
            const ingredients = document.querySelectorAll('.mntl-structured-ingredients__list li');
            const array = [];
            // Enter JavaScript to run on the page here!
            for(i=0; i<ingredients.length; i++) {
                array.push({
                    quantity: ingredients[i].querySelector('[data-ingredient-quantity]').innerText,
                    unit: ingredients[i].querySelector('[data-ingredient-unit]').innerText, 
                    name: ingredients[i].querySelector('[data-ingredient-name]').innerText
                })
            }
            return array;
        })
        await browser.close();
        res.json({data})
    })
  //const browser = await puppeteer.launch( { headless: false } )

});


module.exports = router;