const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const models = require("./models/index");
const user = require("./models/user");
// console.log(models);
const index = require("./routes/index");
const users = require("./routes/users");

const app = express();


// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.use(express.static(path.join(__dirname, "../frontend/public/assets")));

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
    let newList = models.list.build(req.body);
    console.log(newList);
    newList.save()
        .then(savedList => {
            res.send(savedList);
        })
        .catch(err => res.status(500).send(err));
});


// app.post("/dummycardcategory", (req, res) => {
//     let newCardCat = models["card_category"].build(req.body);
//     console.log(newCardCat);
//     newCardCat.save()
//         .then(savedCardcat => {
//             res.send(savedCardcat);
//         })
//         .catch(err => res.status(500).send(err));
// });

app.get("/dummyUser", (req, res)=>{
    models.user.findAll({
        include:
            {model: models.card, as: "cards"}

    })
        .then(foundUsers=>{
            res.send(foundUsers);
        })
        .catch(err => res.status(500).send(err));

});


app.get("/dummycard", (req, res)=>{
    models.card.findAll({
        include:[{model: models.user, as: "user"}, {model: models.category, as: "categories"}]
    })
        .then(foundCards=>{
            res.send(foundCards);
        })
        .catch(err => res.status(500).send(err));

});

app.get("/dummycategory", (req, res)=>{
    models.category.findAll({
        include:[{model: models.card, as: "cards"}]
    })
        .then(foundCards=>{
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
