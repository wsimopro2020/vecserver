var mqtt = require('mqtt');
var client= mqtt.connect("mqtt://localhost:1883");
var topic = 'esp32/output';
var topic2='esp32/comandos';
var topic3 ="ESP32/TITULO";
var topic4 = "ESP32/SALIDAS";





console.log("Inicio el programa de subcripcion\n");









client.on("message",(topic,message)=>
{
   // message = message.toString();
  
   if(topic===topic3)
   {
    message = message.toString();
    console.log("------------------------------");
    console.log(message);
   }else
   {
    if(topic === topic4)
    {
    
      console.log("registros:");
      for(var  i=0; i< (message.length) ; i=i+2)
      {
  
        console.log((i/2)+1,")",message.readUInt16LE(i));
      }
      console.log("---------------------------------------");

    }
    if(topic == "ESP32/escribiendo")
    {
      message = message.toString();
      console.log(message);
    }
    
    
   }
   

   
  //  client.end();

});






client.on('connect', function () {
    client.subscribe(topic4, function (err) {
      if (!err) {
        client.publish('presence', 'Hello mqtt');
     ; }
    })
    client.subscribe(topic3, function (err) {
      if (!err) {
        client.publish('presence', 'Hello mqtt');
     ; }
    })
   } );
  
  
  
  

    


    /*
    
client.on("message",(topic,message)=>
{
   // message = message.toString();
  
    if(topic == topic4)
    {
      message = message.toString();
      console.log(message);
    }
    else
    {
      console.log("---------------------------------------");
      console.log("topic =",topic);
      console.log("registros:");
      for(var  i=0; i< (message.length) ; i=i+2)
      {
  
        console.log(i/2,")",message.readUInt16LE(i));
      }
      console.log("---------------------------------------");

    }

   
  //  client.end();

})
    
    */