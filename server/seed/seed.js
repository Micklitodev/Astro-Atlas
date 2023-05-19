const db = require("../config/connection");
const { Book } = require("../models");

const recipeData = require("./recipedata.json");

db.once("open", async () => {
  await Recipe.deleteMany({});

  await Recipe.insertMany(recipeData);

  console.log("all done!");
  process.exit(0);
});
