//MQTT Broker

var mosca=require("mosca");
var settings ={port :1883 }

var broker = new mosca.Server(settings);
var topic4 ="ESP32/SALIDAS";

var socketServer = require("./SocketServer");

broker.on("ready",()=>
{
  console.log("\n------------------broker is ready!----------------\n");
  console.log("--------iniciando cliente mqtt-----------------\n");
  var mqtt = require('mqtt');
  var client= mqtt.connect("ws://vecserver.herokuapp.com");
  console.log("iniciando...\n");
  var direccion;
client.on("message",(topic,message)=>
{
    console.log("--mensaje recibido de mqtt-- \n"); 
    if(topic =="ESP32/DIRECCION")
    {
       direccion= message.readInt16LE(0);
        socketServer.emit('direccion', {msg: direccion});
    }
    else
    {
      
      var out="";
     
        var j=direccion;
       
      for(var  i=0; i< (message.length -1) ; i=i+2)
      {
        var elemento= message.readInt16LE(i);
      
       out=out+" <tr> <th>"+"direccion: "+j   +"</th><th>"+elemento   +"</th></tr>";
 
      j++;
    }
    socketServer.emit('tramas', {msg: out});
     // console.log("---------------------------------------");

    }

});




client.on('connect', function () {
  client.subscribe("ESP32/SALIDAS", function (err) {
    if (!err) {
      console.log("cliente subcrito a esp32x\n");
   ; }
  })

  client.subscribe("ESP32/DIRECCION", function (err) {
    if (!err) {
      console.log("cliente subcrito a direccion esp32x\n");
   ; }
  })

 
 } );


});



module.exports = broker;