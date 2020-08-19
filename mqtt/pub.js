var mqtt = require('mqtt');
var client= mqtt.connect("mqtt://localhost:1883");
var topic ='esp32/output';
var topic2 ="/topic/qos0";
var mensaje="PUBLICADO DESDE UN PC ";
var msg_on="on";
var msg_off="off";

var numero=0;
/*
comando.writeInt8(1,5);
comando.writeInt8(3,4);
comando.writeInt16LE(2, 2);
comando.writeInt16LE(12, 0);
*/

var comando = Buffer.alloc(3);  //mensaje comando con 6 bytes
/*
client.on("connect",()=>{
    setInterval(()=>
    {
        if(numero == 0)
        {
            client.publish(topic,"on");
            console.log('Encender led ',mensaje);
            numero=1;
        }
        else
        {
            client.publish(topic,"off");
            console.log('Apagar led ',mensaje);
            numero=0;
        }
       
    },5000);
    
    
}

*/




client.on("connect",()=>{
  
    var contador =0;
    var func=16;
    var contador2=0;
    comando.writeInt8(func,0); ///funcion
    comando.writeInt8(contador,1);
    comando.writeInt8(0,2); //address
    setInterval(()=>
    {
      
         //   client.publish(topic,comando,6);
         //   client.publish(topic2,"mensajes enviados");
            console.log('Se envio comando correcto ',mensaje);
      //    client.publish("ESP32/COMANDOS","se envio comando desde pc\n"); 
    //      client.publish("ESP32/COMANDOS","se envio comando desde pc\n");
           

        contador ++;
        comando.writeInt8(3,0); ///funcion
          comando.writeInt8(contador,1);
          client.publish("ESP32/COMANDOS",comando,3); 

          console.log("Enviando comando ",comando.func);
          if(contador >7)
          {
              contador=0;
             
              
          }
        
       
    },1500);
    
    
}


);