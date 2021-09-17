const express = require("express");

const mongoose = require("mongoose");

const eventRouter = require("./routes/events");

const cors = require("cors");

const app = express();

app.use(cors({
    origin:"*",
    exposedHeaders:"Authorization"
}))

app.use(eventRouter);


app.use("/",(req,res,next) => {
    res.send("hello");
    res.end();
})


mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.kpq9o.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`)
.then(() => {
    app.listen(3000);
})
.catch((err) => {
    console.log(err);
})
