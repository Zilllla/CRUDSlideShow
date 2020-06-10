//REQ
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const Form = require("./models/form.js");
const db = mongoose.connection;
const dbupdateobject = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
//CONNECTION
mongoose.connect(process.env.DATABASE_URL, dbupdateobject);
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () =>
  console.log("mongo connected: ", process.env.DATABASE_URL)
);
db.on("disconnected", () => console.log("mongo disconnected"));
db.on("open", () => {
  console.log("Connection made!");
});

//ROUTES
//seedRoute
app.get("/seed", (req, res) => {
  Form.create([
    {
      title: "seed1",
      img1: "https://homepages.cae.wisc.edu/~ece533/images/boat.png"
    },
    {
      title: "seed2",
      img2: "https://homepages.cae.wisc.edu/~ece533/images/boat.png"
    },
    {
      title: "seed3",
      img3: "https://homepages.cae.wisc.edu/~ece533/images/boat.png"
    },
    {
      title: "seed4",
      img4: "https://homepages.cae.wisc.edu/~ece533/images/boat.png"
    },
    {
      title: "seed5",
      img5: "https://homepages.cae.wisc.edu/~ece533/images/boat.png"
    }
  ]);
});

app.get("/", (req, res) => {
  res.send("Hello World On Fire");
});

//LISTEN
app.listen(3000, () => {
  console.log("listening...");
});