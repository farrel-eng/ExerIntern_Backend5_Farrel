const express = require("express");
require("dotenv").config()
const user_router = require('./src/routes/user.routes');
const chat_router = require('./src/routes/chat.routes');
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

require("./src/config/mongo.config").connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/user', user_router);
app.use('/chat', chat_router);

app.set("view engine", "ejs");

app.listen(port);
