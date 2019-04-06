const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
var path = require("path");

// const mongoose = require('mongoose');
// const secrets = require('./secrets');

// and create our instances
const app = express();

// app.use(express.static(path.join(__dirname + "../client")));
console.log(__dirname);

const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.PORT || 3001;
// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

const GUIDES_COLLECTION = "Guide";

// Connect to the database before starting the application server.
var db;
mongodb.MongoClient.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_jks5m4hj:c6aeigk6qborpgrdd84i4ot9pg@ds113765.mlab.com:13765/heroku_jks5m4hj",
  function(err, client) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = client.db();
    console.log("Database connection ready");
  }
);

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

// now we can set the route path & initialize the API
router.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

router.get("/categories", (req, res) => {
  const dummy_img =
    "http://www.iconarchive.com/show/100-flat-icons-by-graphicloads/home-icon.html";
  const dummy_subcats = [
    { name: "Primary Care", hasGuide: 0 },
    { name: "Children (Pediatrics)", hasGuide: 1 }
  ];
  // hard-coded for now
  return res.json({
    success: true,
    categories: [
      { name: "Employment", icon: dummy_img, subcategories: dummy_subcats },
      { name: "Food", icon: dummy_img, subcategories: dummy_subcats },
      {
        name: "Mental Health Support",
        icon: dummy_img,
        subcategories: dummy_subcats
      },
      { name: "Housing", icon: dummy_img, subcategories: dummy_subcats },
      { name: "Legal Help", icon: dummy_img, subcategories: dummy_subcats },
      { name: "Health Support", icon: dummy_img, subcategories: dummy_subcats }
    ]
  });
});

router.get("/guides", (req, res) => {
  db.collection(GUIDES_COLLECTION)
    .find({})
    .toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get guides.");
      } else {
        // guides = docs[0];
        // docs[0]["success"] = true;
        // guides = docs[0];
        console.log(docs);
        docs["success"] = true;

        res.status(200).json(docs);
      }
    });
});

router.get("/guide/:category", (req, res) => {
  var category = req.params.category;

  db.collection(GUIDES_COLLECTION)
    .find({ category: category })
    .toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get guides.");
      } else {
        res.status(200).json(docs);
        docs["success"] = true;
      }
    });
});

app.post("/guides", function(req, res) {
  const title = req.body.title;
  const content = req.body.body;
  console.log(title);
  console.log(content);
  const newGuide = { title: title, body: body };
  console.log(newGuide);
  if (!title || !content) {
    handleError(
      res,
      "Invalid guide format",
      "Must provide a body and title.",
      400
    );
  } else {
    db.collection(GUIDES_COLLECTION).insertOne(newGuide, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new guide.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

router.post("/subcategory", (req, res) => {
  // body parser lets us use the req.body
  const { parent_category, subcategory_name } = req.body;
  console.log(req.body);

  db.collection("Category").updateOne(
    { category: parent_category },
    { $push: { subcategories: subcategory_name } },
    function(err, result) {
      if (err) throw err;
      // console.log(result);
    }
  );
});

// Use our router configuration when we call /api
app.use("/api", router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
