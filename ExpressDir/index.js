const express = require('express');
const app = express();
console.dir(app);

const port = 8080; //3000

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.use((req, res) => {
    console.log("Request resieved");
})