//Modelo para manejor de informacion suministrada por dispositivos:



let mongoose = require("mongoose");
let Schema= mongoose.Schema;

let deviceSchema = new Schema(
{
    id: {type:String},
    fecha:{type: String},
    trama: {type:String},

},
{
    versionKey:false
}
);

let device = mongoose.model("registros",deviceSchema); //la coleccion se llama registro
module.exports=device;


/*


Esquema dentro de otro esquema
var TaskSchema = new Schema({
    name            : String,
    lastPerformed   : Date,
    folder          : String,
    user            : Schema.ObjectId
});

*/ 