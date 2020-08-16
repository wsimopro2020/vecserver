let mongoose = require("mongoose");

/*mongoose.connect("mongodb://localhost:27017/monitor");*/
//mongoose.connect("mongodb+srv://nodeGerman:logicos2@cluster0-vktbm.gcp.mongodb.net/DatosMonitor?retryWrites=true&w=majority");
//module.exports=mongoose;

mongoose.connect("mongodb+srv://visionelectronic:4545logicos2@cluster0.nee3m.gcp.mongodb.net/Modbus?retryWrites=true&w=majority");
module.exports = mongoose;

//mongo "mongodb+srv://cluster0.nee3m.gcp.mongodb.net/<dbname>" --username visionelectronic