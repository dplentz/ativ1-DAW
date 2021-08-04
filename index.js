const express = require("express");
const app = express();
var usuarioRoute = require('./routes/usuarioRoute');

app.use("/usuario",usuarioRoute);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen("3000",function()
{
    console.log("projeto funcionando!");
});