const express = require("express");
const cardRouter = express.Router();
const models = require("../models");

cardRouter
  .route("/")
  .get((req, res) => {
    models.card
      .findAll({
        include: [
          { model: models.user, as: "user" },
          {
            model: models.category,
            as: "categories"
          },
          { model: models.collection, as: "collections" }
        ]
      })
      .then(foundCards => {
        res.send(foundCards);
      })
      .catch(err => res.status(500).send(err));
  })
  .post((req, res) => {
    let newCard = models.card.build(req.body.newCard);
    newCard.save()
      .then(savedCard => {
        // if (!req.body.cardCategories.length) savedCard;

        let cardCategories = req.body.cardCategories.map(item => ({ cardId: savedCard.id, categoryId: item.id }));
        console.log('cardCategories: ', cardCategories);
        res.send(savedCard)
        return models["card_category"].bulkCreate(cardCategories);
      })
      // .then(() => )
      .catch(err => res.status(500).send(err));
  });

cardRouter.route("/:id").get((req, res) => {
  models.card
    .findById(req.params.id)
    .then(foundCategory => {
      res.send(foundCategory);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = cardRouter;
