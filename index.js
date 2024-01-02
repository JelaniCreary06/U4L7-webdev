const express = require('express');
const app = express();

app.listen(6789, () => console.log("Server is running"));
app.use(express.static('public'));