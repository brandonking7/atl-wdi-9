angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.loadingAll = true;
  vm.newPresident = {};
  vm.removePresident = removePresident;

  activate();

  function activate() {
    loadAllPresidents();
  }

  function addPresident(){
    $http
      .post('/presidents', vm.newPresident)
      .then(function someName(response) {
        vm.all.push(response.data.president);
        vm.newPresident = {};
      });

    //Does not save - just pushes the newPresident into array
        // vm.all.push(vm.newPresident);
        // vm.newPresident = {};
  }

  function loadAllPresidents() {
    $http
      .get('/presidents')
      .then(function resolve(response) {
        console.log(response);
        vm.all = response.data.presidents;
        vm.loadingAll = false;
      });

  }

  function removePresident(president) {
    $http
      .delete('/presidents/' + president._id)
      .then(function reset(response) {
        //First Way
        //Functional Programming
        vm.all = vm.all.filter(function(currentlyIteratedPresident) {
          return president._id !== currentlyIteratedPresident._id;
        });
        //Optional Second Way
        //Object-Oriented Way
        // var index = vm.all.indexOf(president);
        // vm.all.splice(index, 1);
      });
  }

}
