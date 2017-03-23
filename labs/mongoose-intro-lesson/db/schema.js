//
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');
// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;
//Connect to the database
var db = mongoose.connection;
// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
  console.log(err);
});
// Will log "database has been connected" if it successfully connects
db.once('open', function() {
  console.log("database has been connected!");
});

// Disconnect from database
db.close();

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  unit: String
});

var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

// var frankie = new StudentModel({name: "Frankie P.", age: 30});
// var project1 = new ProjectModel({title: "connect four", unit: "JS"});
//
// frankie.projects.push(project1);
//
// frankie.save(function(err, student) {
//   if (err) {
//     console.log(err);
//   }
//     console.log(student);
// });
//
// var bob = new StudentModel({name: "Bob C.", age: 41});
//
// bob.projects.push(project1);
//
// bob.save(function(err, student) {
//   if (err) {
//     console.log(err);
//   }
//     console.log(student);
// });

// By adding `module.exports`, we can reference these models in other files by requiring `schema.js`.
module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};
