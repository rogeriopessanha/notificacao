
import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("ESTOU CONECTADO")

    socket.on("disconnect", () => {
        console.log("SAINDO DO SERVIDOR...")
    })
});

io.listen(5000);