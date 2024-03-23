const TwitterPost = {
    UserName : "Magfur889",
    Content : "My First Post on Twitter ",
    Likes : 150,
    Reposts : 3,
    Tags : ["@Ummeed-Academy", "@Fateh-Academy"]
};
console.log(TwitterPost);
// Get Value from the Object_Literals:-----
console.log(TwitterPost.UserName);
console.log(TwitterPost["Content"]);


// let obj = {
//     1 : "one",
//     2 : "two",
//     true : "three",
//     null : "four",
//     undefined : "five"
// };
// console.log(obj[1]);
// // console.log(obj.1); -----Error-------
// console.log(obj["1"]);
// console.log(obj["true"]);
// console.log(obj.true);
// console.log(obj.undefined);
// console.log(obj.null);

// Add/Update & Delete Value of the Literals-------------
TwitterPost.Tags = 5;
console.log(TwitterPost);
TwitterPost.Followers = 150;
console.log(TwitterPost);
delete TwitterPost.Reposts;
console.log(TwitterPost);
