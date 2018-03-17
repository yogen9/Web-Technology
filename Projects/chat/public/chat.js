//front end handler for sockets..

//where create socket
var socket = io.connect("http://localhost:4000");


//dom objects
var rmsg = document.getElementById("rmsg"),
    smsg = document.getElementById("smsg"),
    btn = document.getElementById("btn"),
    nam = document.getElementById("name"),
    typ = document.getElementById("typ");

//events
btn.addEventListener("click", function () {
    socket.emit("chat", {
        name: nam.value,
        msg: smsg.value
    })
})
smsg.addEventListener("keypress", function (key) {
    socket.emit("typing", nam.value);
})

//handling
socket.on("chat", function (data) {
    typ.innerHTML = "";
    rmsg.innerHTML += "<p><b>" + data.name + "</b> : " + data.msg + "</p>";
    smsg.value = "";
    console.log(data);
})

socket.on("typing", function (data) {
    typ.style.color = "blue";
    typ.innerHTML = "<p><b>" + data + "</b> : is typing...</p>";
})