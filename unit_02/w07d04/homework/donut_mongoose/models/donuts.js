//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

//create your donut schema:
// var Donut = Schema.Donut;
var DonutSchema = new Schema( {
  name: String
});

var Donut = mongoose.model("Donut", DonutSchema);
//export your donut with module.exports()
module.exports = Donut;
