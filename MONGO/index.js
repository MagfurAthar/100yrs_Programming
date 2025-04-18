const mongoose = require("mongoose");

const { schema } = mongoose;

// mongoose.connect("mongodb://localhost:27017/college");

main()
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// const db = mongoose.connection;

// db.on("error", (err) => {
//   console.log("Error connecting to MongoDB", err);
// });
// db.on("open", (config, err) => {
//   console.log({ config, err });
//   console.log("Connected to MongoDB");
// });

// schema for user------------------------------------------------
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  // password: String,
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
});

// const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

Employee.find({ age: { $gt: 23 } })  // $gt is a query operator uaed to find the data greater than 23
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// ----------------------------------------
  // Employee.findById("67e069d88d3be86f7d8e2c10") // find the data by id
  // .then((data) => {
    // console.log(data);
  // })
  // .catch((err) => {
    // console.log(err);
  // }
  // );
// ---------------------------------------





// insertOne method------------------------------------------------
// const Employee1 = new Employee({
// name: "John",
// email: "john123@yahoo.com",
// age: 23,
// });

// Employee1.save()
// .then(() => console.log("Data saved"))
// .catch((err) => console.log(err));

// insertMany method------------------------------------------------
// Employee.insertMany([
// {
// name: "John",
// email: "john123@yahoo.com",
// age: 23,
// },
// {
// name: "Smith",
// email: "smith123@hotmail.com",
// age: 25,
// },
// { name: "Doe", email: "doe123@gmial.com", age: 27 },
// ])
// .then(() => console.log("Data saved"))
// .catch((err) => console.log(err));
