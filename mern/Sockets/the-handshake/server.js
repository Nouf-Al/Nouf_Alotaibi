const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const port = 8000;

const server = app.listen(port,console.log(`Listening on port: ${port}`));

const io = require("socket.io")(server, {
    cors:{
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
    }
});

io.on("connection", socket => {
    //event listeners here
    console.log("Nice to meet you. (shake hand)")
    io.emit('Welcome', socket.id)

})