let mongoose = require("mongoose");
let Schema= mongoose.Schema;

let stateEsquema = new Schema(
{
    id: {type:String},
    reset: {type:String},
    
},
{
    versionKey:false
}
);

let Estado = mongoose.model("status",stateEsquema); //la coleccion se llama monitor
module.exports=Estado;