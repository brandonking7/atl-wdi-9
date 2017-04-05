// Register this controller to Angular
angular.module('InfamousCriminals', ['ngMessages', 'ngAnimate'])
.controller('CriminalsController', CriminalsController)
.controller('formCtrl');

<<<<<<< HEAD
// Injecting our dependencies
CriminalsController.$inject = ['CriminalsService'];
function CriminalsController(CriminalsService) {

=======
CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
    });
  }

  function addCriminal(){
<<<<<<< HEAD
    CriminalsService.addCriminal(self.newCriminal).then(function() {
      self.getCriminals();
        self.newCriminal = {};

    });
=======
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }

}
