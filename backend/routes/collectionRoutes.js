const express = require("express");
const models = require("../models");
const collectionRouter = express.Router();

collectionRouter.route("/default")
  .get((req, res) => {
    models.collection
      .findAll({
        include: [
          { model: models.user, as: "creator" },
          { model: models.category, as: "category" },
          {
            model: models.card,
            as: "cards"
          }
        ]
      })
      .then(foundCollections => {
        res.send(foundCollections);
      })
      .catch(err => res.status(500).send(err));
  })

module.exports = collectionRouter;
