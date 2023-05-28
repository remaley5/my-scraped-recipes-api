var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const recipeController = require("../database/controller/recipe.controller");

router.use(bodyParser.json());

router.get("/:id", (req, res) => {
    //res.send('respond with a resource');
    recipeController.getRecipes(id).then((data) => res.json(data));
});

router.post("/:id", (req, res) => {
    console.log(req.body);
    recipeController
        .createRecipe(req.body.recipe)
        .then((data) => res.json(data));
});

router.put("/", (req, res) => {
    recipeController
        .updateRecipe(req.body.recipe)
        .then((data) => res.json(data));
});

router.delete("/:id", (req, res) => {
    recipeController.deleteRecipe(req.params.id).then((data) => res.json(data));
});

router.post("/scrape", (req, res, next) => {
    recipeController.scrapeRecipe(req, res, next).then((data) => data);
});

module.exports = router;
