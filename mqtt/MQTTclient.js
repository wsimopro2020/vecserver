//Client MQtt 


var mqtt = require('mqtt');
var client= mqtt.connect("mqtt://localhost:1883");
var topic ="ESP32/SALIDAS";
console.log("  \n Inicio el programa de subcripcion al topic: \n",topic);
var socketServer = require("./SocketServer");



client.on("message",(topic,message)=>
{
   // message = message.toString();
  
   
    if(topic === topic4)
    {
    
      
      socketServer.emit('tramas', {msg: 'numeros llegando por esp32\n'});
      console.log("registros:");
      for(var  i=0; i< (message.length) ; i=i+2)
      {
  
        console.log((i/2)+1,")",message.readUInt16LE(i));
      }
      console.log("---------------------------------------");

    }
   
});

module.exports = client;    //Estamos iniciando y exportando el cliente