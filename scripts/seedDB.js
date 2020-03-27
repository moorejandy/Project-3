const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/projectThree"
);

const usersSeed = [
  {
    userName: "Andy",
    email: "moorejandy@gmail.com",
    password:
      "password"
  },
  {
    userName: "Test2",
    email: "an@email.com",
    password:
      "password1"
  }
 
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
