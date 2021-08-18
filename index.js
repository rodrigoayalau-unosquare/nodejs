const express = require('express');
const app = express();
const port = 3000

// Single App for jenkins

app.get('/', (req, res) => {
    res.send("Hello World");
    console.log("looks god.");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});