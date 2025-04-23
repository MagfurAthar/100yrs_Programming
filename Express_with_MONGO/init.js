const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mychat");
}

// initialize the database with some data-----------------
let allChats = [
  {
    from: "Alice",
    to: "Bob",
    message: "Hello Bob!",
    created_at: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Hello Alice!",
    created_at: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "How are you?",
    created_at: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "I'm good, thanks!",
    created_at: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "What about you?",
    created_at: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "I'm doing well too!",
    created_at: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "Great to hear!",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);

//   chat1.save().then((res) => {
//     console.log("Chat saved successfully", res);
//   }
//   ).catch((err) => {
//     console.log("Error saving chat:", err);
//   });
