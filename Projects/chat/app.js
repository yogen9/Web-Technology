var express = require("express");
var socketio = require("socket.io");
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

var server = app.listen(4000, function () {
    console.log("chat application starts...");
})

var io = socketio(server);

io.on("connection", function (socket) {
    console.log("connection made..", socket.id);

    socket.on("chat", function (data) {
        io.sockets.emit("chat", data);
        console.log(data);
    })

    socket.on("typing", function (data) {
        socket.broadcast.emit("typing", data);
    })
})


app.get("/", function (req, res) {
    res.render("home");
})