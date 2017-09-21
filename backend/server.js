const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const models = require("./models/index");
const user = require("./models/user");
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/users");
const cardRoutes = require("./routes/cardRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const collectionRoutes = require("./routes/collectionRoutes");

const app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use("/categories", categoryRoutes);
app.use("/cards", cardRoutes);

app.post("/dummycategory", (req, res) => {
  let newCategory = models.category.build(req.body);
  console.log(newCategory);
  newCategory
    .save()
    .then(savedCategory => {
      res.send(savedCategory);
    })
    .catch(err => res.status(500).send(err));
});

app.post("/dummylist", (req, res) => {
  let newCollection = models.collection.build(req.body);
  console.log(newCollection);
  newCollection
    .save()
    .then(savedCollection => {
      res.send(savedCollection);
    })
    .catch(err => res.status(500).send(err));
});

app.post("/dummycardcollection", (req, res) => {
  let newCardCollection = models["card_collection"].build(req.body);
  console.log(req.body);
  newCardCollection
    .save()
    .then(savedCardCollection => {
      res.send(savedCardCollection);
    })
    .catch(err => res.status(500).send(err));
});

app.get("/dummyUser", (req, res) => {
  models.user
    .findAll({
      include: [
        { model: models.card, as: "cards" },
        { model: models.collection, as: "collections" }
      ]
    })
    .then(foundUsers => {
      res.send(foundUsers);
    })
    .catch(err => res.status(500).send(err));
});

app.get("/dummyCollection", (req, res) => {
  console.log("getlists");
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
});

app.use("/api", indexRoutes);
app.use("/users", userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
