const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const eventRouter = require("./routes/events");

const authRouter = require("./routes/auth");

const callPy = require("./routes/callPython");

const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json());

app.use(cors({
    origin:"*",
    exposedHeaders:"Authorization"
}))

app.use(callPy);

app.use(authRouter);

app.use(eventRouter);


app.use("/",(req,res,next) => {
    res.send("hello");
    res.end();
})


mongoose.connect('mongodb://localhost:27017/ev_calender')
.then(() => {
    app.listen(3000);
})
.catch((err) => {
    console.log(err);
})
