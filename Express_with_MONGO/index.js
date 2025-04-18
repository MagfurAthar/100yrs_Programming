const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Chat = require("./models/chat.js");
const Path = require("path");


app.set("views", Path.join(__dirname, "views"));
app.set("view engine", "ejs");


let chat1 = new Chat({
    from: "Alice",
    to: "Bob",
    message: "Hello Bob!",
    created_at: new Date(),
  });

  chat1.save().then((res) => {
    console.log("Chat saved successfully", res);
  }
  ).catch((err) => {
    console.log("Error saving chat:", err);
  });



main()
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mychat");
}

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
