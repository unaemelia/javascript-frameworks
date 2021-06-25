const express = require("express"); // Import express, a lightweight framework
const app = express(); // Init express and saving it in "app" variable
const mongoose = require("mongoose"); // Import mongoose, used for handling DB and giving a NoSQL DB, such as MongoDB, the abilities of a relational DB, such as MySQL

const bodyParser = require("body-parser");
const cors = require("cors");

// Middleware
app.use(bodyParser.json()); // Format all incoming data to JSON
app.use(cors()); // Allow cross-origin requests

// ROUTES
const productsRoute = require("./routes/products");
const categoriesRoute = require("./routes/category");
app.use("/products", productsRoute);
app.use("/categories", categoriesRoute);

app.get("/", (req, res) => {
    res.send("Home page");
});

// DB connections
// mongodb+srv://<username>:<password>@cluster0.wffly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    "mongodb+srv://shop_user:12345@cluster0.qmnme.mongodb.net/Cluster0?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("DB connected");
    }
);

// Start listening to the server.
app.listen(5000); // the to requests through port 5000
