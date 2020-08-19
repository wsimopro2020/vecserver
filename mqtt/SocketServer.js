/*Codigo para generar el servidor socket necesario para comunicacion interna y
 procesamiento dinamico
*/


var mqtt = require('mqtt');
var client= mqtt.connect("mqtt://localhost:1883");
var topic="ESP32/COMANDOS";
var bufferComandos = Buffer.alloc(3); 


    io = require("socket.io"),
    server = io.listen(8000);
    

let
    sequenceNumberByClient = new Map();

// event fired every time a new client connects:
server.on("connection", (socket) => {

    socket.on('comando', (msg) => {
        console.log("se recibio mensaje desde el cliente\n");

        bufferComandos.writeInt8(msg.funcion,0); ///funcion
        bufferComandos.writeInt8(msg.size,1);
        bufferComandos.writeInt8(msg.direccion,2); //address

        client.publish(topic,bufferComandos,3);
        
      
    
    
    })


    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    sequenceNumberByClient.set(socket, 1);

    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        sequenceNumberByClient.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });
});




module.exports = server;    //Estamos iniciando y exportando el cliente