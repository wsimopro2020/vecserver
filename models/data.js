let mongoose = require("mongoose");
let Schema= mongoose.Schema;

let dataEsquema = new Schema(
{
    id: {type:String},
    fecha:{type: String},
    trama: {type:String},

},
{
    versionKey:false
}
);

let Data = mongoose.model("datos",dataEsquema); //la coleccion se llama monitor
module.exports=Data;