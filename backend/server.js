const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const models = require("./models/index");
const user = require("./models/user");
const index = require("./routes/index");
const users = require("./routes/users");

const app = express();


// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.post("/dummyuser", (req, res) => {
    let newUser = models.user.build(req.body);
    console.log(newUser);
    newUser.save()
        .then(savedUser => {
            res.send(savedUser);
        })
        .catch(err => res.status(500).send(err));
});

app.post("/dummycategory", (req, res) => {
    let newCategory = models.category.build(req.body);
    console.log(newCategory);
    newCategory.save()
        .then(savedCategory => {
            res.send(savedCategory);
        })
        .catch(err => res.status(500).send(err));
});

app.post("/dummycard", (req, res) => {
    let newCard = models.card.build(req.body);
    console.log(newCard);
    newCard.save()
        .then(savedCard => {
            res.send(savedCard);
        })
        .catch(err => res.status(500).send(err));
});

app.post("/dummylist", (req, res) => {
    let newCollection = models.collection.build(req.body);
    console.log(newCollection);
    newCollection.save()
        .then(savedCollection => {
            res.send(savedCollection);
        })
        .catch(err => res.status(500).send(err));
});


app.post("/dummycardcollection", (req, res) => {
    let newCardCollection = models["card_collection"].build(req.body);
    console.log(req.body);
    newCardCollection.save()
        .then(savedCardCollection => {
            res.send(savedCardCollection);
        })
        .catch(err => res.status(500).send(err));
});


app.get("/dummyUser", (req, res) => {
    models.user.findAll({
        include: [
            {model: models.card, as: "cards"},
            {model: models.collection, as: "collections"}
        ]

    })
        .then(foundUsers => {
            res.send(foundUsers);
        })
        .catch(err => res.status(500).send(err));

});


app.get("/dummycard", (req, res) => {
    models.card.findAll({
        include: [{model: models.user, as: "user"}, {
            model: models.category,
            as: "categories"
        }, {model: models.collection, as: "collections"}]
    })
        .then(foundCards => {
            res.send(foundCards);
        })
        .catch(err => res.status(500).send(err));
});

app.get("/dummyCollection", (req, res) => {
    console.log("getlists");
    models.collection.findAll({
        include: [{model: models.user, as: "creator"}, {model: models.category, as: "category"}, {
            model: models.card,
            as: "cards"
        }]
    })
        .then(foundCollections => {
            res.send(foundCollections);
        })
        .catch(err => res.status(500).send(err));
});

app.get("/dummycategory", (req, res) => {
    models.category.findAll({
        include: [{model: models.card, as: "cards"}]
    })
        .then(foundCards => {
            console.log(foundCards);
            res.send(foundCards);
        })
        .catch(err => res.status(500).send(err));
});

app.use("/api", index);
// app.use("/", (req, res) => {
// res.send("Got it.");
// });
app.use("/users", users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
