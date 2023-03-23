var express = require('express');
var router = express.Router();
var puppeteer = require("puppeteer");

router.post('/useurl', function(req, res, next) {
    puppeteer.launch().then(async function(browser) {
        const {url} = req.body;
        console.log('url', url);
        try {
            const page = await browser.newPage();
            await page.goto(url);
            const data = await page.evaluate(() => {
                const ingredients = document.querySelectorAll('.mntl-structured-ingredients__list li');
                const ingredientsArray = [];
                // Enter JavaScript to run on the page here!
                for(i=0; i<ingredients.length; i++) {
                    ingredientsArray.push({
                        quantity: ingredients[i].querySelector('[data-ingredient-quantity]').innerText,
                        unit: ingredients[i].querySelector('[data-ingredient-unit]').innerText, 
                        name: ingredients[i].querySelector('[data-ingredient-name]').innerText
                    })
                }

                //Get steps
                const steps = document.querySelectorAll('.recipe__steps-content ol li p');
                const stepsArray = [];
                for(i=0; i<steps.length; i++) {
                    stepsArray.push(steps[i].innerText);
                }
                console.log()
                return {steps: stepsArray, ingredients: ingredientsArray};
                //return ingredientsArray;
            })
            await browser.close();
            console.log('data: ', data);
            res.json({data})
        } catch(error) {
            res.status(400).json({error});
        }
        // await page.goto(url);
    })
  //const browser = await puppeteer.launch( { headless: false } )

});


module.exports = router;