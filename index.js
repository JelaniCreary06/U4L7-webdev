const express = require('express');
const fs = require('fs');
const app = express();

app.listen(6789, () => console.log("Server is running"));
app.use(express.static('public'));
app.use(express.json({ limit: "1mb" }));

app.post('/api', (req, res) => {
    console.log("I got a request");
    console.log(req.body);

    res.json({
        status: 'it works',
        latitude: req.body.lat,
        longitude: req.body.lon
    });
  
    const text = fs.readFileSync('public/locations.txt', 'utf-8')

    fs.writeFileSync('public/locations.txt', `${text}${req.body.lat}!${req.body.lon},`)
})

app.get("/d", (req, res) => {
    console.log("d")
})
  