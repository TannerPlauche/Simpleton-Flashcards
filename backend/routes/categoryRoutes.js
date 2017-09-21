const categoryData = require("../seed-data/categories");
const express = require("express");
const categoryRouter = express.Router();
const models = require("../models");

categoryRouter
  .route("/")
  .get((req, res) => {
    models.category
      .findAll(
        {
          //include: [{model: models.card, as: "cards"}]
        }
      )
      .then(foundCategories => {
        res.send(foundCategories);
      })
      .catch(err => res.status(500).send(err));
  })
  .post((req, res) => {
    let newUser = models.user.build(req.body);
    console.log(newUser);
    newUser
      .save()
      .then(savedUser => {
        res.send(savedUser);
      })
      .catch(err => res.status(500).send(err));
  });

categoryRouter.route("/:id").get((req, res) => {
  models.category
    .findById(req.params.id)
    .then(foundCategory => {
      res.send(foundCategory);
    })
    .catch(err => res.status(500).send(err));
});

categoryRouter.post("/createMany", (req, res) => {
  models.category
    .bulkCreate(categoryData)
    .then(() => models.category.findAll())
    .then(categories => {
      res.send(categories);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = categoryRouter;
