const mongoose = require("mongoose");
const { schema } = mongoose;

main()
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// Schema Validation-------------------------------------------------------s
const bookSchema = new mongoose.Schema({
  // title : String,
  // author : String,
  // price : Number,

  title: {
    type: String,
    required: true, // same as not null in sql
  },
  author: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
    min: [10, "The porice is too low for Amazon selling"], // minimum value for price
  },
  discount: {
    type: Number,
    default: 0, // default value
  },
  category: {
    type: String,
    enum: ["science", "history"], // only these values are allowed which are valid enum values
  },
  genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
  "6801fb1d8a89db27393199a7",
  { price: -20 },
  { runValidators: true } // it is used to validate the data before updating the document.
)
  .then((res) => {
    console.log("result", res);
    console.log("Book updated");
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

// Insert a sample book to create the database
// const book1 = new Book({
//     title: "MongoDB Basics",
//     author: "John Doe",
//     price: 29.99,
//     category: "science",
//     discount: 1,
//     genre: ["fiction", "adventure"],
// });

// const book2 = new Book({
//     title: "MongoDB Basics",
//     // author: "John Doe",
//     price: 29.99
// });

//     .then(res => {
//         console.log("Book saved, database created");
//     })
//     .catch(err => {
//         console.log(err);
//     });

// book1.save()
// .then(res => {
//         console.log("Book saved, database created");
//     })
//     .catch(err => {
//         console.log(err);
//     });

// book2.save()
