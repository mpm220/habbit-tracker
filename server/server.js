require(".env").config();


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
},
    () => console.log("connected to MongoDB"));

app.use("/api/calendar", require("./Controllers/CalendarController"));

app.listen(5000, () => console.log("server started"))