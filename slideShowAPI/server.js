//REQ
const express = require("express");
const cors = require("cors");
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
app.use(cors());
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
//READ
app.get("/", (req, res) => {
  Form.find({}, (err, allForms) => {
    res.json(allForms);
  });
});

//CREATE
app.post("/create", (req, res) => {
  Form.create(req.body).then(data => res.json(data));
});

//UPDATE
app.put("/:id", (req, res) => {
  Form.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    res.json(data);
  });
});

//DELETE
app.delete("/:id", (req, res) => {
  Form.findByIdAndRemove(req.params.id, (err, data) => {
    res.json(data);
  });
});

//LISTEN
app.listen(4000, () => {
  console.log("listening...");
});
