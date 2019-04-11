const mongoose = require("mongoose");

// Constructing the connection of the DB
const root = "mongodb://";
const host = "localhost/";
const dbName = "exampleDB";
const connectionUrl = `${root}${host}${dbName}`;

mongoose.connect(connectionUrl, { useNewUrlParser: true });

// Constructing a schema (model)
const Sheep = mongoose.model("Sheep", {
  name: {
    type: String
  }
});

// Create a new collection
const shaun = new Sheep({ name: "Gromit" });
shaun.save();

// Find the element of a collection
Sheep.find({ name: "Gromit" })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.err(err);
  });
