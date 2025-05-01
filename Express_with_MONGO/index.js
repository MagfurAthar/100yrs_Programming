const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Chat = require("./models/chat.js");
const Path = require("path");
const { time } = require("console");
const methodOverride = require("method-override");

app.set("views", Path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(Path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// let chat1 = new Chat({
//     from: "Alice",
//     to: "Bob",
//     message: "Hello Bob!",
//     created_at: new Date(),
//   });

//   chat1.save().then((res) => {
//     console.log("Chat saved successfully", res);
//   }
//   ).catch((err) => {
//     console.log("Error saving chat:", err);
//   });

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

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  // res.json(chats);
  res.render("index.ejs", { chats });
});

app.get("/chats/new", async (req, res) => {
  res.render("new.ejs");
}
);

app.post("/chats", async (req, res) => {

  //Other method--------------------------------------
  // let {from, to, message} = req.body;
  // let chat = new Chat({
  //   from: from,
  //   to: to,
  //   message: message,
  //   created_at: new Date(),
  // });
  // Same thing-------------------------------------

  let newChat = new Chat({
    from: req.body.from,
    to: req.body.to,
    message: req.body.message,
    created_at: new Date(),
  });
  // console.log(newChat);
  await newChat.save();
  // res.send("working");
  res.redirect("/chats");
}
);

// edit route
app.get("/chats/:id/edit", async(req, res) => {
  // let {id} = req.params;
  let chat = await Chat.findById(req.params.id);
  res.render("edit.ejs", {chat});
});

// update route
app.put("/chats/:id", async(req, res) => {
  let {id} = req.params;
  let updatedChat = await Chat.findByIdAndUpdate(id, {
    // from: req.body.from,
    // to: req.body.to,
    message: req.body.message,
    created_at: new Date(),
  });
  // console.log(updatedChat);
  res.redirect("/chats");
}
);

// delete route
app.delete("/chats/:id", async(req, res) => {
  let {id} = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  // console.log(deletedChat);
  res.redirect("/chats");
}
);

