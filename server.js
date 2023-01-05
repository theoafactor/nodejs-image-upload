const express = require('express');
require("dotenv").config();

const multer = require('multer');
const mongodb = require("mongodb");

const client = new mongodb.MongoClient(process.env.DB_URL);

const upload = multer({dest: __dirname + '/uploads/images'});

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), async (req, res) => {
    if(req.file) {

        await client.db(process.env.DB_NAME).collection("uploads").insertOne(req.file);

        res.json(req.file);
    }
    else throw 'error';
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});